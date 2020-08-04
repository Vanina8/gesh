<?php   include '../includes/header.php';

        include "../includes/menu.php";
        ?>



<!-- Navbar-->
<nav class="navbar navbar-light">
    <form   class="form-inline active-cyan-3 active-cyan-4 px-2 pt-4"  style="color: #757575;"  id="formNuevaSesion" autocomplete="off" @submit.prevent="buscaNuevo">                              
        
        <label for="" class="pr-2"> Grupo:</label>

        <select v-model="selected" name="grupo">
                <option v-for="option in grupos" v-bind:value="option.id">
                    {{ option.nombre }}
                </option>
        </select>
        
     
        <label for="" class="pr-2 pl-2"> Curso:</label>

          <input class="form-control" type="text" placeholder="Search" aria-label="Search" v-model="curso" value='2020 - 2021'>



        <label for="" class="pr-2"> Semestre:</label>
        
        <input class="form-control" type="text" placeholder="Search" aria-label="Search" v-model="semestre" value='1'>


        <!-- <span> {{ selected }}</span> -->

        <button class="btn  blue-gradient btn-md my-2 my-sm-0 ml-3" type="submit">Search</button>

        Grupo: {{selected}} Curso: {{curso}} Semestre: {{semestre}}
    </form>
    <div class='d-flex justify-content-right' >
        <label class='pt-4' for="">REGISTRO DE SESIONES</label>
    </div>
</nav>
<!--/.Navbar -->

<div id="dt-basic-checkbox" class="table" cellspacing="0" width="100%" v-if="mostrarOpciones">
        <form   class="form-inline active-cyan-3 active-cyan-4 px-2 pt-4"  style="color: #757575;"  id="formRegSesion" autocomplete="off" @submit.prevent="registraSesion">  

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
                                                    <!-- <button  class="btn  p-3" v-bind:class="{'btn-info' : estadoLunes[0], 'btn-danger' : estadoLunes[0]}"  v-on:click="selectTramoDia('lunes', item.id, index)" >                                                     -->
                                                    <button  class="btn p-3 btn-info cambioColor1"  v-on:click="selectTramoDia('lunes', item.id, index)"  >                                                    
                                                           {{item.inicio}}
                                                    </button>
                                                </div>
                                                <div class='col-2 text-center'>
                                                    <button  class="btn p-3 btn-info cambioColor2" :class=""  v-on:click="selectTramoDia('martes', item.id, index)">                                                    
                                                             {{item.inicio}} 
                                                    </button>
                                                </div>
                                                <div class='col-2 text-center'>
                                                    <button  class="btn p-3 btn-info cambioColor3" :class=""  v-on:click="selectTramoDia('miercoles', item.id, index)">                                                    
                                                             {{item.inicio}} 
                                                    </button>
                                                </div>
                                                <div class='col-2 text-center'>
                                                    <button  class="btn p-3 btn-info cambioColor4" :class="" v-on:click="selectTramoDia('jueves', item.id, index)">                                                    
                                                               {{item.inicio}} 
                                                    </button>
                                                </div>
                                                <div class='col-2 text-center'>
                                                    <button  class="btn p-3 btn-info cambioColor5" :class="" v-on:click="selectTramoDia('viernes', item.id, index)">                                                    
                                                                {{item.inicio}} 
                                                    </button>
                                                </div>
                                               
                                            <!-- </div>   -->

                                        </div>
                                        <!-- {{selectedDias}} -->
                                <!-- </div> -->                    
                        </div>

                        <div class="col-12 mt-4 ">
                            <div class="d-block justify-content-center">
                                <nav class="navbar navbar-light mb-2">    
                                    <label class='pt-2'><strong>AULAS</strong></label>    
                                </nav>      
                                <div class='p-0 m-0'  >
                                    <!-- <button type='button' class="btn btn-info btn-rounded m-1" v-if="estadoAulas(item.id)" >
                                            {{ item.nombre }}
                                    </button>

                                    <button type='button' class="btn btn-info btn-rounded m-1" v-else >
                                            {{ item.nombre }}
                                    </button> -->

                                    <button type='button' class="btn btn-info btn-rounded m-1 "  v-for="item in aulas" >
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
                            <!-- <button type='button'  v-for="(item, index) in gruposAsig"  v-on:click="selectAsignatura(item.id, index, item.estado)" :class="item.estado == 0 ? 'btn-info m-2 btn-rounded btn  btn-block cambioColor6 ': 'btn-danger m-2 btn-rounded btn  btn-block disabled'"  >
                                    <div>   {{ item.nombre_asig }} {{item.id_asig}}{{item.estado}}</div>
                            </button> -->

                            <!-- referencia -->
                            <!-- <button type='button' class="btn btn-info btn-rounded btn-block m-2" v-for="item in gruposAsig"  v-on:click="item.estado>item.estado ? item.estado : item.estado++ " > -->
                            <!-- class="btn btn-info btn-rounded btn-block m-2 cambioColor6" -->

                             <select v-model="selectedAsig" name="asig" size='11' class="border border-0 shadow mb-3" >
                                      <option class="btn btn-info btn-rounded btn-block m-3" v-for="(option, index) in datosFiltradosGA" v-bind:value="option.id_asig">
                                              {{option.nombre_asig}} - {{item.id_asig}}  - {{item.estado}}
                                      </option>
                             </select>
                        </div>
                    </div>
                    <div class="col-2 m-1 border">
    
                        <nav class="navbar navbar-light mt-3">  
                            <label class='pt-2'><strong>PROFESORES</strong></label>      
                        </nav>
                        <div class='col-12  pt-2 d-flex justify-content-center'>
                            <button type='button' class="btn btn-info btn-rounded btn-block m-2" v-for="item in datosFiltradosProfeAsig" >
                                        {{ item.nombre_profe }} {{item.apellido_profe}}
                            </button>
                        </div>
                   
                    </div>
                    
                  
                </div>
                {{selectedAsig}}               
        </form>  
</div>




  <!-- <div class="row modal-body col-12">
                  <div class='col-5'>
                  </div>
                  <div class='col-5'> 
                     <option v-for="option in datosFiltradosSesPro" v-bind:value="option.p_id">
                               {{ option.p_apellido }}
                     </option> 
                   </div>
  </div> -->





<?php
        include "../includes/footer.php";
?>
