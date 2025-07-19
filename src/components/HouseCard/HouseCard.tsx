import React, { FC } from 'react';
import './HouseCard.css';
import Image from 'next/image';
import { IHouse } from '@/utils/types/house.types';

const HouseCard: FC<IHouse> = ({ ...house }) => {
  return (
    <div className="house-card">
      <img
        src={house.images[0] || '/images/eg-villa.jpg'}
        width={'100%'}
        style={{ aspectRatio: 1, borderRadius: '16px' }}
      />
      <h3>{house.titre}. Hamdani Wassim</h3>
      <div className="footer">
        <h4>{house.region}</h4>
        <button>30 Clients potentiels</button>
      </div>
    </div>
  );
};

export default HouseCard;
