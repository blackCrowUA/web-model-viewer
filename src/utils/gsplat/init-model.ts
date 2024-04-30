import { Camera, OrbitControls, Scene, Splat, WebGLRenderer } from 'gsplat';

import { setCameraPositionToModelCenter } from './camera/camera-position.util.ts';
import { initCameraSetting } from './controls/controls.util.ts';
import { startModelRendering } from './model-rendering.util.ts';

export const initModel = (
  renderer: WebGLRenderer,
  camera: Camera,
  controls: OrbitControls,
  scene: Scene,
  model: Splat
): void => {
  initCameraSetting(controls);

  startModelRendering(renderer, controls, scene, camera);

  setCameraPositionToModelCenter(controls, camera);

  setCameraPositionToModelCenter(controls, camera);
};
