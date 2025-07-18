import React, { useRef, useState } from 'react';
import './Photos.css';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';

const Photos = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { watch, setValue } = useFormContext();
  const selectedPhotos = watch('photos');
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      setValue('photos', [...selectedPhotos, ...selectedFiles]);
    }
  };

  const handleRemoveImage = (index: number) => {
    setValue(
      'photos',
      selectedPhotos.filter((p: File, i: number) => i !== index)
    );
  };

  const openFilePicker = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="photos-container">
      <button onClick={openFilePicker} className="add-photo-button">
        <Image
          src={'/images/camera-logo.png'}
          width={100}
          height={100}
          alt="camera logo"
        />
      </button>
      <input
        type="file"
        accept="image/*"
        multiple
        ref={fileInputRef}
        style={{ display: 'none' }}
        onChange={handleImageChange}
      />
    </div>
  );
};

export default Photos;
