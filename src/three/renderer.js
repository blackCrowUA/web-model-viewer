import {WebGLRenderer} from "three";

export const getRenderer = () => {
    const renderer = new WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    return renderer;
}