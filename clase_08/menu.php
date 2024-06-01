
<?php 

$url = "http://localhost/cursos/UCIP_2024_A/clase_08/";
// $url = "https://abc.com/";
?>







<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li><a class="nav-link" h href="<?php echo $url; ?>index.php">Inicio</a></li>
            <li><a class="nav-link" h href="<?php echo $url; ?>servicios.php">Servicios</a></li>
            
            <li><a class="nav-link" h href="<?php echo $url; ?>quienes-somos">Quienes Somos</a></li>
        
        
      </ul>
      
    </div>
  </div>
</nav>