import { Camera, Loader, OrbitControls, Scene, WebGLRenderer } from 'gsplat';

import { initCameraControl } from './camera/camera-control.ts';

// const PATH_TO_PLY = './assets/KyryloMasaltsev.ply';
const PATH_TO_PLY = './assets/B406.splat';
// const PATH_TO_SPLAT = './assets/KyryloMasaltsev.splat';

export const initGSPlat = async (): Promise<void> => {
  const scene = new Scene();
  const camera = new Camera();
  const renderer = new WebGLRenderer();
  const controls = new OrbitControls(camera, renderer.canvas);

  // await PLYLoader.LoadAsync(PATH_TO_SPLAT, scene, (progress) => console.log(`${progress * 100}%`));
  await Loader.LoadAsync(PATH_TO_PLY, scene, (progress) => console.log(`${progress * 100}%`));

  const frame = (): void => {
    controls.update();
    renderer.render(scene, camera);

    requestAnimationFrame(frame);
  };

  initCameraControl(camera);

  requestAnimationFrame(frame);
};
