import React from 'react';
import { LuHouse } from 'react-icons/lu';
import './ChoiceCrd.css';

interface ChoiceCardProps {
  type: string;
  onClick: () => void;
  selected: boolean;
}

const ChoiceCard: React.FC<ChoiceCardProps> = ({ type, onClick, selected }) => {
  return (
    <button
      className={`choice-card ${selected ? 'selected' : ''}`}
      onClick={onClick}
    >
      <LuHouse size={30} />
      <h4>{type}</h4>
    </button>
  );
};

export default ChoiceCard;
