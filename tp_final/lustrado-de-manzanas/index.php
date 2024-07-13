<?php include '../config.php'; ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manzanita Feliz - Lustrado de Manzanas</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="<?php echo $site_url . "assets/css/estilos.css?a=" . time(); ?>">
<link href="https://cdn.jsdelivr.net/npm/swiffy-slider@1.6.0/dist/css/swiffy-slider.min.css" rel="stylesheet" crossorigin="anonymous">
</head>
<body>
    <?php include '../common/menu.php'; ?>


    <main>
        <div class="container">
            <h1>Lustrado de Manzanas</h1>
        </div>


        <div class="swiffy-slider slider-nav-animation slider-nav-animation-scale">
    <ul class="slider-container">
        <li><img src="https://img.malcotti.com/imagenes/Portada/1300_570_01.jpg" style="max-width: 100%;height: auto;"></li>
        <li><img src="https://img.malcotti.com/imagenes/Portada/1300_570_02.jpg" style="max-width: 100%;height: auto;"></li>
        <li><img src="https://img.malcotti.com/imagenes/Portada/1300_570_03.jpg" style="max-width: 100%;height: auto;"></li>
    </ul>

    <button type="button" class="slider-nav"></button>
    <button type="button" class="slider-nav slider-nav-next"></button>

    <div class="slider-indicators">
        <button class="active"></button>
        <button></button>
        <button></button>
    </div>
</div>
    </main>


    <?php include '../common/pie.php'; ?>

    <script src="https://cdn.jsdelivr.net/npm/swiffy-slider@1.6.0/dist/js/swiffy-slider.min.js" crossorigin="anonymous" defer></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>