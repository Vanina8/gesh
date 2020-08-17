<?php
    @session_start();
    if(isset($_SESSION['user'])){
        header("location:../principal");
    }
    include "../includes/header.php";
?> 


<div class="container-fluid col-3 pt-5 mt-5">

<!-- Material form register -->

<div class="card">

<h5 class="card-header info-color white-text text-center py-4">
   <strong>Inicio sesión</strong>
</h5>

<!--Card content-->
<div class="card-body px-lg-5 pt-0">

   <!-- Form -->
   <form class="text-center" style="color: #757575;" id="inicioSesion"  @submit.prevent="login">
        <div class="form-row">
        <div class="col pt-4">
            <!-- E-mail -->
            <div class="md-form">
                <input type="email" name="email" id="materialRegisterFormEmail" class="form-control" required  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$">
                <label for="materialRegisterFormEmail">Correo electronico</label>
            </div>
        </div>
        </div>
        <div class="form-row">
        <div class="col">
             <!-- Password -->
             <div class="md-form">
                 <input type="password" name="pass" id="materialRegisterFormPassword" class="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock" required pattern="[A-Za-z0-9]{8,15}">
                 <label for="materialRegisterFormPassword">Password</label>
                 <small id="materialRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                     mínimo 6 caracteres y máximo 8
                 </small>
             </div>
             </div>
        </div>
       <!-- Sign up button -->
       <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect" type="submit">Sign in</button>
       <hr>
   </form>
   <!-- Form -->

</div>

</div>
<!-- Material form register -->

 </div>

<?php
    include "../includes/footerLogin.php";
?>
