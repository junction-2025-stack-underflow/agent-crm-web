'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [houseData] = useState({
    title: 'Cozy Family Home',
    description: 'A beautiful and spacious house.',
    localization: '123 Main St, City',
    type: 'F4 (4 rooms)',
    beds: '3',
    bathrooms: '2',
    cuisines: '1',
    price: '$300,000',
    options: ['wifi', 'parking', 'tv'],
  });

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <div
        style={{
          width: '50%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 30,
        }}
      >
        <div
          style={{
            width: '100%',
            display: 'grid',
            gridTemplateColumns: 'repeat(2,1fr)',
          }}
        >
          <Image
            src="/images/placeholder-house.png"
            width={300}
            height={300}
            alt="Main picture of the house"
            objectFit="cover"
          />
          <div
            style={{
              height: '100%',
              display: 'flex',
              gap: '20px',
              flexDirection: 'column',
            }}
          >
            <h2>{houseData.title}</h2>
            <p>{houseData.description}</p>
            <p>{houseData.localization}</p>
            <p>{houseData.type}</p>
            <p>{houseData.options}</p>
            <p>Num of beds:{houseData.beds}</p>
            <p>Num of bathrooms:{houseData.bathrooms}</p>
            <p>Num of cuisines:{houseData.cuisines}</p>
            <ul>
              {houseData.options.map((option) => (
                <li>{option}</li>
              ))}
            </ul>
            <h3>{houseData.price}</h3>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: 50,
          }}
        >
          <button
            style={{
              width: 300,
              height: 30,
              backgroundColor: 'green',
              color: 'white',
            }}
          >
            YAAAAY
          </button>
          <button
            style={{
              width: 300,
              height: 30,
              backgroundColor: 'red',
              color: 'white',
            }}
          >
            NO
          </button>
        </div>
      </div>
    </div>
  );
}
