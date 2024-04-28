export const RENDER_PROPERTY = 'stop-rendering';

export const setStopRenderModel = (canvas: HTMLCanvasElement): void => {
  canvas.setAttribute(RENDER_PROPERTY, 'true');
};

export const setStartRenderModel = (canvas: HTMLCanvasElement): void => {
  canvas.setAttribute(RENDER_PROPERTY, 'false');
};

export const isRenderingStopped = (canvas: HTMLCanvasElement): boolean => {
  return canvas.getAttribute(RENDER_PROPERTY) === 'true';
};
