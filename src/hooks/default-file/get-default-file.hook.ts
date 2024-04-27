import { useQuery, UseQueryResult } from '@tanstack/react-query';

import { getDefaultSplatModelApi } from '../../api/default-splat-model/get-default-splat-model.api.ts';
import { FileObject } from '../../types/file';

export const useGetDefaultFile = (): UseQueryResult<FileObject> => {
  return useQuery({
    queryKey: ['default-file'],
    queryFn: () =>
      getDefaultSplatModelApi().then((response) => {
        return new File([response.data], 'KyryloMasaltsev.splat', { lastModified: Date.now(), type: 'splat' });
      }),
  });
};
