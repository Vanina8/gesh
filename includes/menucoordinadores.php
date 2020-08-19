<div class="d-flex toggled" id="wrapper">

<!-- Sidebar -->
<div class="border-right color-block-5 blue-gradient" id="sidebar-wrapper">
  <div class="sidebar-heading"><strong>Horario de profesores</strong></div>
    <div class="list-group list-group-flush ">

        <li class="nav-item dropdown ">              
          <a href="#" class="list-group-item list-group-item-action color-block-5" disabled >Profesores</a>
                <!-- <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="registro.php" id='pn' >Nuevo</a>
                  <a class="dropdown-item" href="buscar.php">Buscar</a>
                  <a class="dropdown-item" href="profeasigna.php">Asignar</a>
                </div> -->
        </li>
        <li class="nav-item dropdown ">              
          <a href="#" class="list-group-item list-group-item-action color-block-5" disabled  data-toggle="dropdown">Asignaturas</a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <a class="dropdown-item" href="asignatura.php">Nuevo</a>
              <a class="dropdown-item" href="buscarAsig.php">Buscar</a>
            </div>
        </li>
        <li class="nav-item dropdown ">
          <a href="#" class="list-group-item list-group-item-action color-block-5"  data-toggle="dropdown">Grupos</a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
              <a class="dropdown-item"  href="grupos.php">Nuevo/Listar</a>
              <a class="dropdown-item" href="gruposasigna.php">Asignar</a>
            </div>
        </li>        
          <a href="aulas.php" class="list-group-item list-group-item-action color-block-5">Aulas</a>
        <li class="nav-item dropdown ">
          <a href="#" class="list-group-item list-group-item-action color-block-5"  data-toggle="dropdown">Horario</a>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="tramos.php">Tramos</a>
              <a class="dropdown-item" href="nuevaSesion.php">Nuevo</a>
              <a class="dropdown-item" href="#">Consultas</a>
            </div>
        </li>
          <a href="../login/salir.php" class="list-group-item list-group-item-action color-block-5">Salir</a>
  </div>
</div>
<!-- /#sidebar-wrapper -->

<!-- Page Content -->
<div id="page-content-wrapper">

  <nav class="navbar navbar-expand-lg navbar-light border-bottom pr-5">
    <button class="btn blue-gradient btn-pr" id="menu-toggle"><i class="fas fa-bars"></i></button>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse pr-5" id="navbarSupportedContent">
      <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
   
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Profesores<span class="sr-only">(current)</span>
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="registro.php">Nuevo</a>
            <a class="dropdown-item" href="buscar.php">Buscar</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="profeasigna.php">Asignar asignaturas</a>
          </div>
        </li>
        <li class="nav-item dropdown pl-2">        
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Asignaturas
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="asignatura.php">Nuevo</a>
            <a class="dropdown-item" href="buscarAsig.php">Buscar</a>
          </div>
        </li>

        <li class="nav-item dropdown pl-2">
          <a class="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button"  data-toggle="dropdown"  aria-haspopup="true" aria-expanded="false" >
            Grupos
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="grupos.php">Nuevo/listar</a>
            <div class="dropdown-divider"></div>            
            <a class="dropdown-item" href="gruposasigna.php">Asignar asignaturas</a>
          </div>
        </li>     
        <li class="nav-item dropdown pl-2">
          <a class="nav-link" href="aulas.php" id="navbarDropdown" role="button" >
            Aulas
          </a>
        </li>
        <li class="nav-item dropdown pr-5 pl-2">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
           Horario
          </a>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="tramos.php">Tramos</a>
            <a class="dropdown-item" href="nuevaSesion.php">Nuevo</a>
            <a class="dropdown-item" href="horario.php">Consultas</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Exportar a Excel</a>
          </div>

        </li> 
        <li class="nav-item pr-5 pl-2">
          <a class="nav-link" href="../login/salir.php">Salir</a>
        </li> 
      </ul>
    </div>
  </nav>


