import {Mesh, MeshBasicMaterial, PerspectiveCamera, Points, PointsMaterial, Scene} from "three";
import {getRenderer} from "./renderer";
import {OrbitControls, PLYLoader} from "three/addons";
import {startAnimate} from "./animate";

export const initThree = () => {
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

    const renderer = getRenderer();

    const loader = new PLYLoader();

    const myPlyPATH = './assets/KyryloMasaltsev.ply';

    loader.load('./assets/B406.ply',
(geometry) => {
            console.log(geometry);

            // const material = new PointsMaterial({
            //     color: 0xffffff,
            //     size: 0.001,
            //     // vertexColors: true,
            // });

            // const points = new Points(geometry, material);

            // points.castShadow = true;
            // points.receiveShadow = true;

            // const material = new MeshBasicMaterial();

            const mesh = new Mesh(geometry, new PointsMaterial({ size: 0.001, color: 0xffffff }));

            scene.add(mesh);
        },
(xhr) => {
            console.log((xhr.loaded / xhr.total) * 100 + '% loaded')
        },
(error) => {
            console.log('An error happened', error);
        }
    );

    camera.position.z = 5;
    scene.rotateX(Math.PI);

    const controls = new OrbitControls(camera, renderer.domElement);

    startAnimate(renderer, scene, camera, controls);
}