<nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
  <div class="container">
    <a class="navbar-brand" href="<?php echo $site_url; ?>">
      <img class="logo_menu" src="<?php echo $site_url . "assets/img/manzana.svg"; ?>" alt="">
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-md-end" id="navbarSupportedContent">
      <ul class="navbar-nav ">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="<?php echo $site_url; ?>">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="<?php echo $site_url . "quienes-somos/"; ?>">Nosotros</a>
        </li>
        

        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Servicios
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="<?php echo $site_url . "lustrado-de-manzanas/"; ?>">Lustrado de Manzanas</a></li>
            <li><a class="dropdown-item" href="#">Pelado de Mandarinas</a></li>
            <li><a class="dropdown-item" href="#">Doblado de Bananas</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="<?php echo $site_url . "contacto/"; ?>">Contacto</a>
        </li>
       
      </ul>
      
    </div>
  </div>
</nav>