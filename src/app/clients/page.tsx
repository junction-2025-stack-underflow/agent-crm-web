'use client';
import HouseCard from '@/components/HouseCard/HouseCard';
import Title from '@/components/Title/Title';
import React, { useEffect, useState } from 'react';
import './Client.css';
import { FiPlus } from 'react-icons/fi';
import Table from '@/components/Table/Table';
import { useRouter } from 'next/navigation';
import { getAllClients } from '@/api/client';

const Clients = () => {
  const router = useRouter();
  const [clients, setClients] = useState<any[]>([]);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    const response = await getAllClients();
    setClients(response.clients);
    console.log(response);
  };

  const tableData = clients.map((client, index) => ({
    fullName: client.fullName,
    telephone: client.telephone,
    budget: '150.000.000,00 DZD', // Valeur temporaire
    statut: ['VIP', 'Régulier', 'Nouveau', 'Black lister'][index % 4], // Cycle des statuts pour exemple
  }));

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
          { text: row.fullName },
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
