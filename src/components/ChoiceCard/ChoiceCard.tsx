import React from 'react';
import { LuHouse } from 'react-icons/lu';
import './ChoiceCrd.css';

interface ChoiceCardProps {
  type: string;
  onClick?: () => void;
  selected?: boolean;
  className?: string;
  style?: React.CSSProperties;
  fontSize?: number;
  size?: number; // icon size
}

const ChoiceCard: React.FC<ChoiceCardProps> = ({
  type,
  onClick,
  selected,
  className = '',
  style = {},
  fontSize,
  size,
}) => {
  return (
    <button
      className={`choice-card ${selected ? 'selected' : ''} ${className}`}
      style={{
        ...style,
      }}
      onClick={onClick}
    >
      <LuHouse size={size ?? 30} style={{ flexShrink: 0 }} />
      <h4 style={{ ...(fontSize ? { fontSize: `${fontSize}px` } : {}) }}>
        {type}
      </h4>
    </button>
  );
};

export default ChoiceCard;
