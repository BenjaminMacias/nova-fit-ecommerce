# NovaFit E-commerce

## 🧾 Descripción del proyecto
**NovaFit** es un e-commerce completo con **frontend en React** y **backend en Django REST Framework**.  
Permite navegar productos, autenticarse (registro/login), gestionar carrito, hacer checkout, crear órdenes y consultarlas. El backend expone endpoints REST y el frontend consume estos servicios vía Axios.

---

## 🧰 Tecnologías utilizadas
- **Frontend**
  - React (Create React App), React Router, Redux Toolkit
  - styled-components, Framer Motion
  - Axios
- **Backend**
  - Django 5 + Django REST Framework
  - django-cors-headers, djangorestframework-authtoken, django-filter
- **Base de datos**: SQLite (desarrollo)

---

## ⚙️ Instrucciones de instalación y uso

### 1) Clonar el repositorio
```bash
git clone https://github.com/BenjaminMacias/nova-fit-ecommerce.git
cd nova-fit-ecommerce

Backend (Django)
Carpeta: backend/

Crear entorno virtual e instalar dependencias:


cd backend
# crea y activa venv (Windows Git Bash / PowerShell)
python -m venv .venv
# Git Bash:
source .venv/Scripts/activate
# PowerShell:
# .venv\Scripts\Activate.ps1

# instala lo necesario (si no hay requirements.txt, instala mínimos)
pip install django djangorestframework django-cors-headers djangorestframework-authtoken django-filter
Migraciones y superusuario:


python manage.py migrate
python manage.py createsuperuser
Ejecutar backend:


python manage.py runserver 8000
# API base en: http://localhost:8000/api/
# Admin:        http://localhost:8000/admin/
Notas

En backend/backend_ecommerce/settings.py ya viene habilitado CORS para http://localhost:3000.

Endpoints principales expuestos bajo /api/ (ver “Ejemplos de uso”).

3) Frontend (React)
Carpeta: frontend/nova-fit-ecommerce/

Instalar dependencias:


cd ../frontend/nova-fit-ecommerce
npm install
Configurar variable de entorno del API:
Crea un archivo .env o .env.local en esta carpeta con:


REACT_APP_API_BASE_URL=http://localhost:8000/api/
Ejecutar frontend:


npm start
# abre http://localhost:3000
🧪 Ejemplos de uso
Autenticación (desde frontend)
Registro: http://localhost:3000/register

Login: http://localhost:3000/login

El frontend llama a:

POST /api/auth/register/ (alias: /api/register/)

POST /api/auth/login/ (alias: /api/login/)
y guarda el Token en localStorage para futuras peticiones.

Productos
GET lista paginada:


curl http://localhost:8000/api/products/
Búsqueda / ordenamiento:


curl "http://localhost:8000/api/products/?search=playera&ordering=-created_at"
Órdenes (checkout simple)
POST crear orden:


curl -X POST http://localhost:8000/api/orders/ \
  -H "Content-Type: application/json" \
  -H "Authorization: Token <TU_TOKEN>" \
  -d '{
    "shipping_name": "Juan Pérez",
    "shipping_address": "Calle 1 #123",
    "shipping_city": "CDMX",
    "shipping_state": "CDMX",
    "shipping_zip": "01000",
    "shipping_country": "MX",
    "shipping_cost": 0,
    "items": [
      { "id": 1, "name": "Playera", "price": 299, "quantity": 1 }
    ]
  }'
GET mis órdenes (autenticado):


curl -H "Authorization: Token <TU_TOKEN>" http://localhost:8000/api/orders/
Admin
Entra a http://localhost:8000/admin/ con el superusuario para cargar/editar productos (imágenes por URL), revisar órdenes y usuarios.





















# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
