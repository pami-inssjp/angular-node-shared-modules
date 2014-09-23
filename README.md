angular-node-shared-modules
===========================

## Técnica para compartir servicios/objetos entre angularjs y node.js

Dentro de `shared-modules/app` se encuentran los archivos compartidos entre el Front y el Backend.

Estos archivos son inyectados dentro de un módulo en AngularJS `sharedModule`, cada uno con su respectivo nombre,
en nuestro caso: validatorService

Ambos archivos son generados dentro de la carpeta `.tmp` y son inyectados en la aplicacion angular incluyendo `sharedModule`
a las dependencias.

Para que la aplicación angular encuentre el js, incluirlo en index.html
```html
<!-- build:js({.tmp,app}) scripts/scripts.js -->
<script src="scripts/services/validatorService.js"></script>
```
## Dependencias
El módulo depende de [grunt-angular-service](https://github.com/obibring/grunt-angular-service) pero actualmente tiene
un [bug](https://github.com/obibring/grunt-angular-service/issues/5).

El workaround es:

1. editar `node_modules/angular-shared-modules/package.json` y borrar los `^` de las versiones de las
dependencias
2. borrar `node_modules/angular-shared-modules/node_modules`
3. correr npm install en `node_modules/angular-shared-modules/node_modules` para que vuelva a bajar las dependencias.

## Autor
El autor de este módulo es [Juan Manuel Arias](https://github.com/juanmanuelarias)

## Licencia

![alt tag](https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png)

Esta obra está bajo una licencia de [Creative Commons](http://creativecommons.org/licenses/by-nc-sa/4.0/) Reconocimiento-NoComercial-CompartirIgual 4.0 Internacional. 

Esta licencia permite la reproducción y generación de obras derivadas sin fines de lucro y en el último caso, las obras derivadas deben protegerse bajo los términos de esta misma licencia.
