import axios, { AxiosResponse } from 'axios';

const DEFAULT_SPLAT_MODEL_URL =
  'https://huggingface.co/datasets/blackcrow228/test/resolve/main/KyryloMasaltsev.splat?download=true';

const DEFAULT_SPLAT_MODEL_LUMA_URL =
  'https://huggingface.co/datasets/blackcrow228/test/resolve/main/KyryloMasaltsevLuma.splat?download=true';

export const getDefaultSplatModelApi = async (): Promise<AxiosResponse<Blob>> => {
  return axios.get<Blob>(DEFAULT_SPLAT_MODEL_URL, { responseType: 'blob' });
};

export const getDefaultSplatModelLumaApi = async (): Promise<AxiosResponse<Blob>> => {
  return axios.get<Blob>(DEFAULT_SPLAT_MODEL_LUMA_URL, { responseType: 'blob' });
};
