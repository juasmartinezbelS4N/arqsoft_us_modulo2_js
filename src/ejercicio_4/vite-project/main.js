import './style.css'
import javascriptLogo from './javascript.svg'
import { DOMParser } from 'xmldom';

class KMLLibrary {

  loadKML(kmlData) {
    console.log('Cargando datos KML:', kmlData);
    // Lógica para cargar datos KML
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(kmlData, 'text/xml');
    const placemarks = xmlDoc.getElementsByTagName('Placemark');
    for (let i = 0; i < placemarks.length; i++) {
      const name = placemarks[i].getElementsByTagName('name')[0].textContent;
      const description = placemarks[i].getElementsByTagName('description')[0].textContent;
      const coordinates = placemarks[i].getElementsByTagName('coordinates')[0].textContent;
      console.log('Nombre:', name);
      console.log('Descripción:', description);
      console.log('Coordenadas:', coordinates);
    };
  };

  displayKML() {
    console.log('Mostrando datos KML');
  };
}

class GeoJSONInterface {
  loadGeoJSON(geojsonData) {
    throw new Error('Método loadGeoJSON no implementado');
  };

  displayGeoJSON() {
    throw new Error('Método displayGeoJSON no implementado');
  };
}

class KMLAdapter extends GeoJSONInterface {
  constructor(kmlLibrary) {
    super();
    this.kmlLibrary = kmlLibrary;
  };

  loadGeoJSON(geojsonData) {
    const kmlData = this.convertirGeoJSONAKML(geojsonData);
    this.kmlLibrary.loadKML(kmlData);
  };

  displayGeoJSON() {
    this.kmlLibrary.displayKML();
  };

  convertirGeoJSONAKML(geojsonData) {
    console.log('Convirtiendo GeoJSON a KML:', geojsonData);

    let kmlData = '<?xml version="1.0" encoding="UTF-8"?>\n';
    kmlData += '<kml xmlns="http://www.opengis.net/kml/2.2">\n';
    kmlData += '  <Document>\n';
    for (const feature of geojsonData.features) {
      kmlData += '    <Placemark>\n';
      kmlData += `      <name>${feature.properties.name}</name>\n`;
      kmlData += `      <description>${feature.properties.description}</description>\n`;
      kmlData += '      <Point>\n';
      kmlData += `        <coordinates>${feature.geometry.coordinates[0]},${feature.geometry.coordinates[1]}</coordinates>\n`;
      kmlData += '      </Point>\n';
      kmlData += '    </Placemark>\n';
    };
    kmlData += '  </Document>\n';
    kmlData += '</kml>';
    console.log('Fin conversion GeoJSON a KML:', kmlData);
    return kmlData;
  };
}

class Cliente {
  constructor(adapter) {
    this.adapter = adapter;
  };

  cargarYMostrarDatos(geojsonData) {
    this.adapter.loadGeoJSON(geojsonData);
    this.adapter.displayGeoJSON();
  };
}

const geojsonData = {
  type: 'FeatureCollection',
  features: [
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [125.6, 10.1]
      },
      properties: {
        name: 'Ubicación 1',
        description: 'Esta es la ubicación 1'
      }
    },
    {
      type: 'Feature',
      geometry: {
        type: 'Point',
        coordinates: [126.1, 11.2]
      },
      properties: {
        name: 'Ubicación 2',
        description: 'Esta es la ubicación 2'
      }
    }
  ]
};

const button = document.getElementById('main');
button.addEventListener('click', () => main());

function main() {

  const kmlLibrary = new KMLLibrary();
  const adapter = new KMLAdapter(kmlLibrary);
  const cliente = new Cliente(adapter);
  cliente.cargarYMostrarDatos(geojsonData);
};