angular-node-shared-modules
===========================

# Tecnica para compartir servicios/objetos entre angularjs y node.s.

Dentro de `shared-modules/app` se encuentran los archivos compartidos entre el Front y el Backend.

Estos archivos son inyectados dentro de un módulo en AngularJS `sharedModule`, cada uno con su respectivo nombre,
en nuestro caso: validatorService

Ambos archivos son generados dentro de la carpeta `.tmp` y son inyectados en la aplicacion angular incluyendo `sharedModule`
a las dependencias.

Para que la aplicacion angular encuentre el js, incluirlo en index.html
```html
<!-- build:js({.tmp,app}) scripts/scripts.js -->
<script src="scripts/services/validatorService.js"></script>
```
## Dependencias
El modulo depende de [grunt-angular-service](https://github.com/obibring/grunt-angular-service) pero actualmente tiene
un [bug](https://github.com/obibring/grunt-angular-service/issues/5).

El workaround es
1. editar `node_modules/angular-shared-modules/package.json` y borrar los `^` de las versiones de las
dependencias
2. borrar `node_modules/angular-shared-modules/node_modules`
3. correr npm install en `node_modules/angular-shared-modules/node_modules` para que vuelva a bajar las dependencias.

## Autor
El autor de este modulo es [Juan Manuel Arias](https://github.com/juanmanuelarias)