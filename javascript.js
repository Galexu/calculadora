$(document).ready(function () {
    const pantalla = $(".pantalla");
    const btn = $(".btn");

    $(btn).each(function () {
        $(this).click(function () {
            const botonApretado = $(this).text();
            const id = $(this).attr("id");

            if (botonApretado === "C") {
                pantalla.text(0);
                return;
            }

            if (id === "borrar") {
                // $(pantalla).text() = $(pantalla).text().slice(0. - 1); //no va

                // var nuevoTexto = $(pantalla).text().slice(0, -1);
                // $(pantalla).text(nuevoTexto);
                if (pantalla.text() === "" || pantalla.text() === "Error") {
                    pantalla.text("0");
                } else {
                    pantalla.text(pantalla.text().slice(0, -1));
                }
                return;
            }

            if (id === "igual") {
                try {
                    pantalla.text(eval(pantalla.text()));
                } catch {
                    pantalla.text("Error");
                }
                return;
            }

            if (pantalla.text() === "0" || pantalla.text() === "Error") {
                pantalla.text(botonApretado);
            } else {
                pantalla.append(botonApretado);
            }
        });
    });
});

// const pantalla = document.querySelector('.pantalla');
// const btn = document.querySelectorAll('.btn');

// btn.forEach(button => {
//     button.addEventListener('click', () => {
//         const botonApretado = button.textContent;
//         const id = button.getAttribute('id');

//         if (botonApretado === 'C') {
//             pantalla.textContent = 0;
//             return;
//         }

//         if (id === 'borrar') {
//             if (pantalla.textContent === '' || pantalla.textContent === 'Error') {
//                 pantalla.textContent = 0;
//             } else {
//                 pantalla.textContent = pantalla.textContent.slice(0, -1);
//             }
//             return;
//         }

//         if (id === 'igual') {
//             try {
//                 pantalla.textContent = eval(pantalla.textContent);
//             } catch (error) {
//                 pantalla.textContent = 'Error';
//             }
//             return;
//         }

//         if (pantalla.textContent === '0' || pantalla.textContent === 'Error') {
//             pantalla.textContent = botonApretado;
//         } else {
//             pantalla.textContent += botonApretado;
//         }
//     });
// });