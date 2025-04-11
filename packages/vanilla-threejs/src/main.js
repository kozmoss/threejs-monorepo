import { createRenderer } from './core/renderer.js';
import { createCamera } from './core/camera.js';


export function run(createSceneFn) {
  const canvas = document.querySelector('#c');
  const renderer = createRenderer(canvas);
  const camera = createCamera();
  const scene = createSceneFn();

  function render(time) {
    time *= 0.001;
    if (scene.update) scene.update(time); 
    renderer.render(scene, camera);
    requestAnimationFrame(render);
  }

  requestAnimationFrame(render);
}
