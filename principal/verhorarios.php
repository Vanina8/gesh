
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

<div class="card text-center ">
  <div class="card-header">
    VISUALIZAR HORARIOS
  </div>
  <div class="card-body mx-auto  col-8">
  
        <div class='row col-12 pt-4 pr-0 pl-0 ml-0 mr-0 justify-content-center' > 
            <nav class="navbar navbar-light col-12"> 
                <div class='col-2'>
                   <label class='text-center'> <strong> Tramos</strong></label>  
                </div>
                <div class='col-2'>
                   <label class='text-center'> <strong> Lunes</strong></label>  
                </div>
                <div class='col-2'>
                   <label class='text-center' > <strong> Martes</strong></label>  
                </div>
                <div class='col-2'>
                   <label class='text-center' > <strong> Miercoles</strong></label>  
                </div>
                <div class='col-2'>
                   <label class='text-center' > <strong> Jueves</strong></label>  
                </div>
                <div class='col-2'>
                   <label class='text-center' > <strong> Viernes</strong></label>  
                </div>
            </nav>
        </div>
        <div>                                                        
            <div class='row col-12 d-flex justify-content-center m-0 p-0 border' v-for="(item, index) in tramoshorario" id='horarioV' >

                <div class='col-2 text-center p-0 m-0'>
                    <div  class="p-3 "  >                                                    
                          <h6> {{item.inicio}} - {{item.fin}}</h6>
                    </div>
                </div>                                                                                                                                             
                <div class='col-2 text-center p-0 m-0'>
                    <div class='cambioColor11 espacio rounded-lg' :id="'L'+index">
                </div>
                </div>
                <div class='col-2 text-center p-0 m-0'>
                    <div class='cambioColor22 espacio rounded-lg' :id="'M'+index">
                    </div>
                </div>
                <div class='col-2 text-center p-0 m-0'>
                    <div class='cambioColor33 espacio rounded-lg' :id="'Mi'+index">
                    </div>
                </div>
                <div class='col-2 text-center p-0 m-0'>
                    <div class='cambioColor44 espacio rounded-lg' :id="'J'+index">
                    </div>
                </div>
                <div class='col-2 text-center p-0 m-0'>
                    <div class='cambioColor55 espacio rounded-lg' :id="'V'+index">
                    </div>
                </div>              
            </div>
     </div>

  </div>
  <div class="card-footer text-muted">
    
  </div>
</div>
</div>

<?php
        include "../includes/footerSesion.php";
?>
