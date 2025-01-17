import "./style.css";
import * as THREE from "three";

const { width, height } = { width: 1472, height: 864 };

const { canvas } = (() => {
	const app = document.getElementById("app");
	return { app, canvas: app.querySelector("canvas") };
})();

const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(width, height);
renderer.setPixelRatio(window.devicePixelRatio);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(80, width / height, 1);
camera.position.set(0, 0, 1000);

const geometry = new THREE.BoxGeometry(200, 200, 200);
const material = new THREE.MeshMatcapMaterial();
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const light = new THREE.DirectionalLight(0xffffff);
light.position.set(1, 1, 1);
scene.add(light);

renderer.render(scene, camera);

tick();

function tick() {
	requestAnimationFrame(tick);
	mesh.rotation.x += 0.01;
	mesh.rotation.y += 0.01;
	renderer.render(scene, camera);
}
