import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import marker from "../../../assets/images/marker.svg";
import { useSelector } from "react-redux";

const Map = () => {
  const formData = useSelector((state) => state.todos);

  const markerIcon = new L.icon({
    iconUrl: marker,
    iconSize: [32, 32],
    iconAnchor: [16, 32],
  });
  const markers = [
    { position: [35.715298, 51.404343], popupText: "Marker 1" },
    { position: [33.715298, 48.404343], popupText: "Marker 2" },
    { position: [34.715298, 50.404343], popupText: "Marker 3" },
    { position: [35.835298, 52.104343], popupText: "Marker 3" },
  ];
  return (
    <MapContainer
      center={[formData.latitude, formData.longitude]} // Initial map center coordinates
      zoom={6} // Initial zoom level
      style={{ height: "600px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {markers.map((marker, index) => (
        <Marker
          key={index}
          position={marker.position}
          icon={markerIcon}
        ></Marker>
      ))}
    </MapContainer>
  );
};

export default Map;
