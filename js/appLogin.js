const app = new Vue({
  el: "#app",
  data: {
    pass: "",
    passC: "",
    respuesta: "",
    boton: "btn blue",
    menu: false,
    estadoEti: false,
    etiquetaEstadoA: "Activo",
    etiquetaEstadoB: "Inactivo",
    inicio: false,
    correo:'',
    roles:[],
    selectedRol:'',
    listarUsu:[],
    dni:''
  },
  created(){
    this.getRoles()
    this.getUsuarios()
  },
  
  methods:{
    getUsuarios(){
      axios.get('http://localhost/ghpV01/api/crud/getUsuarios.php')
      .then(res =>{                    
          this.listarUsu = res.data
      })
    },
    getRoles(){
      axios.get('http://localhost/ghpV01/api/crud/getRoles.php')
      .then(res =>{                    
          this.roles = res.data
          // swal.fire('listado ok', '', 'success')
      })
    },
    dniProfeFiltrado(){
      return this.listarUsu.filter((filtro)=>{
        return filtro.p_dni.match(this.dni) 
      })
    },
    correoProfeFiltrado(){
      return this.listarUsu.filter((filtro)=>{
        return filtro.p_email.match(this.correo) 
      })
    },

    registro() {

      if (this.pass == this.passC ) {
      
        if(!(this.dniProfeFiltrado().length>0)){

          if(!(this.correoProfeFiltrado().length>0)){

            const form = document.getElementById("formRegistro")
            axios
              .post("../api/Registro/registro.php", new FormData(form))
              .then((res) => {
                this.respuesta = res.data
                this.direccionamiento()
              })
            }else{
              swal.fire("E-mail "+this.correo+" ya existe", " Debe ser dato único", "fail");

            }
          
        }else{
          swal.fire("DNI "+this.dni+" ya existe", " Debe ser dato único", "fail");
        }
      } else {
        swal.fire("los passwords no son iguales", "", "fail");
      }
    },
    direccionamiento() {
      if (this.respuesta.trim() == "success") {
        swal.fire("Registrado", "", "success")
        location.href = "registro.php"
      } else {
        swal.fire("No se pudo registrar"+this.respuesta, "llame a soporte técnico", "fail")
      }
    },
    login(){
        console.log("Hola estoy en login")
            const form = document.getElementById('inicioSesion')
            axios.post('../api/login/login.php', new FormData(form))
            .then( res =>{
            this.respuesta = res.data
            if (res.data == 'success') {           
                location.href = '../principal'
            } else {
                swal.fire('Usuario y/o contraseña incorrectos')
            }
                
            })
        },
        registroRol(){
          console.log("Hola estoy dentro");
          const form = document.getElementById("formRol");
          console.log("Hola estoy dentro 2");
         
          axios
            .post("../api/Registro/rol.php", new FormData(form))
            .then((res) => {
              this.respuesta = res.data

                if (this.respuesta.trim() == "success") {

                    swal.fire('Rol registrado', '', 'success')
                    location.href = '../principal/registro.php'
                } else {

                    swal.fire('Error al registrar rol', ''+this.respuesta, 'fail')    
                }
            })     
        }

    }
})
$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});