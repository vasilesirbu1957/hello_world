import { Color, Scene } from 'https://unpkg.com/three@0.119.0/build/three.module.js';

function createScene() {
  const scene = new Scene();

  // scene.background = new Color('skyblue');
  scene.background = new Color('red');
  return scene;
}

export { createScene };