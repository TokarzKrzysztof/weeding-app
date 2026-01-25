import { AxiosError } from 'axios';
import { useMutation, UseMutationOptions, useQuery, UseQueryOptions } from 'react-query';
import axios from 'src/config/axios-config';
import { FoldersTree } from 'src/models/admin/folder';
import { Image } from 'src/models/admin/image';
import { environment } from 'src/utils/environment-utils';
import {
  genericUseMutationMethods,
  genericUseQueryMethods
} from 'src/utils/types/generic-query-methods';
import { HttpErrorData } from 'src/utils/types/http-error-data';

function createFormData(images: Image[]): FormData {
  const formData = new FormData();

  images.forEach((item, index) => {
    Object.entries(item).forEach(([key, value]) => {
      if (value !== undefined && value !== null) {
        formData.append(`data[${index}].${key}`, value);
      }
    });
  });

  return formData;
}

const baseUrl = `${environment.apiUrl}/Folder`;

export const useGetFoldersTree = (
  options?: UseQueryOptions<FoldersTree, AxiosError<HttpErrorData>>
) => {
  const query = useQuery({
    queryKey: 'GetFoldersTree',
    queryFn: () => axios.get(`${baseUrl}/GetFoldersTree`),
    ...options,
  });

  return genericUseQueryMethods('foldersTree', query);
};

export const useEditImages = (
  options?: UseMutationOptions<
    void,
    AxiosError<HttpErrorData>,
    { images: Image[]; sectionId: string }
  >
) => {
  const mutation = useMutation({
    mutationFn: ({ images, sectionId }) => {
      const formData = createFormData(images);
      const params = { sectionId };

      return axios.put(`${baseUrl}/EditImages`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
        params,
      });
    },
    ...options,
  });

  return genericUseMutationMethods('editImages', mutation);
};
