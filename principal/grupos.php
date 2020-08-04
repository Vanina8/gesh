<?php   include '../includes/header.php';

        include "../includes/menu.php";
 ?>

<div class="row container-fluid d-flex justify-content-center">

<div class="card  m-5">  
        <!--Navbar-->
        <div  class="card info-color white-text">

            <form class="form-inline text-center my-2 my-lg-0 ml-auto pl-4 pr-4">
                <div class="text-left">
                    <h5 class="info-color white-text text-center py-4">
                        <strong>Registro Grupos</strong>
                    </h5>
                </div>
                <button class="btn btn-outline-white btn-md my-2 my-sm-0 ml-3" type="button" data-toggle="modal" data-target="#modalGrupo">Nuevo</button>
            </form>
        </div>
        <!--/.Navbar-->

        <table class='table pt-5'>
                <tr>
                    <th>#</th><th>Nombre</th><th><i class="fas fa-wrench"></i></th>
                </tr>			
                <tr>
                    <tr v-for="item in grupos">
                    <td>{{item.id}}</td><td>{{item.nombre}}</td><td>						
                    <a class='btn btn-danger btn-sm' href="#" @click="eliminarGrupo(item.id)"><i class="fas fa-trash"></i></a>
                    </td>
                </tr>      
            
        </table>
     
    </div>
        <!-- Card -->
</div>

<!-- Modal nuevo titulo -->

<!-- Modal -->
<div class="modal fade" id="modalGrupo" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
  aria-hidden="true">

  <!-- Add .modal-dialog-centered to .modal-dialog to vertically center the modal -->
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">

    <!-- Form -->
    <form class="text-center" style="color: #757575;"  id="formGrupo" autocomplete="off" @submit.prevent="registroGrupo">                              

            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Nuevo Grupo</h5>

                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body">
            
                        <div class="form-row">                
                            <div class="md-form col-8 container-fluid">
                                <input type="text" id="materialRegisterFormEmail" required class="form-control" name="nombre" value="">
                                <label for="materialRegisterFormEmail">Nombre</label>
                            </div>
                        </div>
                    
                        <div class="form-row">                
                   
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

<!-- Fin modal nuevo titulo -->


<?php
        include "../includes/footer.php";
?>
