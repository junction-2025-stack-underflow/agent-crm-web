import React from 'react';
import './StatutBadge.css';

const badgeStyles = {
  VIP: {
    background: '#FFF4E5',
    color: '#F5A623',
  },
  Nouveau: {
    background: '#E9FFF0',
    color: '#00C853',
  },
  Régulier: {
    background: '#E5F1FF',
    color: '#2979FF',
  },
  'Black lister': {
    background: '#E0E0E0',
    color: '#212121',
  },
};

const StatutBadge = ({ text }: { text: string }) => {
  const style = badgeStyles[text] || {};
  return (
    <div className="statut-badge" style={{ backgroundColor: style.background }}>
      <span className="dot" style={{ backgroundColor: style.color }} />
      <span
        className="label"
        style={{ color: '#000', fontWeight: 500, fontSize: '13px' }}
      >
        {text}
      </span>
    </div>
  );
};

export default StatutBadge;
