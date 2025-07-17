🧾 Documentación del Proyecto: ArtSan
🧶 Descripción general del proyecto

ArtSan es una aplicación web que tiene como objetivo exponer y promover productos artesanales colombianos a través de una interfaz amigable, moderna y responsiva. Permite a los usuarios conocer las especificaciones de diferentes manillas artesanales y comunicarse a través de un formulario de contacto.

🧑‍🤝‍🧑 Integrantes del equipo
Steven Redín

Santiago Castro

Enrique Zapata

📌 Estructura del Proyecto
ArtSan/
├── index.html
├── CSS/
│   └── style.css
├── JavaScript/
│   ├── main_form.js
│   └── main_img.js
├── imagenes/
│   ├── piclumen-1752710050764.png
│   └── (otras imágenes de productos)
│   ├── n-imagenes

 Tecnologías usadas
HTML5: Estructura semántica del sitio.

CSS3: Estilos personalizados, diseño responsivo con @media queries.

JavaScript (Vanilla): Interacciones dinámicas (formulario, especificaciones de productos).

Promesas: Para simular carga asincrónica de datos de productos.

🖼️ Descripción de funcionalidades
1. Galería de productos
Muestra una cuadrícula de productos con imágenes.

Al hacer clic en el botón “Especificaciones”, se simula una consulta asincrónica y se despliega información relevante del producto (nombre, material, tamaño y origen).

Las especificaciones se eliminan automáticamente después de 9 segundos.

2. Formulario de contacto
Contiene campos requeridos: nombre, correo electrónico y contraseña.

Al enviar el formulario, se muestra un mensaje de confirmación y se limpia el formulario.

Validación integrada tanto en HTML como en JavaScript.

3. Navegación
Barra de navegación superior fija (sticky) con enlaces a secciones principales.

Logo ubicado a la izquierda y menú a la derecha.

4. Diseño responsivo
Adaptado para móviles y tabletas.

Uso de flexbox y grid para una estructura fluida.

Ajustes específicos con @media para pantallas menores a 768px y 600px.

5. Footer
Contiene los créditos del proyecto y enlaces a políticas del sitio.

🧩 Organización del código
main_form.js: Maneja la lógica de envío del formulario y muestra mensajes.

main_img.js: Simula carga de especificaciones de productos usando Promesas.

style.css: Agrupa estilos para el layout general, galería, formulario y efectos visuales como hover y blur.

💡 Mejores prácticas aplicadas
Separación de responsabilidades (HTML - estructura, CSS - diseño, JS - lógica).

Uso de flexbox y grid para distribución eficiente.

Accesibilidad: uso de etiquetas label, alt en imágenes y required en campos.

Código modular con archivos separados para estilos y scripts.