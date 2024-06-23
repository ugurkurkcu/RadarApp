import { icon } from "leaflet";
import "leaflet/dist/leaflet.css";
import {
  MapContainer,
  Marker,
  Polyline,
  Popup,
  TileLayer,
} from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { setPath } from "../redux/slices/flightSlice";

const MapView = ({ setDetailId }) => {
  const { flights, path } = useSelector((store) => store.flightReducer);
  const dispatch = useDispatch();

  const planeIcon = icon({
    iconUrl: "plane-icon.png",
    iconSize: [30, 30],
  });

  return (
    <MapContainer center={[38.891, 35.435]} zoom={6} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {flights?.map((flight) => (
        <Marker
          icon={planeIcon}
          key={flight.id}
          position={[flight.lat, flight.lng]}
        >
          <Popup>
            <div>
              <span className=" d-flex flex-column gap-2 align-items-center">
                Code: {flight.code}
              </span>
              <button
                onClick={() => setDetailId(flight.id)}
                className="w-100 p-1 mt-2"
              >
                Details
              </button>
              {path.length>0 && (
                <button
                  onClick={() => dispatch(setPath([]))}
                  className="w-100 p-1 mt-2"
                >
                  Clear Path
                </button>
              )}
            </div>
          </Popup>
        </Marker>
      ))}

      <Polyline positions={[path]} />
    </MapContainer>
  );
};

export default MapView;
