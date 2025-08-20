const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas: document.getElementById("three-canvas") });

renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.z = 5;

const loader = new THREE.GLTFLoader();
loader.load("https://cdn.jsdelivr.net/gh/KhronosGroup/glTF-Sample-Models@master/2.0/Cube/glTF/Cube.gltf", function(gltf) {
  scene.add(gltf.scene);
  animate();
});

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}