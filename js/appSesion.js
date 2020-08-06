const app = new Vue({
    el:'#app',
    data:{
        selectedIdGrupo: 1,  // id del grupo para registrar la sesion
        grupos:[],
        curso:'',
        semestre:'',
        mostrarOpciones:false,
        tramoshorario:[],
        aulas:[],
        selectedAsig: 1,   // id de asignatura para registrar la sesion
        profeAsig:[],       
        estadoLunes:[],
        estadoMartes:[],
        estadoMiercoles:[],
        estadoJueves:[],
        estadoViernes:[],        
        aulaEncendida:false,
        idaulaEncendida:'', // este es el id de aula que debe tomarse al momento de registrar la sesion
        indexAulaEncendida:'', // para revisar antes de registrar que el boton no este desactivado 
        numeroDia:[],       // numeros de dia que debe tomarse para guardar la sesion
        idTramo:[],          // numeros de tramos que se deben tomar al guardar la sesion
        estadoBtnAula:false,
        sequeda:[],
        profeEncendido:false,
        idProfeEncendido:'', //este es el id del profesor que debe tomarse al momento de registrar la sesion
        indexProfeEncendido:'',
        titulosYear:[],
        selectedYear:''


    },
    created(){
        this.getTitulosYear();
        this.getAulas();
        this.getGrupos();
        this.getTramos();
        this.getGruposAsig();
        this.getProfesAsig();
        this.getSesiones();
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
        },    
        datosFiltradosSesion($id_sesion){
            return this.sequeda.filter((filtro)=>{
               return filtro.id.match($id_sesion) 
            });
        }
    },

    methods: {
       getTitulosYear(){            
          axios.get('http://localhost/ghpV01/api/crud/getTitulosYear.php')
          .then(res =>{                    
              this.titulosYear = res.data
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
        getSesionesCursoGrupo($idgrupo, $curso, $semestre){
            axios
              .get("http://localhost/ghpV01/api/crud/getSesionesCurso.php/?id_grupo="+$idgrupo+"&curso="+$curso+"&semestre="+$semestre)
              .then((res) => {
                this.sesionesCG = res.data;
                console.log('Esto es lo que trae'+this.sesionesCG);
              });             
        },
        getSesiones(){
            axios
            .get("http://localhost/ghpV01/api/crud/getSesion.php")
            .then((res) => {
                this.sequeda = res.data;
                 console.log('esto trae sequedaaaaaaaa:'+Object.keys(this.sequeda[0]));
                 console.log('codigo de la primera aula es:'+this.sequeda[0].a_id);

            });             
        },
        getSesionesAulas(){
            axios
            .get("http://localhost/ghpV01/api/crud/getSesionAula.php")
            .then((res) => {
              return res.data;
            });     

          },
        buscaNuevo(){
                this.lenghtAsig= this.gruposAsig.length;
                  console.log('tamaño de array es:'+this.lenghtAsig);

                this.mostrarOpciones= true;
                this.construyeTabla();
                this.getSesionesCursoGrupo(this.selectedIdGrupo, this.curso, this.semestre);

                console.log("estos son los valores de sesiones"+this.sesionesCG);

                // console.log('Estoy dentro de buscaNuevo');
                // console.log('lunes'+this.tabla['lunes'][0].inicio)
                // console.log('lunes'+this.tabla['lunes'][1].inicio)
                // console.log('lunes'+this.tabla['lunes'][2].inicio)
                // console.log('lunes'+this.tabla['lunes'][3].inicio)
                // console.log('martes'+this.tabla['martes'])
                // console.log('miercoles'+this.tabla['miercoles'])
                // console.log('jueves'+this.tabla['jueves'])
        },
           
        selectTramoDia($dia, $tramo, $index){
            console.log("lo que trae al metodo selectTramoDia es: "+$dia+" "+$tramo+" "+$index );
                        

            if($dia=='lunes'){
                
                  this.estadoLunes[$index] = !this.estadoLunes[$index];
  
                  if(this.estadoLunes[$index]){
 
                    var x = document.getElementsByClassName("cambioColor1");
                      x[$index].classList.add('btn-info');
                      x[$index].classList.remove('btn-danger');

                    this.eliminaDiaTramoEncendido(1, $tramo);

                  }else{
                      var x =document.getElementsByClassName("cambioColor1");
                      x[$index].classList.add('btn-danger');
                      x[$index].classList.remove('btn-info');

                      this.numeroDia.push(1);
                      this.idTramo.push($tramo);

                  }                               

                  console.log('el valor asignado para clase cambioColor:'+ document.getElementsByClassName("cambioColor").toString);
            }
            if($dia=='martes'){

                 this.estadoMartes[$index] = !this.estadoMartes[$index];

                  if(this.estadoMartes[$index]){
                    var x = document.getElementsByClassName("cambioColor2");
                    x[$index].classList.add('btn-info');
                    x[$index].classList.remove('btn-danger');

                    this.eliminaDiaTramoEncendido(2, $tramo);
                }else{

                    var x =document.getElementsByClassName("cambioColor2");
                    x[$index].classList.add('btn-danger');
                    x[$index].classList.remove('btn-info');

                    this.numeroDia.push(2);
                    this.idTramo.push($tramo);
                }               
            }
            if($dia=='miercoles'){

                this.estadoMiercoles[$index] = !this.estadoMiercoles[$index];

                if(this.estadoMiercoles[$index]){
                  var x = document.getElementsByClassName("cambioColor3");
                  x[$index].classList.add('btn-info');
                  x[$index].classList.remove('btn-danger');

                  this.eliminaDiaTramoEncendido(3, $tramo);
                }else{

                  var x =document.getElementsByClassName("cambioColor3");
                  x[$index].classList.add('btn-danger');
                  x[$index].classList.remove('btn-info');

                  this.numeroDia.push(3);
                  this.idTramo.push($tramo);
              }               
            }
            if($dia=='jueves'){
             
                this.estadoJueves[$index] = !this.estadoJueves[$index];

                if(this.estadoJueves[$index]){
                  var x = document.getElementsByClassName("cambioColor4");
                  x[$index].classList.add('btn-info');
                  x[$index].classList.remove('btn-danger');

                  this.eliminaDiaTramoEncendido(4, $tramo);
                }else{

                    var x =document.getElementsByClassName("cambioColor4");
                  x[$index].classList.add('btn-danger');
                  x[$index].classList.remove('btn-info');

                  this.numeroDia.push(4);
                  this.idTramo.push($tramo);
                }               
              }
              if($dia=='viernes'){
              
                this.estadoViernes[$index] = !this.estadoViernes[$index];

                if(this.estadoViernes[$index]){
                  var x = document.getElementsByClassName("cambioColor5");
                  x[$index].classList.add('btn-info');
                  x[$index].classList.remove('btn-danger');

                  this.eliminaDiaTramoEncendido(5, $tramo);
                }else{

                   var x =document.getElementsByClassName("cambioColor5");
                  x[$index].classList.add('btn-danger');
                  x[$index].classList.remove('btn-info');

                  this.numeroDia.push(5);
                  this.idTramo.push($tramo);

                }                          
              }
                console.log('el contenedo de NumeroDia:'+this.numeroDia);
                console.log("el contenido de idTramo es:"+this.idTramo);

                this.revisaEstadoAula();

           },

           selectAula($idaula, $index){

            console.log('trae este id de aula:'+$idaula);

            if(!this.aulaEncendida){   // si no hay ningun boton de aula encendido
              //  aulasConSesiones=this.getSesionesAulas();
              //  var i;
              //  for (i =0; i<this.numeroDia.length; i++){
              //      for (item in aulasConSesiones){
              //        if(item.id_aula == $idaula && item.id_tramo == this.idTramo[i] && item.dia == this.numeroDia[i] ){
              //          this.aulaEncendida=false;
              //          swal.fire("Aula Ocupada", ""+datosFiltradosSesion(item.id_sesion).toString, "success")

              //          return 
              //        }
              //      }  
              //  }
               this.aulaEncendida= true;
               var x = document.getElementsByClassName("cambioColorA");
               x[$index].classList.add('btn-danger');
               x[$index].classList.remove('btn-info');
               this.idaulaEncendida=$idaula;
               this.indexAulaEncendida=$index;

             }else if($idaula== this.idaulaEncendida){

                 this.aulaEncendida=false;
                 this.idaulaEncendida='';
                 this.indexAulaEncendida='';
                 var x = document.getElementsByClassName("cambioColorA");
                 x[$index].classList.add('btn-info');
                 x[$index].classList.remove('btn-danger');
  
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
            // console.log("me trae estos parametros: "+$id_aula+" "+$dia+" "+$id_tramo);
            var i;
            for( i = 0; i < this.sequeda.length; i++){
                //  console.log(' esta entrando al for  dia es:'+this.sequeda[i].dia+' tramo es:'+this.sequeda[i].t_id+" id aula es:"+this.sequeda[i].a_id);
                // console.log('los valores de sequeda son:'+Object.values(this.sequeda));
                if(this.sequeda[i].dia==$dia && this.sequeda[i].t_id== $id_tramo && this.sequeda[i].a_id==$id_aula){
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
                            // console.log( 'Esta aula ya esta ocupada ese dia y tramo');
                        }
                    }            
                 }                       
          },
          selectProfe($idProfe, $index){

            if(!this.profeEncendido){   // si no hay ningun boton de profesor encendido
               this.profeEncendido= true;
               var x = document.getElementsByClassName("cambioColorP");
               x[$index].classList.add('btn-danger');
               x[$index].classList.remove('btn-info');
               this.idProfeEncendido=$idProfe;
               this.indexProfeEncendido=$index;

             }else if($idProfe== this.idProfeEncendido){

                 this.profeEncendido=false;
                 this.idProfeEncendido='';
                 this.indexProfeEncendido='';
                 var x = document.getElementsByClassName("cambioColorP");
                 x[$index].classList.add('btn-info');
                 x[$index].classList.remove('btn-danger');
             }
             console.log('profesor encendido es:'+this.idProfeEncendido+" index de profesor encendido es:"+this.indexProfeEncendido);
          },
          registraSesion(){
              console.log( ' estoy en registrar sesion');
          },
          verHorario(){
              console.log('ver horario');
          }
    }
})

// var i;
 // for (i = 0; i < this.tramoshorario.length; i++) {
   //   this.fondoLunes[i] = "btn-info";
 // }
   
  //           var rows = ['lunes','martes' ,'miercoles','jueves','viernes'];
  
  //           var valores=[];
  //           for (v of this.tramoshorario) {
  //             valores.push(v);
  //           } ;
  // for (var i in valores){
  
  //   if(valores.hasOwnProperty(i)){
  //       console.log($valores.[i]);
  //   }
  
  //   console.log('valores tiene:'+s+'<br>' );
    
  // }
  
  // console.log('su tamaño es:'+valores.length);
            // for(r of rows){
            //     for( s of valores){
            //         this.tabla[r][s]=r+s;
            //     }
            // }
  
            // console.log('este es el contenido de la tabla'+this.tabla['lunes']);
            // console.log('esto es lo que tiene tramoshorario:'+this.tramoshorario);
  
            // var cols = ["a", "b", "c", "d"];
            
            // var grid = [ for (r of rows) [ for (c of cols) r+c ] ];
            
            /* 
                     grid = [
                        ["1a","1b","1c","1d"],
                        ["2a","2b","2c","2d"],
                        ["3a","3b","3c","3d"]
                     ]
            */
