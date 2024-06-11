import { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import { Box } from '@chakra-ui/react';
import 'leaflet/dist/leaflet.css';

// Dummy data for buildings in Oslo
const buildings = [
  { id: 1, name: 'Building 1', lat: 59.9139, lng: 10.7522, sensorData: 'Temperature: 20°C, Humidity: 30%' },
  { id: 2, name: 'Building 2', lat: 59.9149, lng: 10.7522, sensorData: 'Temperature: 22°C, Humidity: 35%' },
  { id: 3, name: 'Building 3', lat: 59.9159, lng: 10.7522, sensorData: 'Temperature: 19°C, Humidity: 40%' },
  { id: 4, name: 'Building 4', lat: 59.9169, lng: 10.7522, sensorData: 'Temperature: 21°C, Humidity: 32%' },
  { id: 5, name: 'Building 5', lat: 59.9179, lng: 10.7522, sensorData: 'Temperature: 23°C, Humidity: 37%' },
  { id: 6, name: 'Building 6', lat: 59.9189, lng: 10.7522, sensorData: 'Temperature: 18°C, Humidity: 42%' },
  { id: 7, name: 'Building 7', lat: 59.9199, lng: 10.7522, sensorData: 'Temperature: 24°C, Humidity: 33%' },
  { id: 8, name: 'Building 8', lat: 59.9209, lng: 10.7522, sensorData: 'Temperature: 17°C, Humidity: 45%' },
  { id: 9, name: 'Building 9', lat: 59.9219, lng: 10.7522, sensorData: 'Temperature: 25°C, Humidity: 30%' },
  { id: 10, name: 'Building 10', lat: 59.9229, lng: 10.7522, sensorData: 'Temperature: 16°C, Humidity: 50%' },
];

// Custom icon for the map pins
const pinIcon = new L.Icon({
  iconUrl: require('../assets/pin-icon.png'),
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const Index = () => {
  const [activeBuilding, setActiveBuilding] = useState(null);

  return (
    <Box height="100vh">
      <MapContainer center={[59.9139, 10.7522]} zoom={13} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {buildings.map(building => (
          <Marker
            key={building.id}
            position={[building.lat, building.lng]}
            icon={pinIcon}
            eventHandlers={{
              click: () => {
                setActiveBuilding(building);
              },
            }}
          >
            {activeBuilding === building ? (
              <Popup>
                <div>
                  <h2>{building.name}</h2>
                  <p>{building.sensorData}</p>
                </div>
              </Popup>
            ) : null}
          </Marker>
        ))}
      </MapContainer>
    </Box>
  );
};

export default Index;