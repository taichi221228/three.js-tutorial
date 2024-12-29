import "./style.css";
import * as THREE from "three";

const { width, height } = {
	width: 960,
	height: 540,
};

const { app, canvas } = (() => {
	const app = document.getElementById("app");

	return { app, canvas: app.querySelector("canvas") };
})();

const renderer = new THREE.WebGLRenderer({ canvas });

renderer.setSize(width, height);
renderer.setPixelRatio(window.devicePixelRatio);

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(45, width / height, 1);
camera.position.set(0, 0, 1000);

const geometry = new THREE.BoxGeometry(200, 200, 200);
const material = new THREE.MeshStandardMaterial({ color: 0xffd700 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const light = new THREE.DirectionalLight(0xffffff);
light.position.set(1, 1, 1);
scene.add(light);

renderer.render(scene, camera);

tick();

function tick() {
	requestAnimationFrame(tick);

	box.rotation.x += 0.01;
	box.rotation.y += 0.01;

	renderer.render(scene, camera);
}
