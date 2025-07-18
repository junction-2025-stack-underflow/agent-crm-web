import HouseCard from '@/components/HouseCard/HouseCard';
import Title from '@/components/Title/Title';
import React from 'react';
import './Client.css';
import { FiPlus } from 'react-icons/fi';
import Table from '@/components/Table/Table';

const Clients = () => {
  const tableData = [
    {
      client: 'Lalout Mehdi',
      telephone: '+213 554 95 93 57',
      budget: '150.000.000,00 DZD',
      statut: 'VIP',
    },
    {
      client: 'Lalout Mehdi',
      telephone: '+213 554 95 93 57',
      budget: '120.000.000,00 DZD',
      statut: 'Nouveau',
    },
    {
      client: 'Lalout Mehdi',
      telephone: '+213 554 95 93 57',
      budget: '150.000.000,00 DZD',
      statut: 'Régulier',
    },
    {
      client: 'Lalout Mehdi',
      telephone: '+213 554 95 93 57',
      budget: '150.000.000,00 DZD',
      statut: 'Nouveau',
    },
    {
      client: 'Lalout Mehdi',
      telephone: '+213 554 95 93 57',
      budget: '150.000.000,00 DZD',
      statut: 'Régulier',
    },
    {
      client: 'Lalout Mehdi',
      telephone: '+213 554 95 93 57',
      budget: '150.000.000,00 DZD',
      statut: 'Black lister',
    },
  ];

  const headers = ['Client', 'Téléphone', 'Budget', 'Statut', 'Action '];
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
      <div className="sale-header">
        <Title>Liste des clients</Title>
        <div className="actions-container">
          <button className="action-btn">
            <FiPlus size={20} />
          </button>
        </div>
      </div>
      <Table
        tr={headers}
        td={tableData.map((row) => [
          { text: row.client },
          { text: row.telephone },
          { text: row.budget },
          { text: row.statut },
          { text: row.statut },
        ])}
        count={1}
        page={1}
      />
    </div>
  );
};

export default Clients;
