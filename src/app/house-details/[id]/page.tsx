'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import Title from '@/components/Title/Title';
import './HouseInfo.css';
import egImg from '../../../../public/images/eg-img.jpg';
import { LuSquareParking } from 'react-icons/lu';
import Table from '@/components/Table/Table';

const HouseDetails = () => {
  const params = useParams();
  const { id } = params;

  const tableData = [
    {
      client: 'Lalout Mehdi',
      telephone: '+213 554 95 93 57',
      budget: '150.000.000,00 DZD',
      statut: 'VIP',
      compatibilite: '90%',
    },
    {
      client: 'Lalout Mehdi',
      telephone: '+213 554 95 93 57',
      budget: '120.000.000,00 DZD',
      statut: 'Nouveau',
      compatibilite: '89%',
    },
    {
      client: 'Lalout Mehdi',
      telephone: '+213 554 95 93 57',
      budget: '150.000.000,00 DZD',
      statut: 'Régulier',
      compatibilite: '70%',
    },
    {
      client: 'Lalout Mehdi',
      telephone: '+213 554 95 93 57',
      budget: '150.000.000,00 DZD',
      statut: 'Nouveau',
      compatibilite: '65%',
    },
    {
      client: 'Lalout Mehdi',
      telephone: '+213 554 95 93 57',
      budget: '150.000.000,00 DZD',
      statut: 'Régulier',
      compatibilite: '65%',
    },
    {
      client: 'Lalout Mehdi',
      telephone: '+213 554 95 93 57',
      budget: '150.000.000,00 DZD',
      statut: 'Black lister',
      compatibilite: '62%',
    },
  ];

  const headers = ['Client', 'Téléphone', 'Budget', 'Statut', 'Compatibilité '];

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      }}
      className="house-info"
    >
      <Title>Titre de la publication</Title>
      <h4>Cheraga - Alger</h4>
      <div className="grid-galery">
        <img src="/images/eg-img.jpg" className="grid-img" />
        <img src="/images/eg-img.jpg" className="grid-img" />
        <img src="/images/eg-img.jpg" className="grid-img" />
        <img src="/images/eg-img.jpg" className="grid-img" />
        <img src="/images/eg-img.jpg" className="grid-img" />
      </div>
      <Title>Logement entier : Villa avec piscines </Title>
      <h6 style={{ fontWeight: 300, fontSize: 15 }}>Nom du propriétaire</h6>
      <h5 style={{ fontWeight: 300, fontSize: '18px' }}>
        Bienvenue dans le logement Cosy, situé à proximité des commerces et de
        la gare Via le tram 1 station qui vous ramène directement a l'intérieur
        de la gare RER B Vous avez aussi un espace de rangement avec cintres et
        fer à repasser. Vous avez tous les ustensiles nécessaires pour bien
        cuisiner et manger à deux ou trois. Vous avez également à disposition
        une machine à café et une bouilloire , vous avez bien sûr accès à
        quelques sachets de thé et quelques rosettes de café et bien sûr des
        bouteilles d'eau. Le logement est parfait pour trois personnes, venez
        profiter du logement zen qui est proche de Paris.
      </h5>
      <button>Lire la suite</button>
      <div style={{ width: '100%', backgroundColor: '#E4E4E4', height: 0.3 }} />
      <Title>Ce que propose le logement</Title>
      <div className="grid-logement-info">
        <div className="logement-info">
          <LuSquareParking size={20} />
          <p>Parking gratuit sur place</p>
        </div>
        <div className="logement-info">
          <LuSquareParking size={20} />
          <p>Parking gratuit sur place</p>
        </div>
        <div className="logement-info">
          <LuSquareParking size={20} />
          <p>Parking gratuit sur place</p>
        </div>
        <div className="logement-info">
          <LuSquareParking size={20} />
          <p>Parking gratuit sur place</p>
        </div>
        <div className="logement-info">
          <LuSquareParking size={20} />
          <p>Parking gratuit sur place</p>
        </div>
        <div className="logement-info">
          <LuSquareParking size={20} />
          <p>Parking gratuit sur place</p>
        </div>
      </div>
      <h2 className="client">Client potentiel </h2>
      <Table
        tr={headers}
        td={tableData.map((row) => [
          { text: row.client },
          { text: row.telephone },
          { text: row.budget },
          { text: row.statut },
          { text: row.compatibilite },
        ])}
        count={1}
        page={1}
      />
    </div>
  );
};

export default HouseDetails;
