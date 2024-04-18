import { Camera } from 'gsplat';

export const initCameraControl = (camera: Camera): void => cameraControl(camera);

const cameraControl = (camera: Camera): void => {
  console.log('cameraControl', camera);
  // window.addEventListener('keypress', (event) => {
  //   if (event.key === 'w') {
  //     // @ts-ignore
  //     camera.position.z -= 1;
  //   }
  // });
};
