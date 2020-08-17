
<div class="container-fluid col-12 pt-5 row justify-content-center">

<!-- Material form register -->

<div class="card col-5 pl-2 pr-2 ml-4 mr-4 ">

        <h5 class="card-header info-color white-text text-center py-4">
        <strong>Registro de profesor</strong>
        </h5>

        <!--Card content-->
        <div class="card-body px-lg-5 pt-0">

            <!-- Form -->
            <form class="text-center" style="color: #757575;"  id="formRegistro" autocomplete="off" @submit.prevent="registro">
                <div class="form-row">
                    <div class="col">
                        <!-- First name -->
                        <div class="md-form">
                            <input type="text" id="materialRegisterFormFirstName" class="form-control"  pattern=".{8,}]" name="nombre" autofocus required>
                            <label for="materialRegisterFormFirstName">Nombres</label>
                        </div>
                    </div>
                    <div class="col">
                        <!-- Last name -->
                        <div class="md-form">
                            <input type="text" id="materialRegisterFormLastName" class="form-control" required pattern=".{8,}" name="apellido">
                            <label for="materialRegisterFormLastName">Apellidos</label>
                        </div>
                    </div>
                </div>

                <!-- E-mail -->
                <div class="form-row">                
                    <div class="md-form col-6 container-fluid">
                        <input type="email" id="materialRegisterFormEmail" class="form-control" required name="email" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"  v-model='correo' >
                        <label for="materialRegisterFormEmail">Correo electronico</label>
                    </div>
                </div>
            
                <div class="form-row">
                    <div class="col-6 container-fluid">
                        <!-- Password -->
                        <div class="md-form">
                            <input type="password" v-model="pass" id="materialRegisterFormPassword1" class="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock" required pattern="[A-Za-z0-9]{8,15}" name="pass" value="" autocomplete="on">
                            <label for="materialRegisterFormPassword1">Password</label>
                            <small id="materialRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                                mínimo 8 caracteres y máximo 15
                            </small>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-6 container-fluid">
                        <!-- Password -->
                        <div class="md-form">
                            <input type="password" v-model="passC" id="materialRegisterFormPassword2" class="form-control" aria-describedby="materialRegisterFormPasswordHelpBlock" required pattern="[A-Za-z0-9]{8,15}" autocomplete="on">
                            <label for="materialRegisterFormPassword2">Repetir Password</label>
                            <small id="materialRegisterFormPasswordHelpBlock" class="form-text text-muted mb-4">
                                mínimo 8 caracteres y máximo 15
                            </small>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="col-4">

                        <!-- Phone DNI -->
                        <div class="md-form">
                            <input type="text" id="materialRegisterFormDNI" class="form-control" aria-describedby="materialRegisterFormPhoneHelpBlock" name="dni" v-model='dni'>
                            <label for="materialRegisterFormDNI">DNI</label>
                            <small id="materialRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">
                                Opcional
                            </small>
                        </div>

                        </div>
                        <div class="col-4">

                        <!-- Phone number -->
                        <div class="md-form">
                            <input type="text" id="materialRegisterFormPhone" class="form-control" aria-describedby="materialRegisterFormPhoneHelpBlock" name="telefono">
                            <label for="materialRegisterFormPhone">Teléfono</label>
                            <small id="materialRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4">
                                Opcional
                            </small>
                        </div>

                        </div>
                    </div>
                <!-- Estado name -->
                <div class="form-row">

                        <div class="col-12 d-flex ">

                            <table class='table border'>
                            <tr>
                                <td>
                                    <div class="md-form  d-flex pb-1 mt-0 pt-0 mb-0 col-4 mw-100">
                                        <label for="defaultInline1" class="pl-0 ml-0">Estado</label>  
                                        
                                        <input type="checkbox" id="defaultInline1" v-model="estadoEti" class="form-control pl-1" name='estado' style="width: 150px; height: 30px; background-color: rgba(0,0,255,0.1);"  >

                                              <small id="materialRegisterFormPhoneHelpBlock" class="form-text text-muted w-25 mb-4 mt-0 pt-0" v-if="estadoEti == true">
                                            {{etiquetaEstadoA}}
                                            </small>
                                            <small id="materialRegisterFormPhoneHelpBlock" class="form-text text-muted mb-4  mt-0 pt-0" v-if="estadoEti == false">
                                            {{etiquetaEstadoB}}
                                            </small>
                                    </div>        
                                </td>
                                <td>
                                    <div class="col-6 mt-0 pt-0 mw-100  ">

                                        <label for="defaultInline1" class="pl-0 ml-0">Rol</label>  
                                            
                                            <select v-model="selectedRol" name="rol" required>
                                                    <option v-for="optionrol in roles" v-bind:value="optionrol.id">
                                                        {{ optionrol.nombre }}
                                                    </option>
                                            </select>
                                    </div>
                                </td>
                            </tr>
                        </table>
                        </div>
                        </div>
                <!-- Sign up button -->
                <!-- <input  class="btn btn-outline-info btn-rounded btn-block my-4  waves-effect " type="submit" value="Registrarse"> -->
                <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect " type="submit">Registrarse</button>
                <hr>
            </form>
            <!-- Form -->

            <div class="card-action text-center btn-opcion2-inicio" v-if="inicio == true">
                        <a href="index.php"> Inicio sesión</a>
                    
            </div>
        </div>

</div>
 </div>

