import { useQueries, UseQueryResult } from '@tanstack/react-query';

import {
  getDefaultSplatModelApi,
  getDefaultSplatModelLumaApi,
} from '../../api/default-splat-model/get-default-splat-model.api.ts';
import { FileObject } from '../../types/file';

interface GetDefaultFileResponse {
  isLoading: boolean;
  isError: boolean;
  data: FileObject[];
}

export const useGetDefaultFile = (): GetDefaultFileResponse => {
  const result = useQueries({
    queries: [
      {
        queryKey: ['default-files'],
        queryFn: () =>
          getDefaultSplatModelApi().then((response) => {
            return new File([response.data], 'KyryloMasaltsev.splat', { lastModified: Date.now(), type: 'splat' });
          }),
      },
      {
        queryKey: ['default-files-luma'],
        queryFn: () =>
          getDefaultSplatModelLumaApi().then((response) => {
            return new File([response.data], 'KyryloMasaltsevLuma.splat', { lastModified: Date.now(), type: 'splat' });
          }),
      },
    ],
  });

  const isLoading = result.some((res: UseQueryResult) => res.isLoading);
  const isError = result.some((res: UseQueryResult) => res.isError);
  const data = result.map((res: UseQueryResult) => res.data).filter((res) => res) as FileObject[];

  return { isLoading, isError, data };
};
