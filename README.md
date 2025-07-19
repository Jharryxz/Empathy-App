
Prueba tecnica prosof
Empathy App - README


¿QUÉ ES EMPATHY APP?
----------------------------------------
Empathy App es una aplicación web desarrollada para la gestión de tareas personales o de equipo. Permite agregar, editar, eliminar y filtrar tareas, así como cambiar su estado rápidamente desde la lista. El objetivo es facilitar la organización y el seguimiento de actividades de manera sencilla y visual.


¿CÓMO SE HIZO?
----------------------------------------
La aplicación fue creada usando las siguientes tecnologías:

- **Backend:**

 Laravel Framework 9.52.20 (PHP 8.0.30)

- **Frontend:**

 Node.js v22.17.1 Npm 10.9.2/(React-dom19.1.0) + Vite 7.0.5

- **Estilos:** 

 Bootstrap 5.3.7 js/css

- **HTTP:**
 
 Axios 1.10.0 para peticiones a la API

- **Base de datos:**

 MySQL/Apache (XAMPP)

- **Otros:**
 Vite para el bundling y hot reload, Composer 2.8.10 para la creación de proyecto junto a laravel installer, Photopea para la creación de las imágenes y edición, también se hizo uso de SEEDER´S para poblar de ejemplos la Base de Datos.


El backend Laravel expone una API RESTful para la gestión de tareas. El frontend React consume esta API y muestra la interfaz interactiva. Bootstrap se utiliza para el diseño visual y responsivo.


FUNCIONALIDADES PRINCIPALES
----------------------------------------
- Navbar fijo con logo y nombre de la app
- Favicon personalizado
- Listado de tareas con:
    - Nombre, descripción, fecha de creación y fecha de la tarea
    - Estado editable desde la lista (Sin iniciar, En Proceso, Completada, Cancelada)
    - Botones para editar y eliminar cada tarea
- Modal Bootstrap para agregar y editar tareas
- Filtros por estado y orden por fecha de creación o completado
- Alertas visuales al eliminar tareas


INSTALACIÓN Y USO
----------------------------------------

Instala XAMPP, composer y node.js, después con el composer en la carpeta C:\xampp\htdocs\Empathy-App accedes a la terminal(CMD) y ejecuta los siguiente pasos

1. **Clona el repositorio o copia los archivos en tu servidor local (XAMPP recomendado).**

2. **Instala dependencias de Laravel:**
   - Abre una terminal en la raíz del proyecto y ejecuta:
     ```
     composer install
     ```

3. **Configura el archivo `.env` de Laravel:**
   - Copia `.env.example` a `.env` y ajusta la configuración de la base de datos.

4. **Genera la clave de la app:**
   ```
   php artisan key:generate
   ```

5. **Ejecuta migraciones para crear las tablas:**
   ```
   php artisan migrate
   ```

6. **Instala dependencias de Node para el frontend:**
   - Abre una terminal en la raíz y ejecuta:
     ```
     npm install
     ```

7. **Compila los assets con Vite:**
   ```
   npm run dev
   ```
   (Para producción usa `npm run build`)

8. **Arranca el servidor Laravel:**
   ```
   php artisan serve
   ```
   O usa XAMPP y accede a `http://localhost/Empathy-App/public`

9. **Accede a la app en tu navegador.**


NOTAS ADICIONALES
----------------------------------------
- El logo y el favicon deben estar en la carpeta `public` (`logoempathyr.png` y `faviconempathyr.png`).
- El frontend está en `resources/js` y el backend en `app` y `routes/api.php`.
- Si quieres cambiar el logo, reemplaza el archivo en `public` y ajusta la ruta en el navbar.
- Puedes personalizar los colores y estilos modificando las clases Bootstrap o agregando CSS propio.



¡Gracias por la oportunidad!
Jharryx.

