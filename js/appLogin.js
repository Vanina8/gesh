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
    selectedRol:''
  },
  created(){
    this.getRoles()
  },
  
  methods:{

    getRoles(){
      axios.get('http://localhost/ghpV01/api/crud/getRoles.php')
      .then(res =>{                    
          this.roles = res.data
          // swal.fire('listado ok', '', 'success')
      })
    },

    registro() {
      if (this.pass == this.passC) {
        const form = document.getElementById("formRegistro")
        axios
          .post("../api/Registro/registro.php", new FormData(form))
          .then((res) => {
            this.respuesta = res.data

            this.direccionamiento()
          })
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