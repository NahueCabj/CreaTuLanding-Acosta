☕ Kika Coffee Roasters - E-Commerce

Este proyecto fue desarrollado como parte del curso de ReactJS con el objetivo de aprender y aplicar conceptos fundamentales de React en el desarrollo de aplicaciones web modernas.

La aplicación consiste en un e-commerce de una cafetería, donde los usuarios pueden navegar por productos, ver detalles, agregar artículos al carrito y completar una compra mediante un formulario validado.

🚀 Tecnologías utilizadas

ReactJS → Librería principal para la construcción de la interfaz.

React Router DOM → Manejo de rutas y navegación entre páginas.

Firebase Firestore → Base de datos en la nube para persistencia de órdenes.

Context API → Gestión del estado global del carrito de compras.

SCSS + TailwindCSS → Estilos personalizados y diseño responsive.

📌 Características principales

🔹 Catálogo de productos con categorías y detalle de cada ítem.

🔹 Carrito de compras persistente durante la sesión.

🔹 Formulario de checkout validado (nombre, email, teléfono, dirección).

🔹 Confirmación de compra con generación de ID en Firebase.

🔹 Diseño responsive: adaptado para desktop y dispositivos móviles.

🔹 Navegación clara mediante barra superior y menú hamburguesa.

📂 Estructura de carpetas (simplificada)
src/
 ├─ components/       # Componentes reutilizables (NavBar, Footer, Cart, etc.)
 ├─ context/          # Context API para el carrito
 ├─ service/          # Configuración de Firebase
 ├─ styles/           # Estilos SCSS principales
 ├─ App.js            # Configuración de rutas y layout
 └─ main.jsx          # Punto de entrada de la aplicación

🛠️ Instalación y uso

Clonar el repositorio:

git clone https://github.com/tuusuario/tu-repo.git
cd tu-repo


Instalar dependencias:

npm install


Ejecutar en modo desarrollo:

npm run dev


Abrir en el navegador:

http://localhost:5173/

🎯 Objetivo del proyecto

El propósito principal de este proyecto es aprender ReactJS poniendo en práctica:

Manejo de componentes y props.

Uso de hooks (useState, useContext, useEffect).

Implementación de rutas dinámicas con React Router.

Integración con Firebase Firestore.

Buenas prácticas en estructuración de proyectos y estilos.

✨ Autor

Desarrollado por Nahuel Acosta como proyecto final del curso de ReactJS.