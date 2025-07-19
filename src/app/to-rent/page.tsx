'use client';
import Title from '@/components/Title/Title';
import React, { useEffect, useState } from 'react';
import { FiBell, FiGrid, FiMenu, FiPlus } from 'react-icons/fi';
import HouseCard from '@/components/HouseCard/HouseCard';
import { useRouter } from 'next/navigation';
import { getAllHouses } from '@/api/house';
import axios from 'axios';
import { IHouse } from '@/utils/types/house.types';
import './Torent.css';
const ToRent = () => {
  const router = useRouter();
  const [houses, setHouses] = useState<IHouse[]>([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const response = await getAllHouses();
    setHouses(response.houses);
    console.log(response);
  };

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
        {houses.map((house: IHouse) => (
          <HouseCard {...house} />
        ))}
      </div>
    </div>
  );
};

export default ToRent;
