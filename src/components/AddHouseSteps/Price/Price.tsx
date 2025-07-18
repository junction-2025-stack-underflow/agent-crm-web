import React, { useState, useRef } from 'react';
import './Price.css';
import { FiEdit, FiEdit3, FiPenTool } from 'react-icons/fi';
import { useFormContext } from 'react-hook-form';

const Price = () => {
  const [editing, setEditing] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { watch, setValue } = useFormContext();
  const price = watch('price');
  const formatPrice = (value: number) => {
    return value
      .toFixed(2)
      .replace('.', ',')
      .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  };

  const handleEditClick = () => {
    setEditing(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 0);
  };

  const handleBlur = () => {
    setEditing(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^\d]/g, '');
    setValue('price', Number(raw));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setEditing(false);
    }
  };

  return (
    <div className="price-container">
      {editing ? (
        <input
          ref={inputRef}
          type="text"
          value={price.toString()}
          onChange={handleChange}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="price-input"
        />
      ) : (
        <>
          <span className="price-value">{formatPrice(price)} DZD</span>
          <button className="action-btn" onClick={handleEditClick}>
            <FiEdit3 size={25} />
          </button>
        </>
      )}
    </div>
  );
};

export default Price;
