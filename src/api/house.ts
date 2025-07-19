import { IHouse, IHouseForm } from '@/utils/types/house.types';
import { client } from './config';

export const createHouse = async (house: IHouseForm): Promise<any> => {
  const formData = new FormData();

  // Assuming house.photos contains File objects from <input type="file" multiple>
  if (house.photos && house.photos.length > 0) {
    house.photos.forEach((file: File, index: number) => {
      console.log('File type:', file.type); // Should log image/jpeg, image/png, etc.
      formData.append(
        'images',
        file,
        `image-${index}.${file.name.split('.').pop()}`
      );
    });
  }

  // Rest of your code to append other fields
  formData.append('nombreLits', house.lits.toString());
  formData.append('nombreSallesDeBain', house.sdb.toString());
  formData.append('nombreCuisine', house.cuisine.toString());
  formData.append('wifi', house.options.includes('wifi') ? 'true' : 'false');
  formData.append(
    'television',
    house.options.includes('television') ? 'true' : 'false'
  );
  formData.append(
    'laveLinge',
    house.options.includes('lave linge') ? 'true' : 'false'
  );
  formData.append(
    'parking',
    house.options.includes('parking') ? 'true' : 'false'
  );
  formData.append(
    'climatisation',
    house.options.includes('climatisation') ? 'true' : 'false'
  );
  formData.append(
    'chauffage',
    house.options.includes('chauffage') ? 'true' : 'false'
  );
  formData.append('titre', house.titre.toString());
  formData.append('description', house.desc.toString());
  formData.append('region', house.localisation.toString());
  const details = {
    PropertyType: house.type,
    Latitude: house.coordinates[0] ?? 0,
    Longitude: house.coordinates[1] ?? 0,
    Area: house.superficie,
    Rooms: house.chambres,
    Price: house.price,
  };
  formData.append('details', JSON.stringify(details));
  formData.append('agencyId', '687ad5afb134148fddb99a64');
  console.log(formData);
  const { data } = await client.post<any>('/houses', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};

export const getHouseById = async (id: string): Promise<any> => {
  const { data } = await client.get<{ data: IHouse }>(
    `/houses/myhouse/${id}?agencyId=687ad5afb134148fddb99a64`
  );
  return data.data;
};
