let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/knit-icon.png') {
      miImage.setAttribute('src','images/knit-icon2.png');
    } else {
      miImage.setAttribute('src', 'images/knit-icon.png');
    }
}

let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');

function estableceNombreUsuario() {
    let miNombre = prompt('Por favor, ingresa tu nombre.');
    if(!miNombre) {
        estableceNombreUsuario();
    } else {
        localStorage.setItem('nombre', miNombre);
        miTitulo.textContent = 'Knita Tejedora tiene todo en lanas, ' + miNombre;
    }
}

if (!localStorage.getItem('nombre')) {
    estableceNombreUsuario();
}
else {
    let nombreAlmacenado = localStorage.getItem('nombre');
    miTitulo.textContent = 'Knita Tejedora tiene todo en lanas, ' + nombreAlmacenado;
}

miBoton.onclick = function() {
    estableceNombreUsuario();
}