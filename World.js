import { createCamera } from './components/camera.js';
import { createCube } from './components/cube.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';

class World {
  #camera;
  #cube;
  #renderer;
  #scene;
  #resizer;
  constructor(container) {
    this.#camera = createCamera();
    this.#scene = createScene();
    this.#cube = createCube();
    this.#scene.add(this.#cube);
    this.#renderer = createRenderer();
    container.append(this.#renderer.domElement);
    this.#resizer = new Resizer(container, this.#camera, this.#renderer);
    
  }
  render() {
    this.#renderer.render(this.#scene, this.#camera);  // draw a single frame
  }
}  

export { World };

/*
// three.module.js is the core module 
import {
  BoxBufferGeometry,
  Color,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer,
} from 'https://unpkg.com/three@0.119.0/build/three.module.js';

// OrbitControls.js is the camera module 
import { OrbitControls } from 'https://unpkg.com/three@0.119.0/examples/jsm/controls/OrbitControls.js';
import { GLTFLoader } from 'https://unpkg.com/three@0.119.0/examples/jsm/loaders/GLTFLoader.js';


// Get a reference to the container element that will hold our scene
const container = document.querySelector('#scene-container');

// create a Scene
const scene = new Scene();

// Set the scene background color
scene.background = new Color('skyblue');

// camera parameters - viewing frustum parameters 
const fov = 35; // Field of View - how wide the camera's wiev is (in degrees)
const aspect = container.clientWidth / container.clientHeight; // aspect ratio matches the frustum to the scene container element
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane
// Create a camera
const camera = new PerspectiveCamera(fov, aspect, near, far);
// every object is initially created at ( 0, 0, 0 )
// move the camera back so we can view the scene
camera.position.set(0, 0, 10); // x,y,z

// create a BoxBufferGeometry - width=2, height=2, depth=2
const geometry = new BoxBufferGeometry(2, 2, 2); // buffergeometry is newer and faster geometry

// create a default (white) Basic material - defines how the surface of the mesh looks
const material = new MeshBasicMaterial();

// create a cubic Mesh containing the geometry and material
const cube = new Mesh(geometry, material);

// add the mesh to the scene
scene.add(cube);

// create the renderer with default parameters
const renderer = new WebGLRenderer();
// set the renderer to the same size (x,y) as our container element
renderer.setSize(container.clientWidth, container.clientHeight);
// finally, set the pixel ratio so that our scene will look good on HiDPI displays
renderer.setPixelRatio(window.devicePixelRatio);

// domElement is the automatically created <canvas> element by the renderer - add it to the container
container.append(renderer.domElement);

// render, or 'create a still image', of the scene
renderer.render(scene, camera); 

console.log("Hello, Welcome to JavaScript");
*/


