import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160.1/build/three.module.js";

export function createCubeScene() {
  const scene = new THREE.Scene();

  const geometry = new THREE.BoxGeometry(1, 1, 1);
  const material = new THREE.MeshPhongMaterial({ color: 0x44aa88 });

  const color = 0xffffff;
  const intensity = 3;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);

  const cube = new THREE.Mesh(geometry, material);

  scene.add(cube);

  scene.update = (time) => {
    cube.rotation.x = time;
    cube.rotation.y = time;
  };

  return scene;
}
