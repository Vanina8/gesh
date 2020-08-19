<?php  
    include '../includes/header.php' ;
    @session_start();
    if($_SESSION['rol']=='Administrador'){
    
            include "../includes/menucompleto.php";
    
    }else if($_SESSION['rol']=='Coordinador'){
    
            include "../includes/menucoordinadores.php";
    
    }else if($_SESSION['rol']=='Profesor'){
    
            include "../includes/menuprofesores.php";
    }
    
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
        <div class="col-12">
            <div class="row"  v-for="item in datosFiltradosUsu">
                <div class="col-12 pt-5">
                    <!-- Card Wider -->
                    <div class="card card-cascade wider row"  >

                        <!-- Card content -->
                        <div class="card-body card-body-cascade text-center pb-0"  >

                            <!-- Title -->
                            <h4 class="card-title"><strong>{{item.p_nombre}} {{item.p_apellido}}</strong></h4>

                        </div>

                            <!-- Subtitle -->
                            <h5 class="blue-text pb-2 text-center"><strong>{{item.p_dni}} - {{item.p_estado}}</strong></h5>

                            <!-- Text -->
                            <p class="card-text text-center">{{item.r_nombre}}</p>

                            <!-- Card footer -->
                            <div class="card-footer text-muted text-center mt-0">
                                <div> <i class="far fa-envelope"></i>{{item.p_email}} </div>
                                <div><i class="fas fa-mobile-alt"></i>{{item.p_telefono}}</div>    
                                <a class='btn btn-danger btn-sm' href="#" @click="eliminarProfe(item.p_id)"><i class="fas fa-trash"></i></a>
                        
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
