<?php   include '../includes/header.php';

@session_start();
if($_SESSION['rol']=='Administrador'){

        include "../includes/menucompleto.php";

}else if($_SESSION['rol']=='Coordinador'){

        include "../includes/menucoordinadores.php";

}else if($_SESSION['rol']=='Profesor'){

        include "../includes/menuprofesores.php";
}

 ?>

<div class="row container-fluid d-flex justify-content-center">

<div class="card col-5 mt-5" >  

        <!--Navbar-->
        <div  class="card info-color white-text py-4">
             <h5 class="info-color white-text text-center">
                    <strong>Registro Tramos de Horarios</strong>
                    <button class="btn btn-outline-white btn-md my-2 my-sm-0 ml-3" type="button" data-toggle="modal" data-target="#modalTramo">Nuevo</button>
             </h5>
        </div>
        <!--/.Navbar-->

        <div class="container-fluid ">

            <div class="container-fluid col-8 ">
                <div class="form-group row pt-3 justify-content-center">
                </div>
            </div>            
            <table class='table pt-5'>
                <tr>
                    <th>#</th><th>Inicio</th><th>Fin</th><th><i class="fas fa-wrench"></i></th>
                </tr>			
                <tr v-for="item in tramoshorario">
                        <td>{{item.id}}</td><td>{{item.inicio}}</td><td>{{item.fin}}</td>
                        <td><a class='btn btn-danger btn-sm' href="#" @click="eliminarTramo(item.id)"><i class="fas fa-trash"></i></a></td>
                </tr>                  
            </table>
        </div>
</div>
        <!-- Card -->
</div>

<!-- Modal nuevo titulo -->

<!-- Modal -->
<div class="modal fade" id="modalTramo" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
  aria-hidden="true">

  <!-- Add .modal-dialog-centered to .modal-dialog to vertically center the modal -->
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
    <!-- Form -->
    <form class="text-center" style="color: #757575;"  id="formTramo" autocomplete="off" @submit.prevent="registroTramo">                              

            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Nuevo Tramo</h5>

                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body">
            
                        <div class="form-row justify-content-center"  >                
                           
                            <div class="md-form md-outline input-with-post-icon timepicker" darktheme="true">
                                <input type="time" id="set-dark-theme" class="form-control" placeholder="Select time" name="inicio" v-model='inicio'>
                                <label for="set-dark-theme">Inicio</label>
                                <!-- <i class="fas fa-envelope  input-prefix"></i> -->
                            </div>
                            <div class="md-form md-outline input-with-post-icon timepicker" darktheme="true">
                                <input type="time" id="set-dark-theme" class="form-control" placeholder="Select time" name="fin" v-model='fin'>
                                <label for="set-dark-theme">Fin</label>
                                <!-- <i class="fas fa-envelope  input-prefix"></i> -->
                            </div>
                        </div>
                    
                 

            </div>

            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Salir</button>
                <button type="submit" class="btn btn-primary" >Gruardar cambios</button>
            </div>

    </from>

    </div>
  </div>
</div>


<?php
        include "../includes/footer.php";
?>

