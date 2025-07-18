'use client';
import React, { useState } from 'react';
import './InfosHouse.css';
import { useFormContext } from 'react-hook-form';

const InfosHouse = () => {
  const [isSuperficieEditable, setIsSuperficieEditable] = useState(false);
  const { watch, setValue } = useFormContext();
  const superficie = watch('superficie');
  const chambres = watch('chambres');
  const cuisine = watch('cuisine');
  const sdb = watch('sdb');
  const lits = watch('lits');

  const handleSuperficieClick = () => {
    setIsSuperficieEditable(true);
  };

  const handleSuperficieChange = (e: any) => {
    setValue('superficie', e.target.value);
  };

  const handleSuperficieBlur = () => {
    setIsSuperficieEditable(false);
  };

  return (
    <div
      style={{
        height: '100%',
        width: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '15px',
        marginInline: 'auto',
      }}
    >
      <div className="info-item">
        <span className="label">Superficie</span>
        {isSuperficieEditable ? (
          <div>
            <input
              type="text"
              value={superficie}
              onChange={handleSuperficieChange}
              onBlur={handleSuperficieBlur}
              autoFocus
              className="editable-input"
            />
            <span>m²</span>
          </div>
        ) : (
          <span className="value" onClick={handleSuperficieClick}>
            {superficie}m²
          </span>
        )}
      </div>
      <div style={{ width: '100%', backgroundColor: '#E4E4E4', height: 0.3 }} />
      <div className="info-item">
        <span className="label">Chambres</span>
        <div className="counter">
          <button
            className="counter-btn"
            onClick={() => setValue('chambres', chambres - 1)}
          >
            −
          </button>
          <span className="value">{chambres}</span>
          <button
            className="counter-btn"
            onClick={() => setValue('chambres', chambres + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div style={{ width: '100%', backgroundColor: '#E4E4E4', height: 0.3 }} />

      <div className="info-item">
        <span className="label">Lits</span>
        <div className="counter">
          <button
            className="counter-btn"
            onClick={() => setValue('lits', lits - 1)}
          >
            −
          </button>
          <span className="value">{lits}</span>
          <button
            className="counter-btn"
            onClick={() => setValue('lits', lits + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div style={{ width: '100%', backgroundColor: '#E4E4E4', height: 0.3 }} />

      <div className="info-item">
        <span className="label">Salle de bain</span>
        <div className="counter">
          <button
            className="counter-btn"
            onClick={() => setValue('sdb', sdb - 1)}
          >
            −
          </button>
          <span className="value">{sdb}</span>
          <button
            className="counter-btn"
            onClick={() => setValue('sdb', sdb + 1)}
          >
            +
          </button>
        </div>
      </div>
      <div style={{ width: '100%', backgroundColor: '#E4E4E4', height: 0.3 }} />

      <div className="info-item">
        <span className="label">Salle de bain</span>
        <div className="counter">
          <button
            className="counter-btn"
            onClick={() => setValue('cuisine', cuisine - 1)}
          >
            −
          </button>
          <span className="value">{cuisine}</span>
          <button
            className="counter-btn"
            onClick={() => setValue('cuisine', cuisine + 1)}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfosHouse;
