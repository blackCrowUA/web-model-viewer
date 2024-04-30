import { Camera, OrbitControls, Vector3 } from 'gsplat';

export const setCameraPositionToModelCenter = (controls: OrbitControls, camera: Camera): void => {
  controls.setCameraTarget(new Vector3(0, 0, 0));

  camera.applyPosition();
};
