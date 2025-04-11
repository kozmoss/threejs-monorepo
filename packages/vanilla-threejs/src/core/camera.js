import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.160.1/build/three.module.js';

export function createCamera() {
    const aspect = window.innerHeight / window.innerHeight;
    const camera = new THREE.PerspectiveCamera(75, aspect, 0.1, 100);
    camera.position.z = 2;
    return camera;

}