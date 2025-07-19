'use client';

import React, { useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import { useFormContext } from 'react-hook-form';

// Dynamically import to prevent SSR
const ClientOnlyMap = dynamic(() => import('./ClientOnlyMap'), { ssr: false });

const Localisation = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [mapCenter, setMapCenter] = useState<[number, number]>([
    46.2276, 2.2137,
  ]);
  const [userPosition, setUserPosition] = useState<[number, number] | null>(
    null
  );
  const { watch, setValue } = useFormContext();

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          const coords: [number, number] = [latitude, longitude];
          setMapCenter(coords);
          setUserPosition(coords);
        },
        (err) => console.error('Geolocation error:', err)
      );
    }
  }, []);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length < 3) return setSuggestions([]);
      try {
        const res = await fetch(
          `https://photon.komoot.io/api/?q=${encodeURIComponent(query)}&limit=5`
        );
        const data = await res.json();
        console.log(data);
        setSuggestions(data.features);
      } catch (err) {
        console.error('Search failed:', err);
      }
    };

    const timeout = setTimeout(fetchSuggestions, 300);
    return () => clearTimeout(timeout);
  }, [query]);

  const handleSuggestionClick = (feature: any) => {
    const [lon, lat] = feature.geometry.coordinates;
    const coords: [number, number] = [lat, lon];
    setMapCenter(coords);
    setUserPosition(coords);
    setValue('coordinates', coords);
    setQuery(feature.properties.name || '');
    setValue(
      'localisation',
      [
        feature.properties.name,
        feature.properties.city,
        feature.properties.state,
      ]
        .filter(Boolean)
        .join(', ')
    );

    setSuggestions([]);
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'grid',
        placeItems: 'center',
      }}
    >
      <ClientOnlyMap
        center={mapCenter}
        position={userPosition}
        query={query}
        onQueryChange={setQuery}
        suggestions={suggestions}
        onSuggestionClick={handleSuggestionClick}
      />
    </div>
  );
};

export default Localisation;
