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
        dataSesion:[],  
        idHorario: -1,
        mostrarmenu:''
    },
    created(){
        this.getTitulosYear();
        this.getAulas();
        this.getGrupos();
        this.getTramos();
        this.getGruposAsig();
        this.getProfesAsig();
    },
    watch:{
      selectedIdGrupo(newVal, oldVal){
        this.infoInicio();
      },
      selectedYear(newVal, oldVal){
        this.infoInicio();
      },
      selectedSem(newVal, oldVal){
        this.infoInicio();
      }
    },
    computed:{

        datosFiltradosGA(){   // muestra sólo asignaturas del grupo elegido en registrar nueva sesión
            return this.gruposAsig.filter((filtro)=>{
              return filtro.id_grupo.match(this.selectedIdGrupo) 
            });
        },
        datosFiltradosProfeAsig(){  // muestra sólo los profesores de una determinada asignatura
            return this.profeAsig.filter((filtro)=>{
              return filtro.id_asig.match(this.selectedAsig)  
            });
        },        
    },

    methods: {
      infoInicio(){
        if(this.selectedYear!='' && this.selectedSem!=''){
          Swal.fire(
            'Nuevo panel',
            '',
            'info'
          )
          this.buscaNuevo();
        }
      },
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
                console.log('esto es lo que trae tramoshorario'+this.tramoshorario);
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
            console.log('aca entra a getSesionesCursoGrupo');
            axios
              .get("http://localhost/ghpV01/api/crud/getSesionesCurso.php/?id_grupo="+$idgrupo+"&id_horario="+$horario)
              .then((res) => {
                this.sesionesCG = res.data;
                console.log(' aca se supone que va a ir a iniciaTabalDias()');
                this.reiniciaPanel();

              });             
        },
        getSesiones($curso, $semestre, $horario){
            axios
            .get("http://localhost/ghpV01/api/crud/getSesion.php/?curso="+$curso+"&semestre="+$semestre+"&idhorario="+$horario)
            .then((res) => {
                this.sequeda = res.data;
                if(this.sequeda.length>0){
                    console.log(' sequeda trae mas de 1 elemento'+res.data);
                    this.idHorario= this.sequeda[0].id_horario;
                }else{
                  console.log(' sequeda trae 0 elementos'+res.data);
                  this.idHorario= -1;
                }
                this.getSesionesCursoGrupo(this.selectedIdGrupo, this.idHorario);
            });             
        },
        buscaNuevo(){
                this.lenghtAsig = this.gruposAsig.length;
                this.mostrarOpciones= true;
                this.construyeTabla();
                this.getSesiones(this.selectedYear, this.selectedSem, this.idHorario);
        },
           
        selectTramoDia($dia, $tramo, $index){
            diaNumero=this.dameNumeroDia($dia);
            var encontrado=null;
            encontrado = this.diaYTramoOcupado(diaNumero, $tramo)

            if(encontrado!=''){      
                this.botonesDTOcupados(encontrado, $dia, $index);
            }else{
                this.botonesDTDisponibles(diaNumero, $tramo, $index);
            }
          },

          botonesDTOcupados($idSesion, $dia, $index){

              if(this.eliminaSesion($idSesion)){
                  if($dia=='lunes'){
                    this.apagarBoton('cambioColor1', $index);
                  }
                  if($dia=='martes'){
                    this.apagarBoton('cambioColor2', $index);
                  }
                  if($dia=='miercoles'){
                    this.apagarBoton('cambioColor3', $index);
                  }
                  if($dia=='jueves'){
                    this.apagarBoton('cambioColor4', $index);
                  }
                  if($dia=='viernes'){
                    this.apagarBoton('cambioColor5', $index);
                  }
              }
          },
          botonesDTDisponibles($dia, $tramo, $index){
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
          apagarBoton($clases, $index){
            var x = document.getElementsByClassName($clases);
            x[$index].classList.add('btn-info');
            x[$index].classList.remove('btn-danger');
            x[$index].classList.remove('btn-secondary');

          },
          encenderBoton($clases, $index){

              var x =document.getElementsByClassName($clases);
              x[$index].classList.add('btn-danger');
              x[$index].classList.remove('btn-info');
              x[$index].classList.remove('btn-secondary');

          },

          agregarDiaYTramo($dia, $tramo){
                this.numeroDia.push($dia);
                this.idTramo.push($tramo);
          },

          selectAula($idaula, $index){

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
          estadoProfe($id_profe, $dia, $id_tramo){
            var i;
            for( i = 0; i < this.sequeda.length; i++){
                if(this.sequeda[i].dia==$dia && this.sequeda[i].t_id== $id_tramo && this.sequeda[i].p_id==$id_profe){
                    return true;
                }
            }
            return false;
          },
          eliminaTodosElemenDiayTramo(){
              var auxD, auxT ;
              auxD = numeroDia;
              auxT= idTramo;
              for(indice in auxD ){
                this.eliminaDiaTramoEncendido(auxD[indice], auxT[indice]);
              }
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
            // Elimina el atributo disabled a todas las aulas
            // desabilitará aulas con sesiones en el array 'sequeda'
            var i;                
              for(i = 0; i < this.aulas.length; i++){
                  var x = document.getElementById(i);
                  x.removeAttribute('disabled');                    
              }  
                var j;
                for (j =0; j < this.numeroDia.length; j++){

                    for(i = 0; i < this.aulas.length; i++){
                       
                        var x = document.getElementById(i);
                        console.log('numero dia y tramo son:'+this.numeroDia[j]+"  "+this.idTramo[j] )
                        if(this.estadoAulas(this.aulas[i].id, this.numeroDia[j],this.idTramo[j])){
                            x.setAttribute('disabled', '');  
                        }
                    }            
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
          selectProfe($idProfe, $index){

            if(!this.profeEncendido){   // si no hay ningun botón de profesor encendido

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
            // Busca la disponibilidad de los profesores en los dias y tramos marcados para inabilitar botón
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
              const form = document.getElementById("formNuevaSesion");    
              axios.post('../api/Registro/sesion.php', new FormData(form)) 
              .then( res =>{
                  this.respuesta = res.data
                  if (this.respuesta.trim() == 'success') {           
                      this.getSesiones(this.selectedYear, this.selectedSem, this.idHorario);
                      
                      Swal.fire('Registrado', 'La sesión ha sido guardada', 'success')      

                  } else {
                      swal.fire('No se pudo registrar la sesión', ''+res.data)
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
            
              Swal.fire({
                title: 'Esta seguro de borrar?',
                text: "No podras revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, bórralo!'
              }).then((result) => {
                if (result.value) {
                    axios
                      .get("http://localhost/ghpV01/api/crud/eliminarSesion.php/?id="+$idsesion)
                      .then((res) => {
                        this.getSesiones(this.selectedYear, this.selectedSem, this.idHorario);  
                        Swal.fire(
                          'Borrado!', 'La sesión ha sido eliminada.',  'success'
                        )                            
                        return true;                          
                      }); 
                }else{
                  return false;
                }
              })
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
            return v;
          },
          encontrado($dia, $tramo){
              for(elemento of this.sesionesCG){
                if(elemento.dia == $dia && elemento.t_id== $tramo){
                  return elemento.id;
                }
              }
              return '';
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
            return (this.profesorDisponible() && this.profesorVisible());
          },
          profesorDisponible(){
            return !(document.getElementById(this.idProfeEncendido*1000).hasAttribute("disabled"));
          },
          profesorVisible(){
            var x = document.getElementById(this.idProfeEncendido*1000);
            if(x != null){
                return true;
            } 
            return false;            
          },
          aulaValida(){
            return !(document.getElementById(this.indexAulaEncendida).hasAttribute("disabled"))
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
          dameNumeroDia($dia){
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

          iniciaTablaDias(){

            for (indice in this.tramoshorario){
                if(this.encontrado(1, this.tramoshorario[indice].id)>0){
                  this.ocupadoBoton('cambioColor1', indice);
                }else{
                  this.apagarBoton('cambioColor1', indice);
                }
                if(this.encontrado(2, this.tramoshorario[indice].id)>0){
                    this.ocupadoBoton('cambioColor2', indice);
                }else{
                  this.apagarBoton('cambioColor2', indice);
                }
                if(this.encontrado(3, this.tramoshorario[indice].id)>0){
                    this.ocupadoBoton('cambioColor3', indice);
                }else{
                  this.apagarBoton('cambioColor3', indice);
                }
                if(this.encontrado(4, this.tramoshorario[indice].id)>0){
                    this.ocupadoBoton('cambioColor4', indice);
                }else{
                  this.apagarBoton('cambioColor4', indice);
                }
                if(this.encontrado(5, this.tramoshorario[indice].id)>0){
                  this.ocupadoBoton('cambioColor5', indice);
                }else{
                  this.apagarBoton('cambioColor5', indice);
                }
            }  
          },
          dameSesion($idSesion){
            return this.sesionesCG.filter((filtro)=>{
                return filtro.id.match($idSesion)  
            });
          },
      
          reiniciaPanel(){
            this.eliminaDiaTramoEncendido();
            this.iniciaTablaDias();
            this.revisaEstadoAula();
            this.revisaEstadoProfe();
          },
          ocupadoBoton($clases, $index){ // boton ocupado
            var x = document.getElementsByClassName($clases);
            x[$index].classList.add('btn-secondary');
            x[$index].classList.remove('btn-info');
            x[$index].classList.remove('btn-danger');
          },

          verHorario(){
            for (indice in this.tramoshorario){
              var idSesionLunes,idSesionMartes, idSesionMiercoles, idSesionJueves, idSesionViernes;
              var sesionLunes, sesionMartes, sesionMiercoles, sesionJueves, sesionViernes;

              idSesionLunes=this.encontrado(1, this.tramoshorario[indice].id);
              if(idSesionLunes>0){
                  sesionLunes= this.dameSesion(idSesionLunes);
                  this.ocupadoBotonSesi('cambioColor11', indice, sesionLunes[0],1);
                }else{
                  this.desocupaBotonSesi('cambioColor11', indice, 1);                  
              }
              idSesionMartes=this.encontrado(2, this.tramoshorario[indice].id);
              if(idSesionMartes>0){
                sesionMartes= this.dameSesion(idSesionMartes);
                this.ocupadoBotonSesi('cambioColor22', indice, sesionMartes[0],2);
              }else{
                this.desocupaBotonSesi('cambioColor22', indice, 2);
              }
              idSesionMiercoles=this.encontrado(3, this.tramoshorario[indice].id);
              if(idSesionMiercoles>0){
                sesionMiercoles= this.dameSesion(idSesionMiercoles);
                  this.ocupadoBotonSesi('cambioColor33', indice, sesionMiercoles[0],3);
              }else{
                this.desocupaBotonSesi('cambioColor33', indice, 3);
              }
              idSesionJueves=this.encontrado(4, this.tramoshorario[indice].id);
              if(idSesionJueves>0){
                  sesionJueves= this.dameSesion(idSesionJueves);
                  this.ocupadoBotonSesi('cambioColor44', indice, sesionJueves[0],4);
              }else{
                this.desocupaBotonSesi('cambioColor44', indice, 4);
              }
              idSesionViernes=this.encontrado(5, this.tramoshorario[indice].id);
              if(idSesionViernes>0){
                sesionViernes= this.dameSesion(idSesionViernes);
                this.ocupadoBotonSesi('cambioColor55', indice, sesionViernes[0],5);
              }else{
                this.desocupaBotonSesi('cambioColor55', indice, 5);
              }            
            }
          }, 
          desocupaBotonSesi($clase, $index, $dia){
            this.apagarBoton($clase, $index);

            if($dia==1){
              var elemento = document.getElementById('L'+$index);
                elemento.innerHTML=' ';
            }
            if($dia==2){
              var elemento = document.getElementById('M'+$index);
                elemento.innerHTML=' ';
            }
            if($dia==3){
              var elemento = document.getElementById('Mi'+$index);
                elemento.innerHTML=' ';
            }
            if($dia==4){
              var elemento = document.getElementById('J'+$index);
              elemento.innerHTML=' ';
            }
            if($dia==5){
              var elemento = document.getElementById('V'+$index);
              elemento.innerHTML=' ';
            }           
          },
          ocupadoBotonSesi($clase, $index, $sesion, $dia){

            this.ocupadoBoton($clase, $index);

            if($dia==1){
              var elemento = document.getElementById('L'+$index);
                elemento.innerHTML='<p>'+$sesion.s_nombre+'</p><p>'+$sesion.a_nombre+'</p><p>'+$sesion.p_nombre+' '+$sesion.p_apellido ;
            }
            if($dia==2){
              var elemento = document.getElementById('M'+$index);
              elemento.innerHTML='<p>'+$sesion.s_nombre+'</p><p>'+$sesion.a_nombre+'</p><p>'+$sesion.p_nombre+' '+$sesion.p_apellido ;
            }
            if($dia==3){
              var elemento = document.getElementById('Mi'+$index);
              elemento.innerHTML='<p>'+$sesion.s_nombre+'</p><p>'+$sesion.a_nombre+'</p><p>'+$sesion.p_nombre+' '+$sesion.p_apellido ;
            }
            if($dia==4){
              var elemento = document.getElementById('J'+$index);
              elemento.innerHTML='<p>'+$sesion.s_nombre+'</p><p>'+$sesion.a_nombre+'</p><p>'+$sesion.p_nombre+' '+$sesion.p_apellido ;
            }
            if($dia==5){
              var elemento = document.getElementById('V'+$index);
              elemento.innerHTML='<p>'+$sesion.s_nombre+'</p><p>'+$sesion.a_nombre+'</p><p>'+$sesion.p_nombre+' '+$sesion.p_apellido ;
            }           
          },
    }
})

$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});