'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Title from '@/components/Title/Title';
import './HouseInfo.css';
import {
  FaWifi,
  FaTv,
  FaSnowflake,
  FaParking,
  FaSoap,
  FaRadiationAlt,
} from 'react-icons/fa';
import { LuSquareParking } from 'react-icons/lu';
import Table from '@/components/Table/Table';
import { IHouse } from '@/utils/types/house.types';
import { getHouseById } from '@/api/house';
import Loader from '@/components/Loader/Loader';
import { getRecommandationByHouse } from '@/api/recommandation';
import { getClientById } from '@/api/client';

const HouseDetails = () => {
  const params = useParams();
  const ApiUrl = process.env.NEXT_PUBLIC_IMG_BASE_URL;
  const { id } = useParams<{ id: string }>();
  const [house, setHouse] = useState<IHouse | null>(null);
  const [tableFetchedData, setTableFetchedData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [showFullDesc, setShowFullDesc] = useState(false);

  const getDescriptionLines = (text: string) => text.split('\n');
  const descLines = getDescriptionLines(house?.description ?? '');

  const amenities = [
    { key: 'wifi', label: 'Wi-Fi gratuit', icon: <FaWifi size={20} /> },
    {
      key: 'climatisation',
      label: 'Climatisation',
      icon: <FaSnowflake size={20} />,
    },
    { key: 'laveLinge', label: 'Lave-linge', icon: <FaSoap size={20} /> },
    { key: 'television', label: 'Télévision', icon: <FaTv size={20} /> },
    {
      key: 'chauffage',
      label: 'Chauffage',
      icon: <FaRadiationAlt size={20} />,
    },
    {
      key: 'parking',
      label: 'Parking gratuit sur place',
      icon: <FaParking size={20} />,
    },
  ];

  const images = house?.images || [];
  const maxImages = 5;

  const displayedImages = [...images].slice(0, maxImages);
  const missingCount = maxImages - displayedImages.length;

  useEffect(() => {
    if (id) {
      fetchData();
    }
  }, [id]);

  const fetchData = async () => {
    await getHouseById(id)
      .then(async (data) => {
        console.log(data);
        setHouse(data.house);
        getRecommandation(data.house.details.ID);
      })
      .catch((err) => {
        console.error('Failed to load house:', err);
        // Optional: Handle errors or show fallback
      })
      .finally(() => setLoading(false));
  };

  const getRecommandation = async (houseId: string) => {
    try {
      const response = await getRecommandationByHouse(houseId);
      const matches = response?.matches || [];

      // Pour chaque client_id, on récupère les infos
      const clientPromises = matches.map(async (match: any) => {
        const clientDetails = await getClientById(match.client_id);

        return {
          fullName: clientDetails.fullName,
          telephone: clientDetails.telephone,
          compatibilite: `${Math.round((1 - match.distance) * 100)}%`,
          budget: '150.000.000,00 DZD', // valeur fictive
          statut: ['VIP', 'Régulier', 'Nouveau', 'Black lister'][
            Math.floor(Math.random() * 4)
          ], // aléatoire
        };
      });

      const completedClients = await Promise.all(clientPromises);
      console.log(completedClients);
      setTableFetchedData(completedClients);
    } catch (error) {
      console.error('Erreur lors des recommandations :', error);
    }
  };

  if (loading) return <Loader />;
  if (!house) return <div>Maison introuvable ou erreur d’accès.</div>;

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
      <Title>{house.titre}</Title>
      <h4>{house.region}</h4>
      <div className="grid-galery">
        {(house.images || []).slice(0, 5).map((img, index) => {
          const fixedUrl = `${
            process.env.NEXT_PUBLIC_IMG_BASE_URL
          }${img.replace(/\\/g, '/')}`;
          return (
            <img
              key={index}
              src={fixedUrl}
              className="grid-img"
              alt={`image-${index}`}
            />
          );
        })}

        {Array.from({ length: missingCount }).map((_, i) => (
          <img src="/images/eg-img.jpg" className="grid-img" key={i} />
        ))}
      </div>
      <h6 style={{ fontWeight: 300, fontSize: 15 }}>Wassim pro</h6>
      <h5 style={{ fontWeight: 300, fontSize: '18px', whiteSpace: 'pre-line' }}>
        {showFullDesc || descLines.length <= 5
          ? house.description
          : descLines.slice(0, 5).join('\n')}
      </h5>

      {descLines.length > 5 && (
        <button
          onClick={() => setShowFullDesc(!showFullDesc)}
          style={{ marginBottom: '10px' }}
        >
          {showFullDesc ? 'Réduire' : 'Lire la suite'}
        </button>
      )}
      <div style={{ width: '100%', backgroundColor: '#E4E4E4', height: 0.3 }} />
      <Title>Ce que propose le logement</Title>
      <div className="grid-logement-info">
        {amenities.map((item) => {
          // @ts-ignore : on suppose que les clés correspondent aux props du house
          if (house[item.key]) {
            return (
              <div key={item.key} className="logement-info">
                {item.icon}
                <p>{item.label}</p>
              </div>
            );
          }
          return null;
        })}
      </div>
      <h2 className="client">Client potentiel </h2>
      <Table
        tr={headers}
        td={(tableFetchedData || []).map((row: any) => [
          { text: row.fullName },
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
