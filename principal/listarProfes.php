

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

<div class="row" v-for="item in listarProfes" >
  <div class="col s12 m12 l12">
    <div class="card">
      <div class="card-content">
        <span class="card-title">{{item._nombres}}</span>
          <pre :id="'copy' + item.id ">
            {{item._apellidos}}
          </pre>
          <p>{{item._rol}}</p>
      </div>
      <div class="card-action">
      </div>
    </div>
  </div>
</div>

<?php
    include "../includes/footer.php";
?>
