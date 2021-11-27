import { MapContainer, TileLayer, useMap } from "react-leaflet";
import SnowCoverage from "../SnowCoverage/SnowCoverage";

export default function LeafletMap() {
  return (
    <MapContainer center={[44, -75]} zoom={7} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <SnowCoverage />
    </MapContainer>
  );
}
