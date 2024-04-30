import { OrbitControls } from 'gsplat';

export const initCameraSetting = (controls: OrbitControls): void => {
  controls.zoomSpeed = 0.1;
  controls.panSpeed = 0.5;
  controls.orbitSpeed = 0.5;
};
