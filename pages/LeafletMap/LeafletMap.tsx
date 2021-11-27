
import * as esri from "esri-leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";



export default function LeafletMap() {
  // const map = L.map("map").setView([44, -75], 7);

  // L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
  //   attribution:
  //     '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  // }).addTo(map);

  // esri
  //   .dynamicMapLayer({
  //     url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Observations/NOHRSC_Snow_Analysis/MapServer",
  //     opacity: 0.5,
  //     f: "image",
  //   })
  //   .addTo(map);

  // map.on("click", function (e) {
  //   esri
  //     .identifyFeatures({
  //       url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Observations/NOHRSC_Snow_Analysis/MapServer",
  //     })
  //     .layers("all:3,7")
  //     .on(map)
  //     .at(e.latlng)
  //     .run(function (error, featureCollection, response) {
  //       if (error) {
  //         console.log(error);
  //         return;
  //       }
  //       console.log(featureCollection);
  //     });
  // });

  return (
    <MapContainer center={[44, -75]} zoom={7} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
    </MapContainer>
  );
}
