    // set up text to print, each item in array is new line
var aText = new Array(
        "Inicio: 16/05/2024 ~ 01/01/0001"
    );

var iSpeed = 50; // time delay of print out
var iIndex = 0; // start printing array at this posision
var iArrLength = aText[0].length; // the length of the text array
var iScrollAt = 20; // start scrolling up at this many lines

var iTextPos = 0; // initialise text position
var sContents = ''; // initialise contents variable
var iRow; // initialise current row

function typewriter()
{
 sContents =  "";
 iRow = Math.max(0, iIndex-iScrollAt);
 var destination = document.getElementById("typedtext");

 while ( iRow < iIndex ) {
  sContents += aText[iRow++] + "<br />";
 }
 destination.innerHTML = sContents + aText[iIndex].substring(0, iTextPos) + "_";
 if ( iTextPos++ == iArrLength ) {
  iTextPos = 0;
  iIndex++;
  if ( iIndex != aText.length ) {
   iArrLength = aText[iIndex].length;
   setTimeout("typewriter()", 0);
  }
 } else {
  setTimeout("typewriter()", iSpeed);
 }
}


        function restart() {
            iSpeed = 50; // time delay of print out
            iIndex = 0; // start printing array at this posision
            iArrLength = aText[0].length; // the length of the text array
            iScrollAt = 20; // start scrolling up at this many lines

            iTextPos = 0; // initialise text position
            sContents = ""; // initialise contents variable
            iRow = 0; // initialise current row
            typewriter();
        }

        typewriter();


        setInterval("restart()",5000);

        // Atualizar largura da barra de progresso
        function updateProgressBar(totalHoles) {
            var progressImage = document.querySelector(".image_progress");
            var maxWidth = 547; // Largura máxima da barra de progresso em pixels
            var width = (totalHoles / 1000) * maxWidth; // Calcular a largura proporcional

            progressImage.style.width = width + "px";
        }

        // Chamar a função de atualização inicialmente com o valor inicial de 0
        updateProgressBar(0);
		window.onload = hidden;

					function hidden() {
						document.body.style.overflow = "hidden";
					} 