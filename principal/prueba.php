<?php   include '../includes/header.php';

       
 ?>


<div class="card">
<?php  if(isset($_SESSION['admin'])): ?>

	<div class="card-header" data-background-color="green-dark">
	<?php  endif; ?>
	<?php  if(isset($_SESSION['instructor'])): ?>
		<div class="card-header" data-background-color="orange">
		<?php  endif; ?>
			<h3 class="title"><i class="material-icons" aria-hidden="true">contact_mail</i> INSTRUCTORES </h3>

		</div>
				
	<div class="card-content table-responsive">
	<a href="#" class="btn btn-success" data-toggle="modal" data-target="#ModalRegistroInstructor">Agregar Instructor</a>

		<div id="tabla_instructor">

            <table class='table pt-5'>
                <tr>
                    <th>#</th><th>Nombre</th><th>Apellido</th><th><i class="material-icons">build</i></span></th>
                </tr>			
                <tr>
                    <td>$instructor->idInstructor</td><td>$instructor->ins_nombre</td><td>$instructor->ins_apellido	</td>
                    <td>						
                    <a href='' class='btn btn-warning btn-sm'><i class="fas fa-pen"></i></a> 
                    <a class='btn btn-danger btn-sm' href=''><i class="fas fa-trash"></i></a>
                    </td>
                </tr>
                <tr>
                    <th>#</th><th>Nombre</th><th>Apellido</th><th><i class="material-icons">build</i></span></th>
                </tr>			
                <tr>
                    <td>$instructor->idInstructor</td><td>$instructor->ins_nombre</td><td>$instructor->ins_apellido	</td>
                    <td>						
                    <a href='' class='btn btn-warning btn-sm'><i class='material-icons'>create</i></a> 
                    <a class='btn btn-danger btn-sm' href=''><i class='material-icons'>delete</i></a>
                    </td>
                </tr>
                <tr>
                    <th>#</th><th>Ing. Multimedia</th><th>2020-2021</th><th><i class="material-icons">build</i></span></th>
                </tr>			
                <tr>
                    <td>Ing. Informatica</td><td>2020-2021</td><td>valor 3</td>
                    <td>						
                    <a href='' class='btn btn-warning btn-sm'><i class='material-icons'>create</i></a> 
                    <a class='btn btn-danger btn-sm' href=''><i class='material-icons'>delete</i></a>
                    </td>
                </tr>
            
            </table>
	
		</div>
	</div>
	<div class="card-content table-responsive">
		<a class="btn btn-danger btn-sm" href="funciones/php/exportarpdf.php">EXPORTAR PDF
		</a>
		<a class="btn btn-success btn-sm" href="funciones/php/exportarExcelinstructor.php">EXPORTAR EXCEL
		</a>
		<a class="btn btn btn-info btn-sm" href="funciones/php/exportarwordinstructor.php">EXPORTAR WORD
		</a>
	</div>
	
</div>



<?php
        include "../includes/footer.php";
?>
