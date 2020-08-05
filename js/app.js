const app = new Vue({
    el:'#app',
    data:{
        menu:true,
        respuesta:'',
        listarAsig:[],
        listarPro:[],
        listar:[],
        titulos:[],
       
        buscar:'',
        buscarAsig:'',
        itemId:'',
        formEditar:{},
        userPost:'',
        estadoEtiAsig: false,
        estadoEtiAula: false,
        etiquetaEstadoA: "Activo",        
        etiquetaEstadoB: "Inactivo",
        years:[],
        selectedYear:'' ,
        selectedCatAula: 1,
        categoriasaulas: [],
     
        aulas:[],
        tramoshorario:[],
 
        sequeda:[],
        selectedProfe: 1,
        selectedAsig: 1,
        selectedGrupo: 1,
        selectedAula: 1,

        mostrarOpciones:false,

        buscarGrupos:'',
        buscarGruposDesA:'',
        gruposAsig:[],

        profeAsig:[],
        buscarProfe:'',
        
        selected: 1,        
        grupos:[],
        curso:'',
        semestre:'',
        tabla:[],

        // diasSemana:[[ 1, 'lunes'], [2,'martes'], [3,'miercoles'], [4,'jueves'],[ 5,'viernes']],
      
        selectedTramo:'',
        selectedDias:'',
        sesionesCG:[],
      
        selectedAsigSesi:[],
        
        fondo:'',
        fondoLunes:[],
        estado:true,
        numeroDia:[],
        idTramo:[],
        lenghtAsig:'',
        idaulaEncendida:'',
        aulaEncendida:false



        
        // f:'',
        // estadoL: true
      // listado de consulta 2 esta en array: gruposAsig  el filtro tambien esta se llama: datosFiltradosDesA
      //

    },
    created(){
        this.getTitulos()
        this.cargaanos()
        this.getCatAulas()
        this.getGrupos()
        this.getAulas()
        this.getAsignaturas()
        this.getProfesores()
        this.getTramos()
        // this.getSesiones()
        this.getGruposAsig()
        this.getProfesAsig()
      
    },
    computed:{
         datosFiltrados(){
            return this.listarPro.filter((filtro)=>{
                    return filtro.nombres.toUpperCase().match(this.buscar.toUpperCase()) || filtro.apellidos.toUpperCase().match(this.buscar.toUpperCase()) || filtro.dni.toUpperCase().match(this.buscar.toUpperCase())
            });
        }, 
        datosFiltradosAsig(){
          console.log()
            return this.listarAsig.filter((filtro)=>{
                    return filtro.nombre.toUpperCase().match(this.buscarAsig.toUpperCase()) || filtro.titulo.toUpperCase().match(this.buscarAsig.toUpperCase()) || filtro.estado.toString().match(this.buscarAsig.toUpperCase()) 
            });
        },

        datosFiltradosGrupos(){
          return this.grupos.filter((filtro)=>{
            return filtro.nombre.toUpperCase().match(this.buscarGrupos.toUpperCase()) 
          });
        },
        datosFiltradosAsigG(){
          return this.listarAsig.filter((filtro)=>{
            return filtro.nombre.toUpperCase().match(this.buscarAsig.toUpperCase()) 
          });
        },
        datosFiltradosDesA(){
          return this.gruposAsig.filter((filtro)=>{
            return filtro.nombre_grupo.toUpperCase().match(this.buscarGruposDesA.toUpperCase()) 
          });
        },
        datosFiltradosDesAP(){
          return this.profeAsig.filter((filtro)=>{
            return filtro.nombre_profe.toUpperCase().match(this.buscarProfe.toUpperCase()) || filtro.apellido_profe.toUpperCase().match(this.buscarProfe.toUpperCase())  
          });
        },
        
        // // Filtros para funcionalidad Nueva sesión
        // datosFiltradosGA(){   // muestra solo asignaturas del grupo elegido en registrar nueva sesión
        //   return this.gruposAsig.filter((filtro)=>{
        //     return filtro.id_grupo.match(this.selected) 
        //   });
        // },
        // datosFiltradosProfeAsig(){
        //   return this.profeAsig.filter((filtro)=>{
        //     return filtro.id_asig.match(this.selectedAsig)  
        //   });
        // },
      
    },
    methods:{

        getProfesores(){         
                axios.get('http://localhost/ghpV01/api/crud/getProfes.php')
                .then(res =>{                    
                    this.listarPro = res.data
                })
        },
        getAsignaturas(){
                axios.get('http://localhost/ghpV01/api/crud/getAsignaturas.php')
                .then(res =>{                    
                    this.listarAsig = res.data
                })
        },
        getTitulos(){
            
                axios.get('http://localhost/ghpV01/api/crud/getTitulos.php')
                .then(res =>{                    
                    this.titulos = res.data
                })
        },
        getCatAulas() {
            axios
              .get("http://localhost/ghpV01/api/crud/getCatAulas.php")
              .then((res) => {
                this.categoriasaulas = res.data;
              });
          },
          getGrupos() {
            axios
              .get("http://localhost/ghpV01/api/crud/getGrupos.php")
              .then((res) => {
                this.grupos = res.data;
              });
          },     
          getAulas() {
            axios
              .get("http://localhost/ghpV01/api/crud/getAulas.php")
              .then((res) => {
                this.aulas = res.data;
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
          getSesionesCursoGrupo($idgrupo, $curso, $semestre){
            axios
              .get("http://localhost/ghpV01/api/crud/getSesionesCurso.php/?id_grupo="+$idgrupo+"&curso="+$curso+"&semestre="+$semestre)
              .then((res) => {
                this.sesionesCG = res.data;
                console.log('Esto es lo que trae'+this.sesionesCG);
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
          getSesionesAulas(){
            axios
            .get("http://localhost/ghpV01/api/crud/getSesionAula.php")
            .then((res) => {
              return res.data;
            });     

          },
          registroAsignatura() {
           
              const form = document.getElementById("formAsignatura")
              axios
                .post("../api/Registro/asignatura.php", new FormData(form))
                .then(res => {
                  this.respuesta = res.data      
               
                if (this.respuesta.trim() == "success") {

                   swal.fire('Asignatura registrada', '', 'success')
                   location.href = '../principal/asignatura.php'
                
                } else {

                    swal.fire('Error al registrar ', ''+this.respuesta, 'fail')

                }

              })
          },
          registroTitulo() {

            const form = document.getElementById("formTitulo");
             
              axios
                .post("../api/Registro/titulo.php", new FormData(form))
                .then((res) => {
                  this.respuesta = res.data

                    if (this.respuesta.trim() == "success") {

                        swal.fire('Titulo registrado', '', 'success')
                        location.href = '../principal/asignatura.php'
    
                    } else {
    
                        swal.fire('Error al registrar', ''+this.respuesta, 'fail')    
                    }
                })                  
          },
          cargaanos(){
                var d = new Date();
                var n = d.getFullYear();
                this.selectedYear = n;

                for (i = 0; i < 5; i++) {
                    this.years[i] = n + i;
                }            

          },
          registroCatAula() {

            console.log("Hola estoy dentro");
            const form = document.getElementById("formCatAula");
            console.log("Hola estoy dentro 2");
      
            axios
              .post("../api/Registro/categoriaAula.php", new FormData(form))
              .then((res) => {
                this.respuesta = res.data;
      
                if (this.respuesta.trim() == "success") {
                  swal.fire("Categoria registrada", "", "success");
                  location.href = '../principal/aulas.php'
                } else {
                  swal.fire("Error al registrar", "" + this.respuesta, "fail");
                }
              });
          },

          eliminarCateAula(id){
              swal.fire({
                  title:'Seguro que deseas eliminar el registro',
                  text:'Al eliminarlo no podras recuperarlo',
                  icon:'warning',
                  buttons:true,
                  dangerMode:true,
              })
              .then((aceptar)=>{
                  if (aceptar) {
                      axios.get('http://localhost/ghpV01/api/crud/eliminarCateAula.php?id=' + id )
                      .then(res =>{
                      if (res.data.trim() == 'success') {
                          swal.fire('Categoria eliminada')
                          location.href = '../principal/aulas.php'
                      }else{
                          swal.fire('Categoria no eliminada')
                      }
                      })
                  }else{
                      return false
                  }
              })
          },
        eliminarAula(id){
            swal.fire({
                title:'Seguro que deseas eliminar el registro',
                text:'Al eliminarlo no podras recuperarlo',
                icon:'warning',
                buttons:true,
                dangerMode:true,
            })
            .then((aceptar)=>{
                if (aceptar) {
                    axios.get('http://localhost/ghpV01/api/crud/eliminarAula.php?id=' + id )
                    .then(res =>{
                    if (res.data.trim() == 'success') {
                        swal.fire('Categoria eliminada')
                        location.href = '../principal/aulas.php'
                    }else{
                        swal.fire('Categoria no eliminada')
                    }
                    })
                }else{
                    return false
                }
            })        
        },

        registroAula() {

          const form = document.getElementById("formAula");
         
          axios
            .post("../api/Registro/aula.php", new FormData(form))
            .then((res) => {
              this.respuesta = res.data

                if (this.respuesta.trim() == "success") {

                    swal.fire('Aula registrado', '', 'success')
                    location.href = '../principal/aulas.php'

                } else {

                    swal.fire('Error al registrar aula', ''+this.respuesta, 'fail')    
                }
            })                  
        },
        
        eliminarTitulo(id){
            swal.fire({
                title:'Seguro que deseas eliminar el registro',
                text:'Al eliminarlo no podras recuperarlo',
                icon:'warning',
                buttons:true,
                dangerMode:true,
            })
            .then((aceptar)=>{
                if (aceptar) {
                    axios.get('http://localhost/ghpV01/api/crud/eliminarTitulo.php?id=' + id )
                    .then(res =>{
                     if (res.data.trim() == 'success') {
                         swal.fire('Tìtulo eliminado')
                         location.href = '../principal/asignatura.php'
                     }else{
                        swal.fire('Título no eliminado')
                     }
                    })
                }else{
                    return false
                }
            })
          },
          eliminarAsignatura(id){
            swal.fire({
                title:'Seguro que deseas eliminar el registro',
                text:'Al eliminarlo no podras recuperarlo',
                icon:'warning',
                buttons:true,
                dangerMode:true,
            })
            .then((aceptar)=>{
                if (aceptar) {
                    axios.get('http://localhost/ghpV01/api/crud/eliminarAsignatura.php?id=' + id )
                    .then(res =>{
                     if (res.data.trim() == 'success') {
                         swal.fire('Asignatura eliminado')
                         location.href = '../principal/buscarAsig.php'
                     }else{
                        swal.fire('Asignatura no eliminado')
                     }
                    })
                }else{
                    return false
                }
            })
          },
          eliminarTramo(id){
            swal.fire({
                title:'Seguro que deseas eliminar el registro',
                text:'Al eliminarlo no podras recuperarlo',
                icon:'warning',
                buttons:true,
                dangerMode:true,
            })
            .then((aceptar)=>{
                if (aceptar) {
                    axios.get('http://localhost/ghpV01/api/crud/eliminarTramo.php?id=' + id )
                    .then(res =>{
                     if (res.data.trim() == 'success') {
                         location.href = '../principal/horario.php'
                     }else{
                        swal.fire('Tramo no eliminado')
                     }
                    })
                }else{
                    return false
                }
            })
          },
          registroGrupo() {

            const form = document.getElementById("formGrupo");
           
            axios
              .post("../api/Registro/grupo.php", new FormData(form))
              .then((res) => {
                this.respuesta = res.data
  
                  if (this.respuesta.trim() == "success") {
  
                      swal.fire('Grupo registrado', '', 'success')
                      location.href = '../principal/grupos.php'
  
                  } else {
  
                      swal.fire('Error al registrar grupo', ''+this.respuesta, 'fail')    
                  }
              })                  
          },
          registroTramo() {

            const form = document.getElementById("formTramo");
           
            axios
              .post("../api/Registro/tramo.php", new FormData(form))
              .then((res) => {
                this.respuesta = res.data
  
                  if (this.respuesta.trim() == "success") {
  
                      swal.fire('Tramo registrado', '', 'success')
                      location.href = '../principal/horario.php'
  
                  } else {
  
                      swal.fire('Error al registrar tramo', ''+this.respuesta, 'fail')    
                  }
              })                  
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
                  // if(this.estadoLunes[$index]){
                  //   this.fondoLunes[$index]='btn-info';
                  // }else{
                  //   this.fondoLunes[$index]='btn-danger';
                  // }
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
           selectAsignatura($itemAsig, $index, $estado){
               
             var x =document.getElementsByClassName("cambioColor6");              
             var i;

             for (i = 0; i < 2; i++) {
               if(selectedAsigSesi[i]==""){
                  selectedAsigSesi[i]=$index;
               }else{
                  selectedAsigSesi[i]=$index;
                  x[$index].classList.remove('btn-info');
               }
             }
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

           registraSesion(){

           },

           RegistroGrupoAsignaAsi(){

            const form = document.getElementById("formGrupoAsigna");
           
            axios
              .post("../api/Registro/gruposasigna.php", new FormData(form))
              .then((res) => {
                this.respuesta = res.data
  
                  if (this.respuesta.trim() == "success") {
  
                      swal.fire('Asignación registrada', '', 'success')
                      location.href = '../principal/gruposasigna.php'
  
                  } else {
  
                      swal.fire('Error al registrar asignación', ''+this.respuesta, 'fail')    
                  }
              })             
          },
          eliminarAsignaG(id){
              swal.fire({
                  title:'Seguro que deseas eliminar el registro',
                  text:'Al eliminarlo no podras recuperarlo',
                  icon:'warning',
                  buttons:true,
                  dangerMode:true,
              })
              .then((aceptar)=>{
                  if (aceptar) {
                      axios.get('http://localhost/ghpV01/api/crud/eliminargrupoasigna.php?id=' + id )
                      .then(res =>{
                      if (res.data.trim() == 'success') {
                          swal.fire('Asignación eliminada')
                          location.href = '../principal/gruposasigna.php'
                      }else{
                          swal.fire('Asignación no eliminada')
                      }
                      })
                  }else{
                      return false
                  }
              })       
          },

          RegistroProfeAsignaAsi(){
            const form = document.getElementById("formProfeAsigna");
           
            axios
              .post("../api/Registro/profesasigna.php", new FormData(form))
              .then((res) => {
                this.respuesta = res.data
  
                  if (this.respuesta.trim() == "success") {
  
                      swal.fire('Asignación registrada', '', 'success')
                      location.href = '../principal/profeasigna.php'
  
                  } else {
  
                      swal.fire('Error al registrar asignación', ''+this.respuesta, 'fail')    
                  }
              })             


          },
          eliminarAsignaP(id){
            swal.fire({
                title:'Seguro que deseas eliminar el registro',
                text:'Al eliminarlo no podras recuperarlo',
                icon:'warning',
                buttons:true,
                dangerMode:true,
            })
            .then((aceptar)=>{
                if (aceptar) {
                    axios.get('http://localhost/ghpV01/api/crud/eliminarProfeAsig.php?id=' + id )
                    .then(res =>{
                    if (res.data.trim() == 'success') {
                        swal.fire('Asignación eliminada')
                        location.href = '../principal/profeasigna.php'
                    }else{
                        swal.fire('Asignación no eliminada')
                    }
                    })
                }else{
                    return false
                }
            })       
        },

          // desasignar: function( event ){

          //   console.log('Hola mundo');

          //   const form = document.getElementById("formGrupoAsigna");
           
          //   axios
          //     .post("../api/crud/eliminargrupoasigna.php", new FormData(form))
          //     .then((res) => {
          //       this.respuesta = res.data
  
          //         if (this.respuesta.trim() == "success") {
  
          //             swal.fire('Asignaturas desasignadas', '', 'success')
          //             location.href = '../principal/gruposasigna.php'
  
          //         } else {
  
          //             swal.fire('Error al desasignar', ''+this.respuesta, 'fail')    
          //         }
          //     })          

          // }
    }
})




