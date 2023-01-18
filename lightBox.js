function expandImage(e) {
    var expandedImg = document.getElementById("expanded-image");
    var imagemSrc = document.getElementsByClassName("img-expand")[0]; 
    imagemSrc.src = e.children[0].src;
    expandedImg.style.display = "flex";
}
function hideImage() {
    var expandedImg = document.getElementById("expanded-image");
    expandedImg.style.display = "none";
}
