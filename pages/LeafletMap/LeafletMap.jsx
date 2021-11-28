import { useState } from "react";
import {
  MapContainer,
  TileLayer,
  LayersControl,
  useMap,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import { DynamicMapLayer } from "react-esri-leaflet";
import * as esri from "esri-leaflet";
//import SnowCoverage from "../SnowCoverage/SnowCoverage";
const icon = L.icon({
  iconUrl: "/images/marker-icon.png",
  shadowUrl: "/images/marker-shadow.png",
  iconAnchor: [14, 34]
});

const latlngDisp = (ll) => {
  return (
    "(" +
    Math.round(100 * ll.lat) / 100 +
    ", " +
    Math.round(100 * ll.lng) / 100 +
    ")"
  );
};

const HandleClick = () => {
  const [position, setPosition] = useState(null);
  const map = useMapEvents({
    click(e) {
      //const map = useMap();
      setPosition(e.latlng);
      // esri
      //   .identifyFeatures({
      //     url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Observations/NOHRSC_Snow_Analysis/MapServer",
      //   })
      //   .layers("all:3,7")
      //   .on(map)
      //   .at(e.latlng)
      //   .run(function (error, featureCollection) {
      //     if (error) {
      //       console.log(error);
      //       return;
      //     }
      //     const snowDepth =
      //       Math.round(
      //         10 *
      //           featureCollection.features.filter((p) => p.layerId === 3)[0]
      //             .properties["Pixel Value"]
      //       ) / 10;
      //     const snowDepthPopup = L.popup()
      //       .setLatLng(e.latlng)
      //       .setContent(
      //         "<b>Location:</b> " +
      //           latlngDisp(e.latlng) +
      //           "<br><b>Snow depth:</b> " +
      //           snowDepth +
      //           " in."
      //       )
      //       .addTo(map);
      //   });
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={icon}>
      <Popup>You are here</Popup>
    </Marker>
  );
};

export default function LeafletMap() {
  return (
    <MapContainer center={[44, -75]} zoom={7}>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="OSM">
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.Overlay name="Snow Depth">
          <DynamicMapLayer
            url="https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Observations/NOHRSC_Snow_Analysis/MapServer"
            opacity={0.5}
            f="image"
          />

          {/* <SnowCoverage /> */}
        </LayersControl.Overlay>
      </LayersControl>
      <HandleClick />
    </MapContainer>
  );
}
