import HouseCard from '@/components/HouseCard/HouseCard';
import Title from '@/components/Title/Title';
import React from 'react';
import './ClientDetails.css';
const ClientDetails = () => {
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      }}
      className="client-page"
    >
      <Title>Profile client </Title>
      <div className="client-info">
        <div className="initials">
          <Title>ML</Title>
        </div>
        <Title>Mehdi Lalout</Title>
      </div>

      <Title>Maisons correspondantes </Title>
      <div className="besoins-user">
        <div className="top-part">
          <div className="input-group">
            <label htmlFor="title">Téléphone :</label>
            <p className="input-title"></p>
          </div>
          <div className="input-group">
            <label htmlFor="title">Email :</label>
            <p className="input-title"></p>
          </div>
          <div className="input-group">
            <label htmlFor="title">Budget :</label>
            <p className="input-title"></p>
          </div>
        </div>
        <div className="bottom-part">
          <div className="input-group">
            <label htmlFor="title">Besoin :</label>
            <p className="input-title"></p>
          </div>
          <div className="input-group">
            <label htmlFor="title">Région :</label>
            <p className="input-title"></p>
          </div>
          <div className="input-group">
            <label htmlFor="title">Superficie :</label>
            <p className="input-title"></p>
          </div>
          <div className="input-group">
            <label htmlFor="title">Nombre de pièces : </label>
            <p className="input-title"></p>
          </div>
          <div className="input-group">
            <label htmlFor="title">Statue :</label>
            <p className="input-title"></p>
          </div>
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

export default ClientDetails;
