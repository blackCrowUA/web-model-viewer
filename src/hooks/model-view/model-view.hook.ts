import { useContextSafely } from '../../utils/context/use-context-safely.util.ts';

import { ModelViewContext, ModelViewContextProperties } from '../../context/model-view/model-view.context.tsx';

export const useModelView = (): ModelViewContextProperties => {
  const { setRenderer, renderer } = useContextSafely(ModelViewContext);
  return { setRenderer, renderer };
};
