# Proyecto de Dentistas

Este es un proyecto de React que permite a los usuarios explorar una lista de dentistas, contactarlos a través de un formulario y guardar sus dentistas favoritos en la memoria local del navegador.

## URL de Despliegue
Puedes acceder a la aplicación en: [Dentistas App](https://github.com/kaviur/ctd-esp-fe3-final)

## Requisitos

### Funcionalidades
- **Destacados**: Cada card de dentista puede ser agregada a favoritos, y la información se almacena en `localStorage` utilizando el hook `useReducer`.
  
- **Estilos**: La aplicación se adapta a un tema claro u oscuro, afectando el estilo de las diferentes rutas.

### Rutas

1. **Inicio (Home)**: 
   - Muestra un listado en forma de grilla de dentistas obtenidos de la API.
   - Cada card incluye el nombre, el username, un botón "ADD FAV" para agregar a favoritos, y un enlace para la navegación a la página de detalles del dentista.

2. **Contacto**: 
   - Implementa un formulario con validaciones que captura la información del usuario.
   - Los campos requeridos son:
     - Nombre completo (mínimo 5 caracteres)
     - Email (formato válido)
   - Mensajes de error y éxito son mostrados adecuadamente.

3. **Detalle del Dentista**: 
   - En la ruta `/dentist/:id`, muestra información detallada de un dentista específico, incluyendo nombre, email, teléfono y sitio web.

4. **Destacados**: 
   - En la ruta `/favs`, se renderizan las cards de los dentistas destacados almacenados en `localStorage`.

## Instalación

1. Clona este repositorio utilizando el siguiente comando en tu terminal:
   git clone https://github.com/kaviur/ctd-esp-fe3-final.git

2. Navega al directorio del proyecto con:
   cd ctd-esp-fe3-final

3. Instala las dependencias del proyecto ejecutando:
   npm install

4. Finalmente, inicia el servidor de desarrollo con:
   npm start

## Tecnologías Utilizadas

- **React**
- **React Router**
- **Axios**
- **useReducer**
- **useContext**
- **HTML5**
- **CSS3**
- **tailwind**