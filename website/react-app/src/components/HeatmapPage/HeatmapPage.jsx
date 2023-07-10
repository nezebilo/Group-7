import React, { useEffect, useRef, useState } from 'react';
import 'leaflet/dist/leaflet.css';

import "./HeatmapPage.css"
import FunctionArea from './FunctionArea.jsx';
import Map from './Map';

function Details({zone}) {
  console.log("zone in Details:", zone);
  return (
    <div className="DetailsCard">
      <h2>Zone Details</h2>
      <p><strong>ID:</strong> {zone.properties.location_id}</p>
      <p><strong>Zone:</strong> {zone.properties.zone}</p>
    </div>
  );
}


function HeatmapPage() {
  const [zones, setZones] = useState(null);
  const [selectedZone, setSelectedZone] = useState(null);
  return (
    <div className="HeatmapPage">
      <FunctionArea />
      <div className="MapArea">
        <Map zones={zones} setZones={setZones} selectedZone={selectedZone} setSelectedZone={setSelectedZone} />
        <div className={selectedZone ? "DetailsContainer" : "DetailsContainer DetailsHidden"}>
          {selectedZone && <Details zone={zones.features.find(zone => zone.properties.location_id === selectedZone)} />}
        </div>
      </div>
    </div>
  );
}


export default HeatmapPage;
