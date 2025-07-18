import Title from '@/components/Title/Title';
import './Comparatif.css';
import Image from 'next/image';
import { FiEdit3, FiGrid, FiPlus } from 'react-icons/fi';
import { LuPrinter } from 'react-icons/lu';
import { TbAirConditioning } from 'react-icons/tb';
import Modal from '@mui/material/Modal';
import { useState } from 'react';

export default function Home() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };
  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
      }}
      className="comparatif-page"
    >
      <Title>Comparatif et Devis</Title>
      <div className="comparatif-table">
        <div className="left-part">
          <div className="comparatif-row header">
            <div className="actions-container">
              <Image
                src={'/images/eg-villa.jpg'}
                width={50}
                height={50}
                style={{ borderRadius: 12 }}
                alt="main chosen home image"
              />
              <h4>Villa avec piscine</h4>
            </div>
            <div className="actions-container">
              <button className="action-btn">
                <LuPrinter size={20} />
              </button>
              <button className="action-btn" onClick={handleOpen}>
                <FiEdit3 size={20} />
              </button>
            </div>
          </div>
          <div className="comparatif-row">
            <h6>Type</h6>
            <h5>Villa</h5>
          </div>
          <div className="comparatif-row">
            <h6>Prix</h6>
            <h5>Villa</h5>
          </div>
          <div className="comparatif-row">
            <h6>Localisation</h6>
            <h5>Villa</h5>
          </div>
          <div className="comparatif-row">
            <h6>Superficie</h6>
            <h5>Villa</h5>
          </div>
          <div className="comparatif-row">
            <h6>Nombre de chambres</h6>
            <h5>Villa</h5>
          </div>
          <div className="comparatif-row">
            <h6>Nombre de salles de bain</h6>
            <h5>Villa</h5>
          </div>
          <div className="comparatif-row">
            <h6>Nombre de lits</h6>
            <h5>Villa</h5>
          </div>
          <div className="comparatif-row">
            <h6>Equipement</h6>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'flex-start',
                gap: '6px',
              }}
            >
              <span className="display-option">
                <TbAirConditioning size={16} />
                <p>climatisation</p>
              </span>
              <span className="display-option">
                <TbAirConditioning size={16} />
                <p>climatisation</p>
              </span>
              <span className="display-option">
                <TbAirConditioning size={16} />
                <p>climatisation</p>
              </span>
            </div>
          </div>
          <div className="comparatif-row">
            <h6>Catégorie du bien</h6>
            <h5>Villa</h5>
          </div>
          <div className="comparatif-row">
            <h6>Nombre de clients potentiel</h6>
            <h5>Villa</h5>
          </div>
        </div>
        <div className="right-part">
          <div className="comparatif-row header">
            <button
              className="action-btn"
              style={{
                width: '140px',
                borderRadius: '28px',
                alignItems: 'center',
                justifyContent: 'center',
                display: 'flex',
                gap: '5px',
              }}
            >
              <FiPlus size={20} />
              <p>Ajouter un bien</p>
            </button>
          </div>
          <div className="comparatif-row">
            <h6>Type</h6>
            <h5>...</h5>
          </div>
          <div className="comparatif-row">
            <h6>Prix</h6>
            <h5>...</h5>
          </div>
          <div className="comparatif-row">
            <h6>Localisation</h6>
            <h5>...</h5>
          </div>
          <div className="comparatif-row">
            <h6>Superficie</h6>
            <h5>...</h5>
          </div>
          <div className="comparatif-row">
            <h6>Nombre de chambres</h6>
            <h5>...</h5>
          </div>
          <div className="comparatif-row">
            <h6>Nombre de salles de bains</h6>
            <h5>...</h5>
          </div>
          <div className="comparatif-row">
            <h6>Nombre de lits</h6>
            <h5>...</h5>
          </div>
          <div className="comparatif-row">
            <h6>Equipement</h6>
            <h5>...</h5>
          </div>
          <div className="comparatif-row">
            <h6>Catégorie du bien</h6>
            <h5>...</h5>
          </div>
          <div className="comparatif-row">
            <h6>Nombre de clients potentiel</h6>
            <h5>...</h5>
          </div>
        </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div></div>
      </Modal>
    </div>
  );
}
