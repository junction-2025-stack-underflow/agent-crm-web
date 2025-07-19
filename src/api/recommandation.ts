import { client } from './config';

export const getRecommandationByHouse = async (id: string): Promise<any> => {
  const { data } = await client.get<{ data: any }>(
    `/houses/${id}/recommendations`
  );
  return data;
};
