<?php  
    include '../includes/header.php' ;
    include "../includes/menu.php";
?>
<!--Navbar-->
    <nav class="navbar navbar-light">
    <form class="form-inline active-cyan-3 active-cyan-4 px-2 pt-4" @submit.prevent="getProfesores()">                              
        <label for="" class="pr-2">Buscando Usuarios</label>
        <input class="form-control" type="text" placeholder="Search" aria-label="Search" v-model="buscar">
        <button class="btn  blue-gradient btn-md my-2 my-sm-0 ml-3" type="submit">Search</button>
    </form>
    </nav>
<!--/.Navbar-->

<div class="container" >
    <div class="row">
        <div class="col-6">
            <div class="row"  v-for="item in datosFiltrados">
                <div class="col-12 pt-5">
                    <!-- Card Wider -->
                    <div class="card card-cascade wider row"  >

                        <!-- Card content -->
                        <div class="card-body card-body-cascade text-center pb-0"  >

                            <!-- Title -->
                            <h4 class="card-title"><strong>{{item.nombres}} {{item.apellidos}}</strong></h4>

                        </div>

                            <!-- Subtitle -->
                            <h5 class="blue-text pb-2 text-center"><strong>{{item.dni}} - {{item.estado}}</strong></h5>
                            <!-- Text -->
                            <p class="card-text text-center">{{item.rol}}</p>

                    
                            <!-- Card footer -->
                            <div class="card-footer text-muted text-center mt-4">
                                <div> <i class="far fa-envelope"></i>{{item.email}} </div>
                                <div><i class="fas fa-mobile-alt"></i>{{item.telefono}}</div>                            
                            </div>
                    </div>
                    <div  id="contenido">
                    
                    </div>
                    <!-- Card Wider -->        
                </div>
            </div>
        </div>  
   
    </div>
</div>
<?php
    include "../includes/footer.php";
?>
