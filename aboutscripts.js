function toggleOverlay() {
    var overlay = document.getElementById("overlay");
    if (overlay.style.display == "block") {
        overlay.style.opacity = 0;
        setTimeout(() => { overlay.style.display = "none"; }, 300);
    } else {
        overlay.style.display = "block";
        setTimeout(() => { overlay.style.opacity = 1; }, 10);
    }
}