import React from 'react';
import './TypeLogement.css';
import ChoiceCard from '@/components/ChoiceCard/ChoiceCard';
import { useFormContext } from 'react-hook-form';

const TypeLogement = () => {
  const { watch, setValue } = useFormContext();
  const selectedType = watch('type');
  const types = ['Maison', 'Appartement', 'Villa'];
  return (
    <div className="houses-container">
      {types.map((type: string) => (
        <ChoiceCard
          key={type}
          type={type}
          onClick={() => {
            setValue('type', type.toLowerCase());
          }}
          selected={type.toLowerCase() === selectedType}
        />
      ))}
    </div>
  );
};

export default TypeLogement;
