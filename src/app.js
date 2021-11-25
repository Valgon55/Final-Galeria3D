//Proyecto Final Computación Gráfica
//Valentina González M - 63503

//Librerias
import * as THREE from 'https://cdn.skypack.dev/three';
import { GLTFLoader } from 'https://cdn.skypack.dev/three/examples/jsm/loaders/GLTFLoader.js';
import { PointerLockControls } from 'https://cdn.skypack.dev/three/examples/jsm/controls/PointerLockControls.js';
import { FontLoader } from 'https://cdn.skypack.dev/three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'https://cdn.skypack.dev/three/examples/jsm/geometries/TextGeometry.js';

//Fondo
const scene = new THREE.Scene();
scene.background = new THREE.TextureLoader().load('assets/cielo2.jpg');

const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);
const renderer = new THREE.WebGLRenderer();



let spotLight;
let objects = {};
let museo;
let garaje;
let rick;
let meeseks;
let morty;
let portal;
let portal2;
let nave;
let galeria;
let rickp;
let robot2;
let gun;
let controls;


document.body.onload = () => {
  main();
 
};

window.onresize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight, true);
};

function main() {

  // Configuracion inicial
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.shadowMap.enabled = true;
  
  document.body.appendChild(renderer.domElement);
    
    camera.position.z = 50;
    camera.position.y = 15;
    camera.position.x = 20;

  //Flechas
  movimiento_camara();

  // Light
  setupLights();

  animate();

  musica();

  //Modelos
  Museo();
  Garaje();
  Rick();
  video1();
  video2();
  video3();
  video4();
  Meeseks();
  Morty();
  Portal();
  Portal2();
  Nave();
  Galeria();
  RickPepinillo();
  Robot2();
  Gun();
  TextoRick();
  TextoMorty();
  TextoMeeseeks();
  TextoRickP();
}

//Paredes

const texture1 = new THREE.TextureLoader().load('assets/Texturas/pared3.jpg');
const geometryParedI1 = new THREE.BoxGeometry( 49.5, 39.8, 2.5 );
    
    const materialParedI1 = new THREE.MeshPhysicalMaterial( {color: 0xffffff, map:texture1,} );
    const paredI1 = new THREE.Mesh( geometryParedI1, materialParedI1 );
    scene.add( paredI1 );
    //Posicion

    paredI1.position.x = -25;
    paredI1.position.y=20;
    paredI1.position.z=18.8;

    
    
    objects.paredI1 = paredI1;
    scene.add(paredI1);
    console.log(objects);

    //Pared abajo

    const texture2 = new THREE.TextureLoader().load('assets/Texturas/pared3.jpg');
   const geometryParedI2 = new THREE.BoxGeometry( 39.3, 39.8, 3.5 );
    
    const materialParedI2 = new THREE.MeshPhysicalMaterial( {color: 0xffffff, map:texture2,} );
    const paredI2 = new THREE.Mesh( geometryParedI2, materialParedI2 );
    scene.add( paredI2 );
    //Posicion
    paredI2.rotation.y=1.59;
    paredI2.position.x =0.3;
    paredI2.position.y=20;
    paredI2.position.z=90;

    
    
    objects.paredI2 = paredI2;
    scene.add(paredI2);
    console.log(objects);

    //Pared arriba

    const texture3 = new THREE.TextureLoader().load('assets/Texturas/pared3.jpg');
    const geometryParedI3 = new THREE.BoxGeometry( 49.5, 39.8, 2.5 );
    
    const materialParedI3 = new THREE.MeshPhysicalMaterial( {color: 0xffffff, map:texture3,} );
    const paredI3 = new THREE.Mesh( geometryParedI3, materialParedI3 );
    scene.add( paredI3 );
    //Posicion
   
    paredI3.position.x = 25;
    paredI3.position.y=20;
    paredI3.position.z=-38.5;

    
    
    objects.paredI3 = paredI3;
    scene.add(paredI3);
    console.log(objects);

    //Videos

    function video1(color,wireframe){
        const videoV1_geometry = new THREE.BoxGeometry(35,25,0.1);
        var videoV1 = document.querySelector("#Video1");
        var textureV1 = new THREE.VideoTexture(videoV1);
      
        textureV1.wrapS = textureV1.wrapS = THREE.ClampToEdgedWrapping;
        textureV1.minFilter= THREE.LinearFilter;
      
        const videoV1_material = new THREE.MeshBasicMaterial({map:textureV1});
        const cubeV1 = new THREE.Mesh(videoV1_geometry, videoV1_material);
        cubeV1.rotation.y=1.59;
        cubeV1.position.x=48;
        cubeV1.position.z=-85;
        cubeV1.position.y=18;
        scene.add(cubeV1);
      }
    

     //video2

    function video2(color,wireframe){
      const videoV2_geometry = new THREE.BoxGeometry(35,25,0.1);
      var videoV2 = document.querySelector("#Video2");
      var textureV2 = new THREE.VideoTexture(videoV2);
     
      textureV2.wrapS = textureV2.wrapS = THREE.ClampToEdgedWrapping;
      textureV2.minFilter= THREE.LinearFilter;
    
      const videoV2_material = new THREE.MeshBasicMaterial({map:textureV2});
      const cubeV2 = new THREE.Mesh(videoV2_geometry, videoV2_material);
      cubeV2.rotation.y=1.59;
        cubeV2.position.x=48;
        cubeV2.position.z=85;
        cubeV2.position.y=18;
        scene.add(cubeV2);
    }
    //video3
    function video3(color,wireframe){
      const videoV3_geometry = new THREE.BoxGeometry(35,25,0.1);
      var videoV3 = document.querySelector("#Video3");
      var textureV3 = new THREE.VideoTexture(videoV3);
    
      textureV3.wrapS = textureV3.wrapS = THREE.ClampToEdgedWrapping;
      textureV3.minFilter= THREE.LinearFilter;
    
      const videoV3_material = new THREE.MeshBasicMaterial({map:textureV3});
      const cubeV3 = new THREE.Mesh(videoV3_geometry, videoV3_material);
      cubeV3.rotation.y=1.59;
        cubeV3.position.x=-48;
        cubeV3.position.z=-85;
        cubeV3.position.y=18;
        scene.add(cubeV3);
    }

    //video4

    function video4(color,wireframe){
      const videoV4_geometry = new THREE.BoxGeometry(35,25,0.1);
      var videoV4 = document.querySelector("#Video4");
      var textureV4 = new THREE.VideoTexture(videoV4);
     
      textureV4.wrapS = textureV4.wrapS = THREE.ClampToEdgedWrapping;
      textureV4.minFilter= THREE.LinearFilter;
    
      const videoV4_material = new THREE.MeshBasicMaterial({map:textureV4});
      const cubeV4 = new THREE.Mesh(videoV4_geometry, videoV4_material);
      cubeV4.rotation.y=1.59;
        cubeV4.position.x=-48;
        cubeV4.position.z=85;
        cubeV4.position.y=18;
        scene.add(cubeV4);
    }

    function musica(){
    const listener = new THREE.AudioListener();
    camera.add( listener );

// create a global audio source
const sound = new THREE.Audio( listener );

// load a sound and set it as the Audio object's buffer
const audioLoader = new THREE.AudioLoader();
audioLoader.load( 'assets/rym-music.mp3', function( buffer ) {
	sound.setBuffer( buffer );
	sound.setLoop( true );
	sound.setVolume( 0.5 );
	sound.play();
});
}

//Modelos 3D

function Museo(){
  let loader = new GLTFLoader();

  loader.load(
    './assets/Museo2/scene.gltf',
    function (gltf) {
      museo = gltf.scene.children[0];
      museo.scale.set(10, 10, 10);

      museo.position.x=0;
      museo.position.z=0;
      museo.position.y=0;


      scene.add(gltf.scene);
      animate();
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log('Un error ocurrio');
    },
  );
}

function Garaje(){
  let loader = new GLTFLoader();

  loader.load(
    './assets/Garaje/scene.gltf',
    function (gltf) {
      garaje = gltf.scene.children[0];
      garaje.scale.set(0.09, 0.09, 0.09);
      
      garaje.rotation.z=Math.PI;
      garaje.position.x=92;
      garaje.position.z=30;
      garaje.position.y=1.5;


      scene.add(gltf.scene);
      animate();
    },
    function (xhr) {
      console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
    },
    function (error) {
      console.log('Un error ocurrio');
    },
  );
}

function Rick(){
    let loader = new GLTFLoader();
  
    loader.load(
      './assets/Rick/scene.gltf',
      function (gltf) {
        rick = gltf.scene.children[0];
        rick.scale.set(0.09, 0.09, 0.09);
  
        rick.position.x=25;
        rick.position.z=-100;
        rick.position.y=1;
  
  
        scene.add(gltf.scene);
        animate();
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
      },
      function (error) {
        console.log('Un error ocurrio');
      },
    );
  }

  function Meeseks(){
    let loader = new GLTFLoader();
  
    loader.load(
      './assets/Meeseks/scene.gltf',
      function (gltf) {
        meeseks = gltf.scene.children[0];
        meeseks.scale.set(1, 1, 1);
        
        meeseks.rotation.z=3;
        meeseks.position.x=25;
        meeseks.position.z=100;
        meeseks.position.y=1;
  
  
        scene.add(gltf.scene);
        animate();
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
      },
      function (error) {
        console.log('Un error ocurrio');
      },
    );
  }

  function Morty(){
    let loader = new GLTFLoader();
  
    loader.load(
      './assets/Morty/scene.gltf',
      function (gltf) {
        morty = gltf.scene.children[0];
        morty.scale.set(0.08, 0.08, 0.08);
        
        //morty.rotation.z=3;
        morty.position.x=-25;
        morty.position.z=-100;
        morty.position.y=18;
  
  
        scene.add(gltf.scene);
        animate();
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
      },
      function (error) {
        console.log('Un error ocurrio');
      },
    );
  }

  function Portal(){
    let loader = new GLTFLoader();
  
    loader.load(
      './assets/Portal/scene.gltf',
      function (gltf) {
        portal = gltf.scene.children[0];
        portal.scale.set(200, 200, 200);
        
        portal.rotation.y=-1.55;
        portal.position.x=72.5;
        portal.position.z=30;
        portal.position.y=-12;
  
  
        scene.add(gltf.scene);
        animate();
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
      },
      function (error) {
        console.log('Un error ocurrio');
      },
    );
  }

  function Portal2(){
    let loader = new GLTFLoader();
  
    loader.load(
      './assets/Portal/scene.gltf',
      function (gltf) {
        portal2 = gltf.scene.children[0];
        portal2.scale.set(200, 200, 200);
        
        portal2.rotation.y=1.55;
        //portal2.rotation.z= (3/2)*Math.PI;
        portal2.position.x=26;
        portal2.position.z=33;
        portal2.position.y=45;
  
  
        scene.add(gltf.scene);
        animate();
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
      },
      function (error) {
        console.log('Un error ocurrio');
      },
    );
  }


  function Nave(){
    let loader = new GLTFLoader();
  
    loader.load(
      './assets/Nave2/scene.gltf',
      function (gltf) {
        nave = gltf.scene.children[0];
        nave.scale.set(5, 5, 5);
        
        nave.rotation.z=-1.5;
        nave.position.x=25;
        nave.position.z=-155;
        nave.position.y=5;
  
  
        scene.add(gltf.scene);
        animate();
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
      },
      function (error) {
        console.log('Un error ocurrio');
      },
    );
  }

  function Galeria(){
    let loader = new GLTFLoader();
  
    loader.load(
      './assets/Galeria/scene.gltf',
      function (gltf) {
        galeria = gltf.scene.children[0];
        galeria.scale.set(4, 4, 4);
        
        galeria.rotation.z=-1.55;
        galeria.position.x=25;
        galeria.position.z=-37;
        galeria.position.y=16;
  
  
        scene.add(gltf.scene);
        animate();
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
      },
      function (error) {
        console.log('Un error ocurrio');
      },
    );
  }

  function RickPepinillo(){
    let loader = new GLTFLoader();
  
    loader.load(
      './assets/RickPepinillo2/scene.gltf',
      function (gltf) {
        rickp = gltf.scene.children[0];
        rickp.scale.set(2, 2, 2);
        
        rickp.rotation.z=1.7;
        rickp.position.x=-35;
        rickp.position.z=105;
        rickp.position.y=1;
  
  
        scene.add(gltf.scene);
        animate();
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
      },
      function (error) {
        console.log('Un error ocurrio');
      },
    );
  }

  function Robot2(){
    let loader = new GLTFLoader();
  
    loader.load(
      './assets/Robot2/scene.gltf',
      function (gltf) {
        robot2 = gltf.scene.children[0];
        robot2.scale.set(3, 3, 3);
        
        robot2.rotation.z=3;
        robot2.position.x=-25;
        robot2.position.z=0;
        robot2.position.y=2;
  
  
        scene.add(gltf.scene);
        animate();
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
      },
      function (error) {
        console.log('Un error ocurrio');
      },
    );
  }

  function Gun(){
    let loader = new GLTFLoader();
  
    loader.load(
      './assets/Gun/scene.gltf',
      function (gltf) {
        gun = gltf.scene.children[0];
        gun.scale.set(0.1, 0.1, 0.1);
        
        gun.rotation.z=(5/4)*Math.PI;
        gun.position.x=25;
        gun.position.z=-50;
        gun.position.y=20;
  
  
        scene.add(gltf.scene);
        animate();
      },
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + '% cargado');
      },
      function (error) {
        console.log('Un error ocurrio');
      },
    );
  }
  
  //luces

function setupLights() {
    const light = new THREE.AmbientLight( 0x404040 , 1 ); // soft white light
    scene.add( light );

    const directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
scene.add( directionalLight );

const light2 = new THREE.PointLight( 0xffffff, 1, 100 );
light2.position.set( 25, 10, -150 );
scene.add( light2 );

const light4 = new THREE.HemisphereLight( 0xeeeeff, 0x777788, 0.75 );
				light4.position.set( 0.5, 1, 0.75 );
				scene.add( light4 );

}

function animate() {
  requestAnimationFrame(animate);
  
  renderer.render(scene, camera);
}

//controles

function movimiento_camara(){

  controls = new PointerLockControls( camera, document.body );

  const blocker = document.getElementById( 'blocker' );
  const instructions = document.getElementById( 'instructions' );

  instructions.addEventListener( 'click', function () {

  controls.lock();
  } );

  controls.addEventListener( 'lock', function () {

  instructions.style.display = 'none';
  blocker.style.display = 'none';

  } );

  controls.addEventListener( 'unlock', function () {

  blocker.style.display = 'block';
  instructions.style.display = '';

  } );

  scene.add( controls.getObject() );

  const onKeyDown = function ( event ) {

    switch ( event.code ) {

      case 'ArrowUp':
      case 'KeyW':
        controls.moveForward (1.5);
        break;

      case 'ArrowLeft':
      case 'KeyA':
        controls.moveRight (-1.5);
        break;

      case 'ArrowDown':
      case 'KeyS':
        controls.moveForward (-1.5);
        break;

      case 'ArrowRight':
      case 'KeyD':
        controls.moveRight (1.5);
        break;

      }

      };

    const onKeyUp = function ( event ) {

    switch ( event.code ) {

    case 'ArrowUp':
    case 'KeyW':
      controls.moveForward (0);
      break;

    case 'ArrowLeft':
    case 'KeyA':
      controls.moveRight (0);
      break;

    case 'ArrowDown':
    case 'KeyS':
      controls.moveForward (0);
      break;

    case 'ArrowRight':
    case 'KeyD':
      controls.moveRight (0);
      break;

        }

      };

      document.addEventListener( 'keydown', onKeyDown );
      document.addEventListener( 'keyup', onKeyUp );

}

//Textos

function TextoRick(){

  const loader = new FontLoader();
  loader.load( 'https://cdn.skypack.dev/three/examples/fonts/helvetiker_regular.typeface.json', function ( font ) {
    const geometrytext = new TextGeometry( 'Rick Sanchez', {
      font: font,
      size: 2,
      height: 0.5,
      curveSegments: 3,
      bevelThickness: 0.5,
      bevelSize: 0.2,
      bevelEnabled: true
    } );

    var textMaterial = new THREE.MeshNormalMaterial({ color: 0x7EF35C, specular: 0xffffff });

    var texto1 = new THREE.Mesh( geometrytext, textMaterial );
    texto1.position.y=15.5;
    texto1.position.x=48;
    texto1.position.z=-66.2;
    texto1.scale.set(1.5,1.5,1.5);
    texto1.rotation.y =(3/2)*Math.PI;

    texto1.receiveShadow = false;

    scene.add(texto1);

  } );

}

function TextoMorty(){

  const loader = new FontLoader();
  loader.load( 'https://cdn.skypack.dev/three/examples/fonts/helvetiker_regular.typeface.json', function ( font ) {
    const geometrytext = new TextGeometry( 'Morty', {
      font: font,
      size: 2,
      height: 0.5,
      curveSegments: 3,
      bevelThickness: 0.5,
      bevelSize: 0.2,
      bevelEnabled: true
    } );

    var textMaterial = new THREE.MeshNormalMaterial({ color: 0x7EF35C, specular: 0xffffff });

    var texto1 = new THREE.Mesh( geometrytext, textMaterial );
    texto1.position.y=15.5;
    texto1.position.x=-48;
    texto1.position.z=-50;
    texto1.scale.set(1.5,1.5,1.5);
    texto1.rotation.y =Math.PI/2;

    texto1.receiveShadow = false;

    scene.add(texto1);

  } );

}

function TextoMeeseeks(){

  const loader = new FontLoader();
  loader.load( 'https://cdn.skypack.dev/three/examples/fonts/helvetiker_regular.typeface.json', function ( font ) {
    const geometrytext = new TextGeometry( 'Mr. Meeseeks', {
      font: font,
      size: 2,
      height: 0.5,
      curveSegments: 3,
      bevelThickness: 0.5,
      bevelSize: 0.2,
      bevelEnabled: true
    } );

    var textMaterial = new THREE.MeshNormalMaterial({ color: 0x4AC8E9, specular: 0xffffff });

    var texto1 = new THREE.Mesh( geometrytext, textMaterial );
    texto1.position.y=15.5;
    texto1.position.x=48;
    texto1.position.z=37;
    texto1.scale.set(1.5,1.5,1.5);
    texto1.rotation.y =(3/2)*Math.PI;

    texto1.receiveShadow = false;

    scene.add(texto1);

  } );

}

function TextoRickP(){

  const loader = new FontLoader();
  loader.load( 'https://cdn.skypack.dev/three/examples/fonts/helvetiker_regular.typeface.json', function ( font ) {
    const geometrytext = new TextGeometry( 'Rick Pepinillo', {
      font: font,
      size: 2,
      height: 0.5,
      curveSegments: 3,
      bevelThickness: 0.5,
      bevelSize: 0.2,
      bevelEnabled: true
    } );

    var textMaterial = new THREE.MeshNormalMaterial({ color: 0x7EF35C, specular: 0xffffff });

    var texto1 = new THREE.Mesh( geometrytext, textMaterial );
    texto1.position.y=15.5;
    texto1.position.x=-48;
    texto1.position.z=55;
    texto1.scale.set(1.5,1.5,1.5);
    texto1.rotation.y =Math.PI/2;

    texto1.receiveShadow = false;

    scene.add(texto1);

  } );

}
   