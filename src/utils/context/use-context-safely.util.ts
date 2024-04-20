import { Context, useContext } from 'react';

import isNil from 'lodash.isnil';

export const useContextSafely = <T>(context: Context<T>): T => {
  const value = useContext(context);

  if (isNil(value)) {
    throw new Error(`${context.displayName} must be inside ${context.displayName}.Provider`);
  }

  return value;
};
