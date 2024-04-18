import * as GSPlat from 'gsplat';
import {Camera, Scene, WebGLRenderer, OrbitControls, PLYLoader } from "gsplat";

// const PATH_TO_PLY = './assets/KyryloMasaltsev.ply';
const PATH_TO_PLY = './assets/B406.ply';

export const initGSPlat = async () => {
    const scene = new Scene();
    const camera = new Camera();
    const renderer = new WebGLRenderer();
    const controls = new OrbitControls(camera, renderer.canvas);

    await PLYLoader.LoadAsync(PATH_TO_PLY, scene, (progress) => console.log(progress * 100 + '%'));

    const frame  = () => {
        controls.update();
        renderer.render(scene, camera);

        requestAnimationFrame(frame);
    }

    requestAnimationFrame(frame);
}