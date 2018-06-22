# Sprint 1
### Primeros pasos

1. Antes que nada, asegúrate de tener un :lápiz: editor de texto en
 condiciones, algo como [Atom](https://atom.io/) o
 [Code](https://code.visualstudio.com/).
2. Para ejecutar los comandos a continuación necesitarás una :caracola:
 [UNIX Shell](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/shell),
 que es un programita que interpreta líneas de comando (command-line
 interpreter) así como tener [git](https://github.com/Laboratoria/curricula-js/tree/v2.x/topics/scm/01-git)
 instalado. Si usas un sistema operativo "UNIX-like", como GNU/Linux o MacOS,
 ya tienes una _shell_ (terminal) instalada por defecto (y probablemente `git`
 también). Si usas Windows puedes usar [Git bash](https://git-scm.com/download/win),
 aunque recomendaría que consideres probar :pingüino: GNU/Linux.
3. Una de las integrantes del equipo debe realizar un :cuchilo_y_tenedor: [fork](https://help.github.com/articles/fork-a-repo/)
del repo de tu cohort, tus _coaches_ te compartirán un _link_ a un repo. La otra integrante del equipo deber hacer un fork **del repositorio de su compañera** y [configurar](https://gist.github.com/BCasal/026e4c7f5c71418485c1) un `remote` hacia el mismo. 
4. :flecha_hacia_abajo: [Clona](https://help.github.com/articles/cloning-a-repository/)
 tu _fork_ a tu computadora (copia local).
5. :paquete: Instala las dependencias del proyecto con el comando `npm
 install`. Esto asume que has instalado [Node.js](https://nodejs.org/) (que
 incluye [npm](https://docs.npmjs.com/)).
6. Si todo ha ido bien, deberías poder ejecutar las :semáforo:
 pruebas unitarias (unit tests) con el comando `npm test`.
7. A codear se ha dicho! :cohete:

### Organización
Tablero Kanban

![img_4336](https://user-images.githubusercontent.com/39319360/41464895-8d1bf6d6-7061-11e8-9c39-752d1027b8ae.JPG)

### User Experience Design

Exposición de requerimientos por parte del usuario

![exposicion_usuario](https://user-images.githubusercontent.com/39319360/41465506-05c34cb8-7064-11e8-94e3-9ba3cc33aa01.jpg)

Entrevista

![img_4304](https://user-images.githubusercontent.com/39319360/41465550-3756f45a-7064-11e8-92aa-1df625d956fb.JPG)

#### Sketch de la solución (prototipo de baja fidelidad)

##### 1) Flujograma

![flujograma](https://user-images.githubusercontent.com/39319360/41474458-aa1ac72e-7081-11e8-8c47-71aef8086104.jpg)

##### 2) Sketch de la solución

![sketch1](https://user-images.githubusercontent.com/39319360/41475151-9698dd92-7083-11e8-9577-7158d58f0ac2.png)

![sketch2](https://user-images.githubusercontent.com/39319360/41475162-9cf3650e-7083-11e8-83c2-fe6bb139e43c.png)

![sketch3](https://user-images.githubusercontent.com/39319360/41475173-9fa38c20-7083-11e8-9348-064d3a5ffffc.png)

#### Diseño de la Interfaz de Usuario (prototipo de alta fidelidad)

Utilizamos Figma

![image 1](https://user-images.githubusercontent.com/39319360/41471386-1dd050c0-7079-11e8-87b9-ad4b5f13e5b0.png)

![image 2](https://user-images.githubusercontent.com/39319360/41471396-2329c11e-7079-11e8-88e5-362318881dae.png)

![image 3](https://user-images.githubusercontent.com/39319360/41471402-2804c1e8-7079-11e8-975d-824d70b5d805.png)

### Implementación de la Interfaz de Usuario (HTML/CSS/JS)
#### index.html