import * as esri from "esri-leaflet";
import { useMap } from "react-leaflet";

const latlngDisp = (ll) => {
  return (
    "(" +
    Math.round(100 * ll.lat) / 100 +
    ", " +
    Math.round(100 * ll.lng) / 100 +
    ")"
  );
};

export default function SnowCoverage() {
  const map = useMap();

  L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
    attribution:
      '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);

  esri
    .dynamicMapLayer({
      url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Observations/NOHRSC_Snow_Analysis/MapServer",
      opacity: 0.5,
      f: "image",
    })
    .addTo(map);

  map.on("click", function (e) {
    esri
      .identifyFeatures({
        url: "https://idpgis.ncep.noaa.gov/arcgis/rest/services/NWS_Observations/NOHRSC_Snow_Analysis/MapServer",
      })
      .layers("all:3,7")
      .on(map)
      .at(e.latlng)
      .run(function (error, featureCollection) {
        if (error) {
          console.log(error);
          return;
        }
        const snowDepth =
          Math.round(
            10 *
              featureCollection.features.filter((p) => p.layerId === 3)[0]
                .properties["Pixel Value"]
          ) / 10;
        console.log(snowDepth);
        const snowDepthPopup = L.popup()
          .setLatLng(e.latlng)
          .setContent(
            "<b>Location:</b> " +
              latlngDisp(e.latlng) +
              "<br><b>Snow depth:</b> " +
              snowDepth +
              " in."
          )
          .openOn(map);
      });
  });
  return null;
}
