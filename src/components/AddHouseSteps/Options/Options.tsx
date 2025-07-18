import React from 'react';
import './Options.css';
import ChoiceCard from '@/components/ChoiceCard/ChoiceCard';
import { useFormContext } from 'react-hook-form';
const Options = () => {
  const { watch, setValue } = useFormContext();
  const selectedOptions = watch('options');
  const optionsDispos = [
    'Wifi',
    'TV',
    'Parking',
    'Lave linge',
    'Climatisation',
    'Chauffage',
  ];
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      }}
    >
      <h3>Qu'en est-il de ces équipements préférés des voyageurs ?</h3>
      <div className="houses-container">
        {optionsDispos.map((option, index) => (
          <ChoiceCard
            key={index}
            type={option}
            onClick={() => {
              selectedOptions.includes(option.toLowerCase())
                ? setValue(
                    'options',
                    selectedOptions.filter(
                      (op: string) => op !== option.toLowerCase()
                    )
                  )
                : setValue('options', [
                    ...selectedOptions,
                    option.toLowerCase(),
                  ]);
            }}
            selected={selectedOptions.includes(option.toLowerCase())}
          />
        ))}
      </div>
    </div>
  );
};

export default Options;
