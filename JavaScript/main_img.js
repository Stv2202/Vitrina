// Simulador de carga de especificaciones con Promesa
const cargarEspecificaciones = (productoId) => {
    return new Promise((resolve, reject) => {
        const productos = [
            { nombre: "Manilla artesanal roja", material: "Hilo encerado", tamaño: "Ajustable", origen: "Cali" },
            { nombre: "Pulsera cuero trenzado", material: "Cuero genuino", tamaño: "Mediano", origen: "Medellín" },
            { nombre: "Manilla tejida celeste", material: "Algodón", tamaño: "Pequeño", origen: "Bogotá" },
            { nombre: "Pulsera estilo étnico", material: "Tela étnica", tamaño: "Grande", origen: "Barranquilla" },
            { nombre: "Pulsera minimalista", material: "Nylon", tamaño: "Ajustable", origen: "Cartagena" },
            { nombre: "Pulsera colores vivos", material: "Hilo sintético", tamaño: "Mediano", origen: "Cali" },
            { nombre: "Pulsera ecológica", material: "Material reciclado", tamaño: "Grande", origen: "Santa Marta" },
            { nombre: "Pulsera tejida negra", material: "Algodón", tamaño: "Ajustable", origen: "Pereira" },
            { nombre: "Pulsera con dije", material: "Cuero + metal", tamaño: "Mediano", origen: "Manizales" },
        ];

        // Simula carga con retardo
        setTimeout(() => {
            if (productos[productoId]) {
                resolve(productos[productoId]);
            } else {
                reject("Producto no encontrado");
            }
        }, 800);
    });
};

// Selecciona todos los botones y sus contenedores correspondientes
const botones = document.querySelectorAll(".cont_img button");

botones.forEach((boton, index) => {
    boton.addEventListener("click", () => {
        const contenedor = boton.parentElement; // cont_img

        // Mensaje mientras carga
        boton.disabled = true;
        boton.textContent = "Cargando...";

        cargarEspecificaciones(index)
            .then((producto) => {
                // Agrega o reemplaza especificaciones
                let especificaciones = contenedor.querySelector(".especificaciones");
                if (!especificaciones) {
                    especificaciones = document.createElement("div");
                    especificaciones.classList.add("especificaciones");
                    contenedor.appendChild(especificaciones);
                }

                especificaciones.innerHTML = `
                    <p><strong>${producto.nombre}</strong></p>
                    <p>Material: ${producto.material}</p>
                    <p>Tamaño: ${producto.tamaño}</p>
                    <p>Origen: ${producto.origen}</p>
                `;
                setTimeout(() => {
                    especificaciones.remove();
                }, 9000);
            })
            .catch((error) => {
                alert(error);
            })
            .finally(() => {
                boton.disabled = false;
                boton.textContent = "Especificaciones";
            });
    });
});