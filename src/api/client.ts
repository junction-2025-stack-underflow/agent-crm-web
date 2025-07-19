import { client } from './config';

export const getClientById = async (id: string): Promise<any> => {
  const { data } = await client.get<{ data: any }>(
    `/clients/myclient/${id}/687ad5afb134148fddb99a64`
  );
  return data.data;
};

export const getAllClients = async (): Promise<any> => {
  const { data } = await client.get<{ data: any }>(
    `/clients/myclients/687ad5afb134148fddb99a64`
  );
  return data.data;
};
