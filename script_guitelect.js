 let boton = document.getElementById("comprar");
            boton.addEventListener("click", function() {
                alert("Acabas de comparar los instrumentos seleccionados!");
            }); /* Script ALert página guitelect.html */


/*Cambia de color los links de cada artículo en index.html */
// Seleccionamos los enlaces que contienen "Guitarras Eléctricas", "Amplificadores" y "Accesorios"
  const enlacesCategorias = document.querySelectorAll('section article a.box-article');

  enlacesCategorias.forEach(enlace => {
    // Guardamos el color original que tenga en tu CSS
    const colorOriginal = enlace.style.color;

    // Al pasar el mouse por encima
    enlace.addEventListener('mouseover', () => {
      enlace.style.color = '#e63946'; // Cambia el texto a rojo (puedes cambiar este código de color)
      enlace.style.transition = 'color 0.3s ease'; // Hace que el cambio sea suave
    });

    // Al quitar el mouse
    enlace.addEventListener('mouseout', () => {
      enlace.style.color = colorOriginal; // Vuelve a su color original
    });
  });
