const app = new Vue({
    el:'#app',
    data:{
        menu:true,
        respuesta:'',
        listarAsig:[],
        listarPro:[],
        listarUsu:[],
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
      
        selectedTramo:'',
        selectedDias:'',
        sesionesCG:[],
      
        selectedAsigSesi:[],
        
        fondo:'',
        fondoLunes:[],
        estado:true,
      
        lenghtAsig:'',
        fin:'',
        inicio:'',
        codigo_asig:''
        
        
    },
    created(){
        this.getTitulos()
        this.cargaanos()
        this.getCatAulas()
        this.getGrupos()
        this.getAulas()
        this.getAsignaturas()
        this.getProfesores()
        this.getUsuarios()
        this.getTramos()
        this.getGruposAsig()
        this.getProfesAsig()
      
    },
    computed:{
         datosFiltradosUsu(){
            return this.listarUsu.filter((filtro)=>{
                    return filtro.p_nombre.toUpperCase().match(this.buscar.toUpperCase()) || filtro.p_apellido.toUpperCase().match(this.buscar.toUpperCase()) || filtro.p_dni.toUpperCase().match(this.buscar.toUpperCase())
            });
        }, 
        datosFiltradosPro(){
          return this.listarPro.filter((filtro)=>{
                  return filtro.nombres.toUpperCase().match(this.buscar.toUpperCase()) || filtro.apellidos.toUpperCase().match(this.buscar.toUpperCase()) || filtro.dni.toUpperCase().match(this.buscar.toUpperCase())
          });
        }, 

        datosFiltradosAsig(){
        
            return this.listarAsig.filter((filtro)=>{
                    return filtro.nombre.toUpperCase().match(this.buscarAsig.toUpperCase()) || filtro.titulo.toUpperCase().match(this.buscarAsig.toUpperCase()) || filtro.codigo.toUpperCase().match(this.buscarAsig.toUpperCase()) || filtro.estado.toUpperCase()==this.buscarAsig.toUpperCase() 
            });
        },

        datosFiltradosGrupos(){
          return this.grupos.filter((filtro)=>{
            return filtro.nombre.toUpperCase().match(this.buscarGrupos.toUpperCase()) 
          });
        },
        datosFiltradosAsigG(){
          return this.listarAsig.filter((filtro)=>{
            return filtro.nombre.toUpperCase().match(this.buscarAsig.toUpperCase()) && filtro.estado == 'activo'
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
    },
    methods:{

        getUsuarios(){         
                axios.get('http://localhost/ghpV01/api/crud/getUsuarios.php')
                .then(res =>{                    
                    this.listarUsu = res.data
                })
        },
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

          registroAsignatura() {

              if(this.codigoAsigFiltrado().length>0){
                swal.fire('Error código ya existe', 'El código debe ser único', 'fail');
                return;
              }

              const form = document.getElementById("formAsignatura")
              axios
                .post("../api/Registro/asignatura.php", new FormData(form))
                .then(res => {
                  this.respuesta = res.data      
               
                    if (this.respuesta.trim() == "success") {

                      swal.fire('Asignatura registrada', ''+this.respuesta, 'success')
                      location.href = '../principal/asignatura.php'
                    
                    } else {
                        swal.fire('Error al registrar ', ''+this.respuesta, 'fail')
                    }
              })
          },
          codigoAsigFiltrado(){
            return this.listarAsig.filter((filtro)=>{
              return filtro.codigo.toUpperCase().match(this.codigo_asig.toUpperCase()) 
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
                  title:'Seguro de eliminar?',
                  text:'Al eliminarlo no podras recuperarlo',
                  icon:'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Si, bórralo!'
              })
              .then((aceptar)=>{
                  if (aceptar.value) {
                      axios.get('http://localhost/ghpV01/api/crud/eliminarCateAula.php?id=' + id )
                      .then((res) =>{
                          if (res.data.trim() == 'success') {
                              swal.fire('Categoria eliminada', '', 'success')
                              location.href = '../principal/aulas.php'
                          }else{
                              swal.fire('Categoria no eliminada', '', 'fail')
                          }
                      })
                  }else{
                      return false
                  }
              })
          },
        eliminarAula(id){
            swal.fire({
                title:'Seguro de eliminar?',
                text:'Al eliminarlo no podras recuperarlo',
                icon:'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, bórralo!'
              })
            .then((aceptar)=>{
                if (aceptar.value) {
                    axios.get('http://localhost/ghpV01/api/crud/eliminarAula.php?id=' + id )
                    .then((res) =>{
                        if (res.data.trim() == 'success') {
                            swal.fire('Categoria eliminada', '', 'success')
                            location.href = '../principal/aulas.php'
                        }else{
                            swal.fire('Categoria no eliminada', '', 'fail')
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
          eliminarAsignatura(id, codigo){
            swal.fire({
                title:'Seguro que deseas eliminar el registro',
                text:'Al eliminarlo no podras recuperarlo',
                icon:'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, bórralo!'
            })
            .then((aceptar)=>{
                if (aceptar.value) {
                    axios.get('http://localhost/ghpV01/api/crud/eliminarAsignatura.php?id=' + id +'&codigo='+ codigo)
                    .then((res) =>{
                      this.respuesta= res.data
                        if (this.respuesta.trim() == 'success') {
                          
                            swal.fire('Asignatura eliminada', ' ', 'success')
                            location.href = '../principal/buscarAsig.php'
                           
                        }else{
                            swal.fire('Falló', 'Asignatura no eliminado', 'fail')
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
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, bórralo!'
            })
            .then((aceptar)=>{
                if (aceptar.value) {
                    axios.get('http://localhost/ghpV01/api/crud/eliminarTramo.php?id=' + id )
                    .then((res) =>{
                     if (res.data.trim() == 'success') {
                         swal.fire('Eliminado', '', 'success')
                         location.href = '../principal/tramos.php'
                      
                     }else{
                        swal.fire('Falló','Tramo no eliminado', 'fail')
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

            if(this.validaTramos()){
                const form = document.getElementById("formTramo");           
                axios
                  .post("../api/Registro/tramo.php", new FormData(form))
                  .then((res) => {
                    this.respuesta = res.data
      
                      if (this.respuesta.trim() == "success") {
      
                          swal.fire('Tramo registrado', '', 'success')
                          location.href = '../principal/tramos.php'
      
                      } else {
      
                          swal.fire('Error al registrar tramo', 'Revicelo e intente nuevamente', 'fail')    
                      }
                  })               
            }  
          },
          getSesiones(){
            axios
            .get("http://localhost/ghpV01/api/crud/getSesion.php")
            .then((res) => {
                this.sequeda = res.data;
                console.log('esto trae:'+this.sequeda)
            });             
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
  
                      swal.fire('Error al registrar asignación', '', 'fail')    
                  }
              })             
          },
          eliminarAsignaG(id){
              swal.fire({
                  title:'Seguro que deseas eliminar el registro',
                  text:'Al eliminarlo no podras recuperarlo',
                  icon:'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                 confirmButtonText: 'Si, bórralo!'
              })
              .then((aceptar)=>{
                  if (aceptar.value) {
                      axios.get('http://localhost/ghpV01/api/crud/eliminargrupoasigna.php?id=' + id )
                      .then(res =>{
                      if (res.data.trim() == 'success') {
                          swal.fire('Asignación eliminada')
                          location.href = '../principal/gruposasigna.php'
                      }else{
                          swal.fire('Asignación no eliminada', '', 'fail')
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
  
                      swal.fire('Error al registrar asignación', '', 'fail')    
                  }
              })             


          },
          eliminarAsignaP(id){
            swal.fire({
                title:'Seguro que deseas eliminar el registro',
                text:'Al eliminarlo no podras recuperarlo',
                icon:'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
               confirmButtonText: 'Si, bórralo!'
            })
            .then((aceptar)=>{
                if (aceptar.value) {
                    axios.get('http://localhost/ghpV01/api/crud/eliminarProfeAsig.php?id=' + id )
                    .then(res =>{
                        if (res.data.trim() == 'success') {
                            swal.fire('Asignación eliminada')
                            location.href = '../principal/profeasigna.php'
                        }else{
                            swal.fire('Asignación no eliminada');
                        }
                    })
                }else{
                    return false
                }
            })                   
          },
          eliminarProfe($idProfe){

            swal.fire({
              title: 'Esta seguro?',
              text: "No podras revertir esto!",
              icon: 'warning',
              showCancelButton: true,
              confirmButtonColor: '#3085d6',
              cancelButtonColor: '#d33',
              confirmButtonText: 'Si, bórralo!'
              }).then((result) => {
                    if (result.value) {
                        axios.get('http://localhost/ghpV01/api/crud/eliminarUsuario.php?id=' + $idProfe )
                        .then((res) => {
                            if (res.data.trim() == 'success') {
                              Swal.fire('Borrado!', 'La sesión ha sido eliminada.', 'success')                            
                              location.href = '../principal/buscar.php'
                            }else{
                                Swal.fire('Falló!', 'No se pudo eliminar'+res.data, 'fail')                            
                            }
                        }); 
                    }
              });
          },
          validaTramos(){
            if(this.inicio<this.fin){
              return true;
            }else{
              swal.fire('Horas no válidas', 'Hora fin debe ser mayor a hora inicio', 'fail')
            }
        }
   
    }
})

$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});





