<?php   include '../includes/header.php';
        include "../includes/menu.php";
?>
 
  <form   class="form-inline active-cyan-3 active-cyan-4 px-2 pt-4"  style="color: #757575;"  id="formProfeAsigna" autocomplete="off" @submit.prevent="RegistroProfeAsignaAsi">                              

   <div class=" row container-fluid col-12 pt-3 justify-content-center">

      <div class="col-4 m-1 border shadow rounded">

          <label class='pt-2'> <strong> Profesores</strong></label>      

            <!-- Navbar-->
            <nav class="navbar navbar-light">                            
                    <input class="form-control" type="text" placeholder="Search" aria-label="Search" v-model="buscar">
            </nav>

          <div class=' pt-2  text-center '>
                  
                <select v-model="selectedProfe" name="cod_profe" id='cod_profe' size= '5' class='shadow border'>
                         <option v-for="option in datosFiltradosPro" v-bind:value="option.id" class='optionAsignarPro'>
                                            {{ option.nombres }} {{option.apellidos}}
                         </option>
                </select>
          </div>
      </div>
      <div class="col-1 m-1 border d-flex align-items-center justify-content-center shadow rounded">
        <div>
            <div class=" text-center">
                <button class="btn  blue-gradient btn-md  " type="submit" >Asignar</button>
            </div>           
         </div>
      </div>
      
      <div class="col-4 m-1 border shadow rounded">
          <label class='pt-2' ><strong>Asignaturas</strong></label>      

            <!-- Navbar-->
            <nav class="navbar navbar-light">                            
                    <input class="form-control" type="text" placeholder="Search" aria-label="Search" v-model="buscarAsig">               
            </nav>

          <div class='  pt-2 text-center'>

                    <select v-model="selectedAsig" name="cod_asig[]" size = '10' id='cod_asig' multiple class="shadow border mb-3">
                                        <option v-for="option in datosFiltradosAsigG" v-bind:value="option.id" class='optionAsignarPro'>
                                            {{ option.nombre }}
                                        </option>
                    </select>
          </div>
      </div>
   </div>
  </form>


<!-- Desasignar  -->


<div class='d-flex justify-content-center pt-4'>
  <div class="col-5 text-center pt-2 justify-content-center">

           <div  class="card navbar-light mb-5">
                     
                     <!--Navbar-->
       
                    <nav class="navbar navbar-light form-inline py-4 ">                            
                            <label for="" class="pr-2 pl-5"> Profesor</label>
                            <input class="form-control" type="text" placeholder="Search" aria-label="Search" v-model="buscarProfe">
                            <h5 class="black-text text-center px-5">
                                <strong>Desasignar asignaturas a Profesor</strong>
                            </h5>             
                    </nav> 
                    <!--/.Navbar-->
     
    
                  <div class="container-fluid  shadow rounded ">


                      <table class='table pt-5 pb-5'>
                            <tr>
                                <th>#</th><th>Profesor</th><th>Asignatura</th><th><i class="fas fa-wrench"></i></th>
                            </tr>			
                            <tr v-for="item in datosFiltradosDesAP"> 
                                <div class="card-body card-body-cascade  pb-0">                  
                                    <td>{{item.id}}</td>
                                    <td>{{item.nombre_profe}} {{item.apellido_profe}}</td>
                                    <td>{{item.nombre_asig}}</td>
                                    <td>
                                    <a class='btn btn-danger btn-sm' href="#" @click="eliminarAsignaP(item.id)"><i class="fas fa-trash"></i></a>
                                    </td>
                                </div>
                            </tr>                   
                      </table>
                  </div> 
           </div> 
    
  </div>
</div>



<?php 
       include "../includes/footer.php";
?>