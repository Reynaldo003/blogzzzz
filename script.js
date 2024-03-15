document.addEventListener("DOMContentLoaded", function() {
    if (document.getElementById("articuloPortu")) {
        document.getElementById("articuloPortu").addEventListener("click", function() {
            window.location.href = "portugal.html";
        });
    }

    if (document.getElementById("articuloRey")) {
        document.getElementById("articuloRey").addEventListener("click", function() {
            window.location.href = "vallejo.html";
        });
    }

    if (document.getElementById("articuloBonola")) {
        document.getElementById("articuloBonola").addEventListener("click", function() {
            window.location.href = "bonola.html";
        });
    }

    if (document.getElementById("articuloSoto")) {
        document.getElementById("articuloSoto").addEventListener("click", function() {
            window.location.href = "soto.html";
        });
    }
});
