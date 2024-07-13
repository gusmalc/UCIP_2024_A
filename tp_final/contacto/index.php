<?php 
include '../config.php'; 
include 'enviar_email.php';

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manzanita Feliz - Contacto</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <link rel="stylesheet" href="<?php echo $site_url . "assets/css/estilos.css?a=" . time(); ?>">
</head>
<body>
    <?php include '../common/menu.php'; ?>

    <main>
        <div class="container">
            <h1>Contacto</h1>

            <?php if($enviado == "si"){ ?>

            <div class="alert alert-warning alert-dismissible fade show" role="alert">
                Gracias por tu consulta
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>

            <?php } ?>

            <div class="row">
                <div class="col-12 col-md-6"> 
                    <?php include 'sections/formulario.php'; ?>
                </div>
                <div class="col-12 col-md-6">
                    <?php include 'sections/mapa.php'; ?>
                </div>
            </div>
        </div>
    </main>


    <?php include '../common/pie.php'; ?>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
</body>
</html>