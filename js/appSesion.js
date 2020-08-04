const app = new Vue({
    el:'#app',
    data:{
        menu:true,
        respuesta:'',
        listarAsig:[],
        listarPro:[],
        listar:[],
        titulos:[],
        selected: 1,
        buscar:'',
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
        grupos:[],
        aulas:[],
        tramoshorario:[],

        sesiones:[],
        selectedProfe:'',
        fecha:'27/07/2020',
        tramo:'12'
    },

    created(){
      this.getSesiones()
      console.log('llamo a getSesiones')
    },
    computed:{
        
      datosFiltradosSesPro(){
          return this.sesiones.filter((filtro)=>{
              return filtro.fecha.match(this.fecha) && filtro.tramo.match(this.tramo)  
          });
      }
    },

    methods: {

        getSesiones(){
            console.log('estoy dentro de getSesiones')
            axios
            .get("http://localhost/ghpV01/api/crud/getSesion.php")
            .then((res) => {
                this.sesiones = res.data;
                console.log('esto trae:'.this.sesiones)
                swal.fire('Asignatura registrada', ''.this.sesiones, 'success')
            });             
            console.log('acabo de salir de axios')
        },

    },
})