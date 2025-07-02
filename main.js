import * as maplibregl from "https://esm.sh/maplibre-gl";

import { Protocol } from "https://esm.sh/pmtiles";
const protocol = new Protocol();
maplibregl.addProtocol("pmtiles", protocol.tile);

const map = new maplibregl.Map({
    container: 'mijnkaart', // container id
   style: './assets/style.json',
   center: [5.66509, 51.96857], // starting position [lng, lat]
   zoom: 13 // starting zoom
});


