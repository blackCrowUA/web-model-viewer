import { Camera, OrbitControls, Scene, WebGLRenderer } from 'gsplat';

import { isRenderingStopped, setStartRenderModel } from '../canvas-attributes/canvas-attributes.util.ts';

//This method is not working on phone browsers
// export const startModelRendering = (
//   renderer: WebGLRenderer,
//   controls: OrbitControls,
//   scene: Scene,
//   camera: Camera
// ): void => {
//   const rendererCanvas = renderer.canvas;
//   setStartRenderModel(rendererCanvas);
//
//   const interval = setInterval(() => {
//     if (isRenderingStopped(rendererCanvas)) {
//       console.log('clearing interval');
//       clearInterval(interval);
//       controls.dispose();
//       renderer.dispose();
//       return;
//     }
//
//     controls.update();
//     renderer.render(scene, camera);
//   }, ONE_SECOND / FPS);
// };

export const startModelRendering = (
  renderer: WebGLRenderer,
  controls: OrbitControls,
  scene: Scene,
  camera: Camera
): void => {
  const rendererCanvas = renderer.canvas;
  setStartRenderModel(rendererCanvas);

  const render = (): void => {
    if (isRenderingStopped(rendererCanvas)) {
      controls.dispose();
      renderer.dispose();
      return;
    }

    controls.update();
    renderer.render(scene, camera);

    requestAnimationFrame(render);
  };

  render();
};
