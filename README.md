# Proyecto Curso ReactJS - ecommerce "LampStock"
Este ecommerce fue realizado como proyecto final para el curso de ReactJs impartido por CoderHouse

## Descripción
Este ecommerce se encarga de la comercialización de lámparas para el hogar

## Dependencias utilizadas

-   [react-bootstrap](https://react-bootstrap.netlify.app/)
-   [react-router-dom](https://reactrouter.com/)
-   [react-router-bootstrap](https://github.com/react-bootstrap/react-router-bootstrap/)
-   [firebase]([https://www.npmjs.com/package/firebase](https://www.npmjs.com/package/firebase))

## Características del sitio

- Navegabilidad con categorías (Lámparas de pie y de escritorio)
- Carrito de compras con las funcionalidades de borrar por producto y de vaciar por completo
- Detalles de cada producto con su información completa
- Los datos de los productos son consumidos desde la base de datos de Firebase 
### Ejemplo de navegación

![vídeo-gif](https://github.com/leandrogtabak/react/tree/master/raw/Master/Navegacion.gif)

## Instalación




Clonar el proyecto y entrar en el directorio:


```
git clone https://github.com/leandrogtabak/react
cd coderhouse-desafio-ecommerce
```
Instalar la versión de npm recomendada (instalar nvm si hace falta):
```
nvm install
```
Instalar las dependencias:
```
npm install
```
Duplicar el archivo  `.env.example`  como  `.env`. Poner las claves de Firebase provistas por privado.

```
cp .env.example .env

```

Iniciar el servidor local:
```
npm start
```