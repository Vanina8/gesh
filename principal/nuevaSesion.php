<?php   include '../includes/header.php';

        include "../includes/menu.php";
        ?>



<!-- Navbar-->
<nav class="navbar navbar-light">
    <form   class="form-inline active-cyan-3 active-cyan-4 px-2 pt-4"  style="color: #757575;"  id="formNuevaSesion" autocomplete="off" @submit.prevent="registraSesion">                              
        
        <label for="" class="pr-2"> Grupo:</label>

            <select v-model="selectedIdGrupo" name="grupo"  class='form-control'>
                    <option v-for="option in grupos" v-bind:value="option.id">
                        {{ option.nombre }}
                    </option>
            </select>
     
        <label for="" class="pr-2 pl-2"> Curso:</label>

            <select v-model="selectedYear" name="curso" class='form-control'>
                <option v-for="option in titulosYear" v-bind:value="option.curso" >
                    {{ option.curso }} 
                </option>
            </select>

        <label for="" class="pr-2 pl-2"> Semestre:</label>        

          <select v-model="selectedSem" name="seme" class='form-control'>
                <option v-for="option in semestres" v-bind:value="option" >
                    {{ option }} 
                </option>
            </select>
        

        <input type="hidden" name="selectedIdGrupo" v-model='selectedIdGrupo'>
        <input type="hidden" name="selectedSem" v-model='selectedSem'>
        <input type="hidden" name="selectedAsig" v-model='selectedAsig'>
        <input type="hidden" name="idaulaEncendida" v-model='idaulaEncendida'> 
        <input type="hidden" name="idProfeEncendido" v-model='idProfeEncendido'>
        <input type="hidden" name="idTramo" v-model='idTramo'>
        <input type="hidden" name="numeroDia" v-model='numeroDia'>
        <input type="hidden" name="selectedYear" v-model='selectedYear'>
        <input type="hidden" name="idHorario" v-model='idHorario'>

        <!-- <button class="btn  blue-gradient btn-md my-2 my-sm-0 ml-3" type="button" v-on:click='buscaNuevo'>Empezar</button> -->
        <!-- Grupo: {{selectedIdGrupo}} Curso: {{selectedYear}} Semestre: {{selectedSem}} -->

        <button class="btn  blue-gradient btn-md my-2 my-sm-0 ml-5" type="button" data-toggle="modal" data-target="#modalVisualiza" v-on:click='verHorario()'>Visualizar</button>
        <button class="btn  blue-gradient btn-md my-2 my-sm-0 ml-3" type="submit">Registrar</button>


    </form>
    <div class='d-flex justify-content-right' >
        <label class='pt-4' for="">REGISTRO DE SESIONES</label>
    </div>
</nav>
<!--/.Navbar -->

<div id="dt-basic-checkbox" class="table" cellspacing="0" width="100%" v-if="mostrarOpciones">

                <div class=" row container-fluid col-12 pt-3 justify-content-center">
                    <div class="col-4 m-1 border">
                        <div class="col-12 d-block justify-content-center">
                        
                                        <nav class="navbar navbar-light mt-3">                                    
                                            <label class='pt-2'> <strong> DÍA Y TRAMO</strong></label>  
                                        </nav>                            

                                        <div class='row col-12 pt-4  justify-content-center' >                                        
                                            <nav class="navbar navbar-light "> 
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

                                        <div class='row col-12 d-flex justify-content-center' v-for="(item, index) in tramoshorario" id='horario' >
                                                                                                                                  
                                                <div class='col-2 text-center'>
                                                    <button  class="btn p-3 btn-info cambioColor1"  v-on:click="selectTramoDia('lunes', item.id, index)" >                                                    
                                                           {{item.inicio}}
                                                    </button>
                                                </div>
                                                <div class='col-2 text-center'>
                                                    <button  class="btn p-3 btn-info cambioColor2"  v-on:click="selectTramoDia('martes', item.id, index)">                                                    
                                                             {{item.inicio}} 
                                                    </button>
                                                </div>
                                                <div class='col-2 text-center'>
                                                    <button  class="btn p-3 btn-info cambioColor3"  v-on:click="selectTramoDia('miercoles', item.id, index)">                                                    
                                                             {{item.inicio}} 
                                                    </button>
                                                </div>
                                                <div class='col-2 text-center'>
                                                    <button  class="btn p-3 btn-info cambioColor4" v-on:click="selectTramoDia('jueves', item.id, index)">                                                    
                                                               {{item.inicio}} 
                                                    </button>
                                                </div>
                                                <div class='col-2 text-center'>
                                                    <button  class="btn p-3 btn-info cambioColor5" v-on:click="selectTramoDia('viernes', item.id, index)">                                                    
                                                                {{item.inicio}} 
                                                    </button>
                                                </div>
                                        </div>
                        </div>

                        <div class="col-12 mt-4 mb-3">
                            <div class="d-block justify-content-center">
                                <nav class="navbar navbar-light mb-2">    
                                    <label class='pt-2'><strong>AULAS</strong></label>    
                                </nav>      
                                <div class='p-0 m-0' >

                                    <button type='button' class="btn btn-info btn-rounded m-1 cambioColorA" v-for='(item, index) in aulas' v-on:click="selectAula(item.id, index)" :id='index'>    
                                            {{ item.nombre }}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="col-3 m-1 border">                  
                        <nav class="navbar navbar-light mt-3">  
                            <label class='pt-2' ><strong>ASIGNATURAS</strong></label>      
                        </nav>
                        <div class='col-12  pt-2 d-flex justify-content-center'>
                             <select v-model="selectedAsig" name="asig" size='11' class="border border-0 shadow mb-3" >
                                      <option class="btn btn-info btn-rounded btn-block m-3" v-for="(option, index) in datosFiltradosGA" v-bind:value="option.id_asig" v-on:click="alCambiarAsig()" >
                                              {{option.nombre_asig}} - {{item.id_asig}}  - {{item.estado}}
                                      </option>
                             </select>
                        </div>
                    </div>
                    <div class="col-2 m-1 border">
    
                        <nav class="navbar navbar-light mt-3">  
                            <label class='pt-2'><strong>PROFESORES</strong></label>      
                        </nav>
                        <div class='col-12  pt-2 d-block justify-content-center' id='profesVisibles' name='profesVisibles' >
                            <button type='button' class="btn btn-info btn-rounded btn-block m-2 cambioColorP" v-for="(item, index) in datosFiltradosProfeAsig"  v-on:click="selectProfe(item.id_profe, index)" :id='item.id_profe*1000' >
                                        {{index}} - {{ item.nombre_profe }} {{item.apellido_profe}}
                            </button>
                        </div>                   
                    </div>
                </div>
<div class='row container-fluid justify-content-center col-12 border'>
    <h4 class='col-2'>Ocupado:</h4><div class='col-1'><button class="btn btn-secondary"></button></div>
    <h4 class='col-2'>Desocupado:</h4><div class='col-1'><button class="btn btn-info"></button></div>
    <h4 class='col-2'>Elegido:</h4><div class='col-1'><button class="btn btn-danger"></button></div>
</div>


</div>



<!-- Modal nuevo titulo -->

<!-- Modal -->
<!-- <div class="modal fade" id="modalVisualiza" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle"
  aria-hidden="true"> -->
<div class="modal fade" id="modalVisualiza"  aria-labelledby="exampleModalCenterTitle"
  aria-hidden="true">

  <!-- Add .modal-dialog-centered to .modal-dialog to vertically center the modal -->
  <div class=" modal-dialog  modal-xl modal-dialog-centered col-10" role="document">
    <div class="modal-content">
    <!-- Form -->
    <form class="text-center" style="color: #757575;"  id="formCatAula" autocomplete="off" >                              

            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">Visualiza horario del grupo</h5>

                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>

            <div class="modal-body">
            
            <div class="col-12 d-block justify-content-center">
                      
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

            </div>

            <div class="modal-footer justify-content-center">
                <button type="button" class="btn btn-secondary" data-dismiss="modal">Salir</button>
            </div>

    </from>

    </div>
  </div>
</div>


<?php
        include "../includes/footerSesion.php";
?>
