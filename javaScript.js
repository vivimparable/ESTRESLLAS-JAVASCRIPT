  
function fijaColor(POSICION) {
    for (i = POSICION; i > 0; i--) {
        document.getElementById("icon" + i).classList.add("colorDentro");
    }

    for (i = POSICION + 1; i <= 5; i++) {
        document.getElementById("icon" + i).classList.remove("colorDentro");
    }
}


/*NOTA: Investigar el uso del event*/