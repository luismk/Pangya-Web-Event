

   function changeImage(elementId, imageSrc, top, left) {
    var img = document.createElement("img");
    img.src = imageSrc;
    img.style.position = 'absolute';
    img.style.top = top + 'px';
    img.style.left = left + 'px';
    document.querySelector('.background-container').appendChild(img);
    var button = document.getElementById(elementId);
    button.style.display = 'none'; // Esconder o botão após clicar
    showModal();
}
function showModal() {
    var modal = document.getElementById("modal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}

