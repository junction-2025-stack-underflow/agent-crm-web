import React from 'react';
import './Texts.css';
import { useFormContext } from 'react-hook-form';

const Texts = () => {
  const { watch, setValue } = useFormContext();
  const titre = watch('titre');
  const desc = watch('desc');
  return (
    <div className="texts-container">
      <div className="input-group">
        <label htmlFor="title">Titre</label>
        <input
          type="text"
          id="title"
          placeholder="Un F3 de luxe"
          className="input-title"
          value={titre}
          onChange={(e) => setValue('titre', e.target.value)}
        />
      </div>

      <div className="input-group">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          placeholder=""
          maxLength={400}
          value={desc}
          onChange={(e) => setValue('desc', e.target.value)}
          className="textarea-description"
        />
      </div>

      <div className="char-counter">{desc.length}/400</div>
    </div>
  );
};

export default Texts;
