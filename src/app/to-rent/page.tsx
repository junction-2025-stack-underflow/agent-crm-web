'use client';
import Title from '@/components/Title/Title';
import React from 'react';
import { FiBell, FiGrid, FiMenu, FiPlus } from 'react-icons/fi';
import HouseCard from '@/components/HouseCard/HouseCard';
import { useRouter } from 'next/navigation';

const ToRent = () => {
  const router = useRouter();

  const handleAddHouse = () => {
    router.push('/add');
  };

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '30px',
      }}
    >
      <div className="sale-header">
        <Title>Logements disponibles</Title>
        <div className="actions-container">
          <button className="action-btn">
            <FiGrid size={20} />
          </button>
          <button className="action-btn" onClick={handleAddHouse}>
            <FiPlus size={20} />
          </button>
        </div>
      </div>
      <div className="houses-container">
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
        <HouseCard />
      </div>
    </div>
  );
};

export default ToRent;
