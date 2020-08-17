<?php  
    include '../includes/header.php' ;
    include "../includes/menu.php";
?>
<!--Navbar-->
    <nav class="navbar navbar-light">
    <form class="form-inline active-cyan-3 active-cyan-4 px-2 pt-4" @submit.prevent="getAsignaturas()">                              
        <label for="" class="pr-2">Buscando Asignaturas</label>
        <input class="form-control" type="text" placeholder="Search" aria-label="Search" v-model="buscarAsig">
        <button class="btn  blue-gradient btn-md my-2 my-sm-0 ml-3" type="submit">Search</button>
    </form>
    </nav>
<!--/.Navbar-->

<div class="container" >
    <div class="row justify-content-center">
        <div class="col-11">
            <!-- <div class="row"  v-for="item in datosFiltradosAsig"> -->
                <div class="col-12 pt-5">

                    <table class='table pt-5 col-12'>
                        <tr>
                            <th>Código</th><th>Asignatura</th><th>Titulo</th><th>Estado</th><th><i class="fas fa-wrench"></i></th>
                        </tr>			
                        <tr v-for="item in datosFiltradosAsig">
                          <!-- Card content -->
                          <div class="card-body card-body-cascade text-center pb-0"  >
                                <td><h5>{{item.codigo}}</h5></td><td><h5>{{item.nombre}}</h5></td><td><h5>{{item.titulo}}</h5></td>
                                <td>
                                    <!-- Subtitle -->
                                    <h5 class="blue-text pb-2 text-center" v-if="item.estado==0"><strong>{{etiquetaEstadoA}}</strong></h5>
                                    <h5 class="blue-text pb-2 text-center" v-if="item.estado==1"><strong>{{etiquetaEstadoB}}</strong></h5>
                                </td>
                                <td>						
                                    <a class='btn btn-danger btn-sm' href="#" @click="eliminarAsignatura(item.id)"><i class="fas fa-trash"></i></a>
                                </td>
                            </div>
                        </tr>            
                    </table>
                </div>
            </div>
        </div>  
   
    </div>
</div>
<?php
    include "../includes/footer.php";
?>
