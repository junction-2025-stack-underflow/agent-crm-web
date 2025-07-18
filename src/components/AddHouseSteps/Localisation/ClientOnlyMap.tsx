// components/ClientOnlyMap.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconPng from 'leaflet/dist/images/marker-icon.png';
import { Icon } from 'leaflet';
import './Localisation.css';
// Fix leaflet marker icons
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconUrl: markerIconPng.src,
});

const LocationMarker = ({
  position,
}: {
  position: [number, number] | null;
}) => {
  if (!position) return null;
  return (
    <Marker
      position={position}
      icon={
        new Icon({
          iconUrl: markerIconPng,
          iconSize: [25, 41],
          iconAnchor: [12, 41],
        })
      }
    />
  );
};

const ChangeMapCenter = ({ center }: { center: [number, number] }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center);
  }, [center]);
  return null;
};

const ClientOnlyMap = ({
  center,
  position,
  onPositionChange,
  query,
  onQueryChange,
  suggestions,
  onSuggestionClick,
}: any) => {
  return (
    <MapContainer
      center={center}
      zoom={13}
      style={{
        width: '60%',
        height: '100%',
        borderRadius: '12px',
        position: 'relative',
      }}
      zoomControl={false}
    >
      <ChangeMapCenter center={center} />
      <div
        style={{
          position: 'absolute',
          top: '10px',
          left: '10px',
          background: 'white',
          padding: '10px',
          borderRadius: '6px',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          zIndex: 1000,
          width: '300px',
        }}
      >
        <input
          type="text"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Entrez une adresse..."
          style={{
            width: '100%',
            padding: '6px',
            border: 'none',
            fontSize: '10px',
          }}
          className="map-input"
        />
        {suggestions.length > 0 && (
          <ul
            style={{
              listStyle: 'none',
              margin: 0,
              padding: '5px 0',
              borderTop: '1px solid #ccc',
              maxHeight: '150px',
              overflowY: 'auto',
              background: 'white',
              position: 'absolute',
              width: '100%',
              top: '100%',
              left: 0,
              zIndex: 2000,
            }}
          >
            {suggestions.map((sug: any, idx: number) => (
              <li
                key={idx}
                onClick={() => onSuggestionClick(sug)}
                style={{
                  padding: '6px 10px',
                  cursor: 'pointer',
                  borderBottom: '1px solid #eee',
                }}
              >
                {sug.properties.name},{' '}
                {sug.properties.city || sug.properties.state}
              </li>
            ))}
          </ul>
        )}
      </div>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
      />
      <LocationMarker position={position} />
    </MapContainer>
  );
};

export default ClientOnlyMap;
