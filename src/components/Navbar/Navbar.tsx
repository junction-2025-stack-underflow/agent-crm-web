'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiBell, FiMenu, FiSearch, FiX } from 'react-icons/fi';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useStepper from '@/store/StepperStore';
import { Drawer, Box, IconButton } from '@mui/material';
import './Navbar.css';
import ChoiceCard from '../ChoiceCard/ChoiceCard';

export default function Navbar() {
  const pathname = usePathname();
  const { currentStep } = useStepper();
  const [open, setOpen] = useState(false);

  const toggleDrawer = (state: boolean) => () => {
    setOpen(state);
  };

  const drawerChoices = [
    'Maison',
    'Villa',
    'Appartement',
    'Piscine',
    'Plage',
    'Calme',
    'Building',
    'Tradition',
  ];

  return (
    <>
      <nav>
        <button className="action-btn">
          <Image src={'/logo.svg'} width={20} height={20} alt="houseek logo" />
        </button>
        {pathname !== '/add' && (
          <ul>
            <li>
              <Link
                href="/"
                className={pathname === '/' ? 'active' : 'inactive'}
              >
                Comparatifs
              </Link>
            </li>
            <li>
              <Link
                href="/clients"
                className={pathname === '/clients' ? 'active' : 'inactive'}
              >
                Liste des clients
              </Link>
            </li>
            <li>
              <Link
                href="/to-sale"
                className={pathname === '/to-sale' ? 'active' : 'inactive'}
              >
                Propriétés à vendre
              </Link>
            </li>
            <li>
              <Link
                href="/to-rent"
                className={pathname === '/to-rent' ? 'active' : 'inactive'}
              >
                Propriétés à louer
              </Link>
            </li>
          </ul>
        )}
        {pathname !== '/add' && (
          <div className="actions-container">
            <button className="action-btn">
              <FiBell size={20} />
            </button>
            <button className="action-btn" onClick={toggleDrawer(true)}>
              <FiMenu size={20} />
            </button>
          </div>
        )}
        {pathname == '/add' && (
          <button
            className="action-btn"
            style={{ borderRadius: 57, width: '82px', fontSize: '16px' }}
          >
            Quitter
          </button>
        )}
        {pathname == '/add' && (
          <div
            style={{ position: 'absolute', bottom: 0, left: 0 }}
            className="status-bar"
          >
            <div
              className="fill-bar"
              style={{ width: `${(currentStep * 100) / 7}%` }}
            />
          </div>
        )}
      </nav>

      <Drawer
        anchor="right"
        open={open}
        onClose={toggleDrawer(false)}
        PaperProps={{
          sx: {
            width: '30%',
            paddingTop: '60px',
            paddingInline: '35px',
            backdropFilter: 'blur(10px)',
            backgroundColor: 'white',
          },
        }}
        ModalProps={{
          sx: {
            backdropFilter: 'blur(6px)',
          },
        }}
      >
        <Box
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <div
            style={{
              flex: 1,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-start',
              flexDirection: 'column',
              gap: '15px',
            }}
            className="drawer"
          >
            <span
              onClick={toggleDrawer(false)}
              style={{ marginLeft: 'auto', marginBottom: '40px' }}
            >
              <FiX size={20} />
            </span>
            <div className="search-bar">
              <input
                type="text"
                name="search"
                id="search"
                placeholder="Rechercher un logement"
              />
              <button
                className="action-btn"
                style={{
                  backgroundColor: '#FF3E57',
                  border: 'none',
                  width: '35px',
                  height: '35px',
                }}
              >
                <FiSearch size={20} color="white" />
              </button>
            </div>
            <div className="houses-container">
              {drawerChoices.map((option, index) => (
                <ChoiceCard
                  key={index}
                  type={option}
                  style={{
                    width: '100%',
                    height: '70px',
                    borderRadius: '12px',
                    paddingBlock: '15px',
                    gap: '8px',
                  }}
                  fontSize={16}
                  size={22}
                />
              ))}
            </div>
          </div>
        </Box>
      </Drawer>
    </>
  );
}
