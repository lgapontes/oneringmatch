<?php
/*
require __DIR__.'/vendor/autoload.php';

use Spipu\Html2Pdf\Html2Pdf;

$html2pdf = new Html2Pdf();
$html2pdf->writeHTML('<h1>HelloWorld</h1>This is my first test');
$html2pdf->output();
*/

require __DIR__.'/vendor/autoload.php';

use Spipu\Html2Pdf\Html2Pdf;
use Spipu\Html2Pdf\Exception\Html2PdfException;
use Spipu\Html2Pdf\Exception\ExceptionFormatter;

require_once('fonts/aniron/php/aniron.php');
require_once('fonts/newbaskerville/php/newbaskerville.php');

// for display the post information
/*
if (isset($_POST['test'])) {
    echo '<pre>';
    echo htmlentities(print_r($_POST, true));
    echo '</pre>';
    exit;
}
*/

try {
    ob_start();
    require __DIR__.'/res/form.php';
    $content = ob_get_clean();

    
    $width = 1148;
    $height = 890;
    $width_in_mm = ($width/96) * 25.4; 
    $height_in_mm = ($height/96) * 25.4;
    
    /*
    $width_in_mm = 317.5; 
    $height_in_mm = 245.79791667;
    */
    
    $html2pdf = new HTML2PDF('L', array($width_in_mm,$height_in_mm), 'en', true, 'UTF-8', array(0, 0, 0, 0));

    $html2pdf->setDefaultFont("newbaskerville");
    //$html2pdf->SetFont('aniron', '', 30);

    //$html2pdf = new Html2Pdf('P', 'A4', 'fr');
    $html2pdf->pdf->SetDisplayMode('fullpage');
    $html2pdf->writeHTML($content);
    
    $nome_arquivo = 'TOR2e CharacterSheet ' . substr(md5(date("D M j G:i:s T Y") . strval(rand(0,100))),0,6) . '.pdf';
    
    $html2pdf->output($nome_arquivo);
} catch (Html2PdfException $e) {
    $html2pdf->clean();

    $formatter = new ExceptionFormatter($e);
    echo $formatter->getHtmlMessage();
}