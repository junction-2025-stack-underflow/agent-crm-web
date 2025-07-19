import React from 'react';
import './TypeLogement.css';
import ChoiceCard from '@/components/ChoiceCard/ChoiceCard';
import { useFormContext } from 'react-hook-form';

const TypeLogement = () => {
  const { watch, setValue } = useFormContext();
  const selectedType = watch('type');
  const types = ['House', 'Apartment', 'Villa'];
  return (
    <div className="houses-container">
      {types.map((type: string) => (
        <ChoiceCard
          key={type}
          type={type}
          onClick={() => {
            console.log('type to be given', type);
            setValue('type', type);
          }}
          selected={type === selectedType}
        />
      ))}
    </div>
  );
};

export default TypeLogement;
