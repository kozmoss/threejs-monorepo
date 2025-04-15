// lib/modelLoader.js
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader'

// GLTF/GLB yükleyici (draco sıkıştırma destekli)
export const loadGLTF = (url) => {
  return new Promise((resolve, reject) => {
    const loader = new GLTFLoader()
    
    // Draco sıkıştırma desteği ekle - daha hızlı yükleme için
    const dracoLoader = new DRACOLoader()
    dracoLoader.setDecoderPath('/draco/') // Bu dosyayı public klasörüne eklemelisiniz
    loader.setDRACOLoader(dracoLoader)
    
    loader.load(
      url,
      (gltf) => resolve(gltf),
      (xhr) => console.log((xhr.loaded / xhr.total * 100) + '% yüklendi'),
      (error) => reject(error)
    )
  })
}

// OBJ formatı için yükleyici
export const loadOBJ = (url) => {
  return new Promise((resolve, reject) => {
    const loader = new OBJLoader()
    
    loader.load(
      url,
      (obj) => resolve(obj),
      (xhr) => console.log((xhr.loaded / xhr.total * 100) + '% yüklendi'),
      (error) => reject(error)
    )
  })
}

// FBX formatı için yükleyici
export const loadFBX = (url) => {
  return new Promise((resolve, reject) => {
    const loader = new FBXLoader()
    
    loader.load(
      url,
      (fbx) => resolve(fbx),
      (xhr) => console.log((xhr.loaded / xhr.total * 100) + '% yüklendi'),
      (error) => reject(error)
    )
  })
}