const app = new Vue({
    el:'#app',
    data:{
        selectedIdGrupo: 1,    // id del grupo para registrar la sesion
        grupos:[],
        selectedSem:'',        // el semestre del horario
        semestres: ['1', '2'],
        mostrarOpciones:false,
        tramoshorario:[],
        aulas:[],
        selectedAsig: null,       // id de asignatura para registrar la sesion
        profeAsig:[],       
        estadoLunes:[],
        estadoMartes:[],
        estadoMiercoles:[],
        estadoJueves:[],
        estadoViernes:[],        
        aulaEncendida:false,
        idaulaEncendida:'',    // este es el id de aula que debe tomarse al momento de registrar la sesion
        indexAulaEncendida:'', // para revisar antes de registrar que el boton no este desactivado 
        numeroDia:[],          // numeros de dia que debe tomarse para guardar la sesion
        idTramo:[],            // numeros de tramos que se deben tomar al guardar la sesion
        estadoBtnAula:false,
        sequeda:[],
        profeEncendido:false,
        idProfeEncendido:'',   //este es el id del profesor que debe tomarse al momento de registrar la sesion
        indexProfeEncendido:'', // para revisar antes de registrar que el boton no este desactivado por siaca, no he comprobado que pueda darse el caso.
        titulosYear:[],
        selectedYear:'',       // Año del horario a registrar
        sesionesCG:[],
        idHorario:'',
        fondo:'',
        fondoEncendido:'btn-danger',
        fondoApagado:'btn-info'
    },
    created(){
        this.getTitulosYear();
        this.getAulas();
        this.getGrupos();
        this.getTramos();
        this.getGruposAsig();
        this.getProfesAsig();
    },
    computed:{
        
        datosFiltradosGA(){   // muestra solo asignaturas del grupo elegido en registrar nueva sesión
            return this.gruposAsig.filter((filtro)=>{
              return filtro.id_grupo.match(this.selectedIdGrupo) 
            });
        },
        datosFiltradosProfeAsig(){
            return this.profeAsig.filter((filtro)=>{
              return filtro.id_asig.match(this.selectedAsig)  
            });
        }   
        // datosFiltradosSesion($id_sesion){
        //     return this.sequeda.filter((filtro)=>{
        //        return filtro.id.match($id_sesion) 
        //     });
        // }
    },

    methods: {
       getTitulosYear(){            
          axios
            .get('http://localhost/ghpV01/api/crud/getTitulosYear.php')
            .then((res) => {                    
                this.titulosYear = res.data;
            });        
        },
        getGrupos() {
            axios
              .get("http://localhost/ghpV01/api/crud/getGrupos.php")
              .then((res) => {
                this.grupos = res.data;
              });
        },     
        getTramos(){
            axios
              .get("http://localhost/ghpV01/api/crud/getTramos.php")
              .then((res) => {
                this.tramoshorario = res.data;
                console.log(this.tramoshorario);
              });             
        },
        getAulas() {
            axios
              .get("http://localhost/ghpV01/api/crud/getAulas.php")
              .then((res) => {
                this.aulas = res.data;
              });
          },    
        getGruposAsig(){
            axios
            .get("http://localhost/ghpV01/api/crud/getGruposAsig.php")
            .then((res) => {
              this.gruposAsig = res.data;
            });     
          },
        getProfesAsig(){
            axios
            .get("http://localhost/ghpV01/api/crud/getProfeAsig.php")
            .then((res) => {
              this.profeAsig = res.data;
            });     
        },

        getSesionesCursoGrupo($idgrupo, $horario){
            axios
              .get("http://localhost/ghpV01/api/crud/getSesionesCurso.php/?id_grupo="+$idgrupo+"&id_horario="+$horario)
              .then((res) => {
                this.sesionesCG = res.data;
                console.log('Esto es lo que trae SesionCG'+this.sesionesCG);
              });             
        },
        getSesiones($curso, $semestre){
            axios
            .get("http://localhost/ghpV01/api/crud/getSesion.php/?curso="+$curso+"&semestre="+$semestre)
            .then((res) => {
                this.sequeda = res.data;
                this.idHorario= this.sequeda[0].id_horario;
                this.getSesionesCursoGrupo(this.selectedIdGrupo, this.idHorario);

                console.log('Esto es lo que carga sequeda:'+this.sequeda);
                console.log('Id horario ahora es:'+this.idHorario);
            });             
        },
        buscaNuevo(){
                this.lenghtAsig = this.gruposAsig.length;
                console.log('tamaño de array es:'+this.lenghtAsig);

                this.mostrarOpciones= true;
                this.construyeTabla();
                this.getSesiones(this.selectedYear, this.selectedSem);


        },
           
        selectTramoDia($dia, $tramo, $index){
            console.log("lo que trae al metodo selectTramoDia es: "+$dia+" "+$tramo+" "+$index );

            diaNumero=this.dameNumeroDia($dia);

            console.log(' este es el dia devuelto a enviar:'+diaNumero);

            var encontrado=null;
            encontrado = this.diaYTramoOcupado(diaNumero, $tramo)

            console.log('Lo que tiene encontrado es:'+encontrado);

            if(encontrado!=''){      
                this.botonesDTOcupados(encontrado, $dia, $index);
            }else{
                this.botonesDTDisponibles(diaNumero, $tramo, $index);
            }
          },

          botonesDTOcupados($idSesion, $dia, $index){
              console.log(' aca entra a botones ocupados');

              if(this.eliminaSesion($idSesion)){
                console.log(' ahora cambiara el color del boton con sesion eliminada');
                  if($dia==1){
                    this.apagarBoton( 'cambioColor1' , $index);
                  }
                  if($dia==2){
                    this.apagarBoton( 'cambioColor2' , $index);
                  }
                  if($dia==3){
                    this.apagarBoton( 'cambioColor3' , $index);
                  }
                  if($dia==4){
                    this.apagarBoton( 'cambioColor4' , $index);
                  }
                  if($dia==5){
                    this.apagarBoton( 'cambioColor5' , $index);
                  }
              }
          },
          agregarDiaYTramo($dia, $tramo){
                this.numeroDia.push($dia);
                this.idTramo.push($tramo);
          },
          apagarBoton($clases, $index){

              var x = document.getElementsByClassName($clases);
              x[$index].classList.add('btn-info');
              x[$index].classList.remove('btn-danger');

          },
          encenderBoton($clases, $index){

              var x =document.getElementsByClassName($clases);
              x[$index].classList.add('btn-danger');
              x[$index].classList.remove('btn-info');

          },
          selectAula($idaula, $index){

            console.log('trae este id de aula:'+$idaula);

            if(!this.aulaEncendida){   // si no hay ningun boton de aula encendido

                this.aulaEncendida= true;
                this.idaulaEncendida=$idaula;
                this.indexAulaEncendida=$index;
                this.encenderBoton('cambioColorA', $index);

             }else if($idaula== this.idaulaEncendida){

                 this.aulaEncendida=false;
                 this.idaulaEncendida='';
                 this.indexAulaEncendida='';
                 this.apagarBoton('cambioColorA', $index);
  
             }
             console.log('aula encendida es:'+this.idaulaEncendida+" index de aula encendida es:"+this.indexAulaEncendida);
         },
         construyeTabla(){
            for (item in this.tramoshorario){
                  this.estadoLunes.push(true);
                  this.estadoMartes.push(true);
                  this.estadoMiercoles.push(true);
                  this.estadoJueves.push(true);
                  this.estadoViernes.push(true);
            }
        },
        estadoAulas($id_aula, $dia, $id_tramo){
            var i;
            for( i = 0; i < this.sequeda.length; i++){
                if(this.sequeda[i].dia==$dia && this.sequeda[i].t_id== $id_tramo && this.sequeda[i].a_id==$id_aula){
                    return true;
                }
            }
            return false;
          },
          estadoProfe($id_profe, $dia, $id_tramo){
            var i;
            for( i = 0; i < this.sequeda.length; i++){
                if(this.sequeda[i].dia==$dia && this.sequeda[i].t_id== $id_tramo && this.sequeda[i].p_id==$id_profe){
                    return true;
                }
            }
            return false;
          },
          eliminaDiaTramoEncendido($ndia,$tramo){
            var pos='';
            var i;
            for(i = 0; i < this.numeroDia.length; i++){
                if(this.numeroDia[i]==$ndia && this.idTramo[i]==$tramo){
                  pos=i;
                }
            }
            this.numeroDia.splice(pos, 1);
            this.idTramo.splice(pos, 1);
          },

          revisaEstadoAula(){           
            // Elimina el atributo disabled a todas las aulas para después desabilitarlas si se encuentran en el array de sesiones registradas para el grupo en ese curso y semestre (array sequeda)
            var i;                
              for(i = 0; i < this.aulas.length; i++){
                  var x = document.getElementById(i);
                  x.removeAttribute('disabled');                    
              }  
                var j;
                for (j =0; j < this.numeroDia.length; j++){

                    for(i = 0; i < this.aulas.length; i++){
                       
                        var x = document.getElementById(i);
                        if(this.estadoAulas(this.aulas[i].id, this.numeroDia[j],this.idTramo[j])){
                            x.setAttribute('disabled', '');  
                        }
                    }            
                 }                       
          },
          selectProfe($idProfe, $index){

            if(!this.profeEncendido){   // si no hay ningun boton de profesor encendido

               this.profeEncendido= true;
               this.idProfeEncendido=$idProfe;
               this.indexProfeEncendido=$index;
               this.encenderBoton('cambioColorP', $index);

             }else if($idProfe== this.idProfeEncendido){

                 this.profeEncendido=false;
                 this.idProfeEncendido='';
                 this.indexProfeEncendido='';
                 this.apagarBoton('cambioColorP', $index);

             }
             console.log('profesor encendido es:'+this.idProfeEncendido+" index de profesor encendido es:"+this.indexProfeEncendido);
          },
          revisaEstadoProfe(){    

          // Elimina a todos los profesores visibles el atributo disabled
            var i;                
            for(i = 0; i < this.profeAsig.length; i++){
                var x = document.getElementById(this.profeAsig[i].id_profe*1000);

                if(!((x==="") || (x==null))){
                    x.removeAttribute('disabled'); 
                }
            }             
            // Busca la disponibilidad de los profesores en los dias y tramos marcados para inabilitar el boton
            var j;
            for (j =0; j < this.numeroDia.length; j++){

                for(i = 0; i < this.profeAsig.length; i++){
                        
                    var x = document.getElementById(this.profeAsig[i].id_profe*1000);
                    if(!((x==="") || (x==null))){
                      if(this.estadoProfe(this.profeAsig[i].id_profe, this.numeroDia[j],this.idTramo[j])){
                          x.setAttribute('disabled', '');  
                      }
                    }
                }            
             }    
          },
          registraSesion(){

              console.log( ' estoy en registrar sesion');

               if(!this.hayDiayTramo()){
                   swal.fire(' Falta un dato por lo menos', 'Elija al menos un tramo de un día', 'fail');
                   return;
               }
               if(!this.haySelectAsig()){
                   swal.fire("Falta un dato por lo menos", "Elija una asignatura", "fail");
                   return;
               }
               if(!this.hayProfeyAulaEncendidas()){
                   swal.fire("Falta un dato por lo menos", "Le faltó elejir el aula el profesor", "fail")
                   return;
               }
               if(!this.profeValido()) {
                   swal.fire('Falta un dato por lo menos', 'Elija un profesor válido', 'fail');
                   return;
               }
               if(!this.aulaValida()){
                   swal.fire('Falta un dato por lo menos', 'Elija una aula válida', 'fail');
                   return;
             }

               console.log(' esta es la cantidad y elementos de array numeroDia:'+this.numeroDia.length+' '+this.numeroDia);
               console.log('la asignatura elejida es: '+this.selectedAsig);
               console.log('el profe y aula elegidos son:'+this.idProfeEncendido+' '+this.idaulaEncendida);
               console.log(' esta todo ok, sin problemas para grabar');


              axios.post('../api/Registro/sesion.php', {selectedIdGrupo: this.selectedIdGrupo, selectedSem: this.selectedSem, selectedAsig: this.selectedAsig, idaulaEncendida: this.idAulaEncendida, idProfeEncendido: this.idProfeEncendido,idTramo:this.idTramo, numeroDia: this.numeroDia, selectedYear: this.selectedYear })
              .then( res =>{
                  this.respuesta = res.data
                  if (res.data == 'success') {           
                      location.href = '../principal/nuevaSesion.php'
                  } else {
                      swal.fire('No se pudo registrar la sesión')
                  }                  
              })

              // Debe haber por lo menos un elemento en el array numeroDias
              // No debe estar vacia la varible que guarda la seleccion de asignatura
              // No debe estar vacias las variables profesorEncendido y aulaEncendida
              // el profesor encendido debe estar visible y no tener el atributo desabled
              // el aula encendida no debe tener el atributo disabled
              
              // grabar todo en la tabla sesion

              // las otras tablas de indices con sesion estan en veremos, no parecen ser necesarias

          },
          eliminaSesion($idsesion){

              console.log('esto es lo que trae idsesion:'+$idsesion);
            
              Swal.fire({
                title: 'Esta seguro de borrar?',
                text: "No podras revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.value) {
                    axios
                      .get("http://localhost/ghpV01/api/crud/eliminarSesion.php/?id="+$idsesion)
                      .then((res) => {
                        Swal.fire(
                          'Borrado!',
                          'La sesión ha sido eliminada.',
                          'success'
                        )      
                      }); 
                      this.getSesiones(this.selectedYear, this.selectedSem);
                      return true;                          
                }else{
                  console.log(' aca estoy en eliminacion rechazada');
                  return false;
                }
              })


              // necesito: idGrupo, idhorario, iddia, idtramo
              // ejecutar funcion php para eliminar en la bd
              // ejecutar funcion de revisar botones de tramos para marcarlos con color de ocupados si hay sesiones en esos tramos y dias

          },
          alCambiarAsig(){
              if(this.profeEncendido){
                  this.apagarBoton('cambioColorP', this.indexProfeEncendido);
              }
              var i;                
              for(i = 0; i < this.profeAsig.length; i++){
                  var x = document.getElementById(this.profeAsig[i].id_profe*1000);
  
                  if(!((x==="") || (x==null))){
                      x.removeAttribute('disabled'); 
                  }
              }  
              this.idProfeEncendido = '';
              this.profeEncendido = false;
              this.indexProfeEncendido = '';
        
              var j;
              for (j =0; j < this.numeroDia.length; j++){
  
                  for(i = 0; i < this.profeAsig.length; i++){
                          
                      var x = document.getElementById(this.profeAsig[i].id_profe*1000);
                      if(!((x==="") || (x==null))){
                        if(this.estadoProfe(this.profeAsig[i].id_profe, this.numeroDia[j],this.idTramo[j])){
                            x.setAttribute('disabled', '');  
                        }
                      }
                  }            
               }    
          },
          diaYTramoOcupado($dia, $id_tramo){
            var v= this.encontrado($dia, $id_tramo);
            console.log(' esto es lo que devuelve la busqueda:'+v);
            return v;
          },
          encontrado($dia, $tramo){
              console.log(' estos parametro son los que vienen: dia'+$dia+' tramo '+$tramo);
              for(elemento of this.sesionesCG){
                console.log('esto tiene value.dia:'+elemento.dia+ ' tramo id es:'+elemento.t_id);
                if(elemento.dia == $dia && elemento.t_id== $tramo){
                  return elemento.id;
                }
              }
              return '';
          },
          verHorario(){
              console.log('ver horario');
          }, 
          hayDiayTramo(){            
              return this.numeroDia.length>0 ? true : false;
          },
          haySelectAsig(){
              return this.selectedAsig == null ? false : true;
          },
          hayProfeyAulaEncendidas(){
              return this.profeEncendido && this.aulaEncendida ? true : false;
          },
          profeValido(){
            if(this.profesorDisponible() && this.profesorVisible()) return true;
            return false;
          },
          profesorDisponible(){
            if(document.getElementById(this.idProfeEncendido).hasAttribute("disabled")) return true;            
            return false;            
          },
          profesorVisible(){
            var x = document.getElementById(this.idProfeEncendido*1000);
            if(x != null){
                console.log('El profe se encuentra visible ');
                return true;
            } 
            console.log(' el profe no esta visible');
            return false;            
          },
          aulaValida(){
            if(document.getElementById(this.idaulaEncendida).hasAttribute("disabled")) return true;
            return false;            
          },

          enciendeOApaga($estado, $clase, $dia, $tramo, $index){

            if($estado){
              this.apagarBoton($clase, $index);
              this.eliminaDiaTramoEncendido($dia, $tramo);
            }else{
              this.encenderBoton($clase, $index);
              this.agregarDiaYTramo($dia, $tramo);
            }  
          },
          botonesDTDisponibles($dia, $tramo, $index){
            console.log('aca entra a botones disponibles');
            if($dia==1){
                
              this.estadoLunes[$index] = !this.estadoLunes[$index];
              this.enciendeOApaga(this.estadoLunes[$index], 'cambioColor1', 1, $tramo, $index);
            }
            if($dia==2){

               this.estadoMartes[$index] = !this.estadoMartes[$index];
               this.enciendeOApaga(this.estadoMartes[$index], 'cambioColor2', 2, $tramo, $index);
            }
            if($dia==3){

              this.estadoMiercoles[$index] = !this.estadoMiercoles[$index];
              this.enciendeOApaga(this.estadoMiercoles[$index], 'cambioColor3', 3, $tramo, $index);
            }
            if($dia==4){
         
                this.estadoJueves[$index] = !this.estadoJueves[$index];
                this.enciendeOApaga(this.estadoJueves[$index], 'cambioColor4', 4, $tramo, $index);
            }
            if($dia==5){
          
                this.estadoViernes[$index] = !this.estadoViernes[$index];
                this.enciendeOApaga(this.estadoViernes[$index], 'cambioColor5', 5, $tramo, $index);
            }
           
            this.revisaEstadoAula();
            this.revisaEstadoProfe();
          },
          dameNumeroDia($dia){
            console.log(' esto es el dia que llega:'+$dia);
            var devuelve;
            switch ($dia.toLowerCase()) {
              case 'lunes':
                devuelve=1;
                break;
              case 'martes':
                devuelve=2;
                break;
              case 'miercoles':
                devuelve=3;
                break;
              case 'jueves':
                devuelve=4;
                break;
              case 'viernes':
                 devuelve=5;
                 break;
              default:
                devuelve='';      
            }
            return devuelve;
          },
    }
})

