## Challenge para Mercado libre
#### Guido Leonel Cotelesso
<p align="center"> <img src="https://d1.awsstatic.com/case-studies/LATAM/mercadolibre.1d9d3766bb06e60948f1c5ce8851ce0eac63b349.png" /> </p>


## Sobre el proyecto:
Este proyecto fue creado desde cero con `npm init` y se le adjunto:
- Weback
- Babel
- React
- Typescript
- Scss

Este cuenta con sus test en enzyme y jest.

## Como iniciar el proyecto

Clonar el repositorio, instalar sus modulos con `npm i` o `npm install`
Para ejecutarlo ejecutar `npm start` o `npm run dev`, este se abrira en el puerto 3000, en caso de querer cambiarlo se encuentra configurado en webpack.

## Particularidades del proyecto

- Se opto por usar react-helmet para seo, cambiando la descripcion como el tutilo de la pagina .
- Para los estilos se utilizo scss.
- Para utilizar un html base como template se utilizo 'HtmlWebpackPlugin'.
- Se pueden buscar productos ingresando en el url mas el path y la query `/items?q=`.
- Se puede obtener el detallede un producto ingresando en el url base mas el path `items` y el id, ejemplo: `http://localhost:3000/items/MLA896452720`.
- Se agrego pagina de NotFound, Home, y sin resultados.