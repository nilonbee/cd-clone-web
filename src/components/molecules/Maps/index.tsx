"use client";
import React, { useState } from "react";
import {
  GoogleMap,
  InfoWindow,
  Marker,
  useJsApiLoader,
} from "@react-google-maps/api";
import { Loading } from "@/components/atoms";

interface MapProps {
  mapData: {
    location_name: string;
    lat: string;
    lng: string;
  }[];
}

function GMap({ mapData }: MapProps): JSX.Element {
  const markers = mapData?.map((data, index) => {
    return {
      id: index,
      name: data.location_name,
      position: { lat: parseFloat(data.lat), lng: parseFloat(data.lng) },
    };
  });

  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env["NEXT_PUBLIC_GOOGLE_API_KEY"] || "",
  });

  const handleActiveMarker = (marker: number) => {
    if (marker === activeMarker) {
      return;
    }
    setActiveMarker(marker);
  };

  const onLoad = (map: any) => {
    setTimeout(() => {
      const bounds = new window.google.maps.LatLngBounds();
      markers.forEach(({ position }) => bounds.extend(position));
      map?.fitBounds(bounds); // Using optional chaining to handle the possibility of map being null
    }, 2000);
  };

  return (
    <>
      {!isLoaded ? (
        <Loading />
      ) : (
        <GoogleMap
          onLoad={onLoad}
          onClick={() => setActiveMarker(null)}
          mapContainerStyle={{ height: "500px" }}
        >
          {markers.map(({ id, name, position }) => (
            <Marker
              key={id}
              position={position}
              onClick={() => handleActiveMarker(id)}
            >
              {activeMarker === id ? (
                <InfoWindow onCloseClick={() => setActiveMarker(null)}>
                  <h3>{name}</h3>
                </InfoWindow>
              ) : null}
            </Marker>
          ))}
        </GoogleMap>
      )}
    </>
  );
}

export default GMap;
