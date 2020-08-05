const app = new Vue({
    el:'#app',
    data:{
        selected: 1,
        grupos:[],
        curso:'',
        semestre:'',
        mostrarOpciones:false,
        tramoshorario:[],
        aulas:[],
        selectedAsig: 1,
        profeAsig:[],  
        estadoLunes:[],
        estadoMartes:[],
        estadoMiercoles:[],
        estadoJueves:[],
        estadoViernes:[],        
    },
    created(){
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
              return filtro.id_grupo.match(this.selected) 
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
                console.log('esto trae:'+this.sequeda)
            });             
        },
        buscaNuevo(){
                this.lenghtAsig= this.gruposAsig.length;
                  console.log('tamaño de array es:'+this.lenghtAsig);

                this.mostrarOpciones= true;
                this.construyeTabla();
                this.getSesionesCursoGrupo(this.selected, this.curso, this.semestre);

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
           
        registraSesion(){

        },
        selectTramoDia($dia, $tramo, $index){
            console.log("lo que trae al metodo selectTramoDia es: "+$dia+" "+$tramo+" "+$index );
                        
            if($dia=='lunes'){
                
                  this.estadoLunes[$index] = !this.estadoLunes[$index];
  
                  if(this.estadoLunes[$index]){
 
                    var x = document.getElementsByClassName("cambioColor1");
                      x[$index].classList.add('btn-info');
                      x[$index].classList.remove('btn-danger');

                      var pos_dia =this.numeroDia.indexOf($dia)
                      var pos_idtra =this.idTramo.indexOf($tramo)
                      this.numeroDia.splice(pos_dia, 1);
                      this.idTramo.splice(pos_idtra, 1);

                  }else{
                      var x =document.getElementsByClassName("cambioColor1");
                      x[$index].classList.add('btn-danger');
                      x[$index].classList.remove('btn-info');

                      this.numeroDia=+1;
                      this.idTramo=+$tramo;

                  }                               
                  console.log('el valor asignado para clase cambioColor:'+ document.getElementsByClassName("cambioColor").toString);
            }
            if($dia=='martes'){
            

                  this.estadoMartes[$index] = !this.estadoMartes[$index];

                  if(this.estadoMartes[$index]){
                    var x = document.getElementsByClassName("cambioColor2");
                    x[$index].classList.add('btn-info');
                    x[$index].classList.remove('btn-danger');

                    var pos_dia =this.numeroDia.indexOf($dia)
                    var pos_idtra =this.idTramo.indexOf($tramo)
                    this.numeroDia.splice(pos_dia, 1);
                    this.idTramo.splice(pos_idtra, 1);
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

                  var pos_dia =this.numeroDia.indexOf($dia)
                  var pos_idtra =this.idTramo.indexOf($tramo)
                  this.numeroDia.splice(pos_dia, 1);
                  this.idTramo.splice(pos_idtra, 1);
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

                  var pos_dia =this.numeroDia.indexOf($dia)
                  var pos_idtra =this.idTramo.indexOf($tramo)
                  this.numeroDia.splice(pos_dia, 1);
                  this.idTramo.splice(pos_idtra, 1);
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

                  var pos_dia =this.numeroDia.indexOf($dia)
                  var pos_idtra =this.idTramo.indexOf($tramo)
                  this.numeroDia.splice(pos_dia, 1);
                  this.idTramo.splice(pos_idtra, 1);
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
           },

        selectAula($idaula){

            if(!this.aulaEncendida){
               aulasConSesiones=getSesionesAulas();
               var i;
               for (i =0; i<this.numeroDia.length; i++){
                   for (item in aulasConSesiones){
                     if(item.id_aula == $idaula && item.id_tramo == this.idTramo[i] && item.dia == this.numeroDia[i] ){
                       this.aulaEncendida=false;
                       swal.fire("Aula Ocupada", ""+datosFiltradosSesion(item.id_sesion).toString, "success")

                       return 
                     }
                   }  
               }
               this.aulaEncendida= true;
               var x = document.getElementsByClassName("cambioColorA");
               x[$index].classList.add('btn-danger');
               x[$index].classList.remove('btn-info');
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
        estadoAulas($id_aula, $dia, $id_tramo){
            mismodiaytramo = this.sequeda.filter((filtro)=>{
                  return filtro.dia.match($dia) || filtro.t_id.match($id_tramo)
            });
  
            // return this.mismodiaytramo.a_id.includes($id_aula);
            conosole.log('esto devuele'+this.mismodiaytramo.a_id.includes($id_aula));
          },

   
    },
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
