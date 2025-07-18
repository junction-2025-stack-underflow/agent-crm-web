import React from 'react';
import { LuHouse } from 'react-icons/lu';
import './ChoiceCrd.css';
const ChoiceCard = () => {
  return (
    <button className="choice-card">
      <LuHouse size={30} />
      <h4>Appartement</h4>
    </button>
  );
};

export default ChoiceCard;
