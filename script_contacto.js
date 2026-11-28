/*Cambia de color los links de NAV bar en contacto.html */

  const enlacesCategorias_nav = document.querySelectorAll('nav ul li a');

  enlacesCategorias_nav.forEach(enlace_nav => {
    /*Guardo el color original*/
    const colorOriginal_nav = enlace_nav.style.color;  /*Dorado Marshall*/

    /* Al pasar el mouse por encima*/
    enlace_nav.addEventListener('mouseover', () => {
      enlace_nav.style.color = '#fdfdfd'; // Cambia el texto a blanco
      enlace_nav.style.transition = 'color 0.5s ease'; /*Con esta línea logro que el cambio sea suave*/
    });

    /* Al quitar el mouse*/
    enlace_nav.addEventListener('mouseout', () => {
      enlace_nav.style.color = colorOriginal_nav;  /*Vuelve al color Dorado MArshall*/
    });
  });
