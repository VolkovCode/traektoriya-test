import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import { useSelector } from "react-redux";
import { getVehiclesData } from "../../model/selectors/vehicleSelectors";
import React from "react";

export const VehiclesMap = () => {
    const vehicles = useSelector(getVehiclesData);

    return (
        <MapContainer center={[59.95, 30.35]} zoom={9} scrollWheelZoom>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {vehicles?.map((vehicle) =>
                (<Marker key={vehicle.id} position={[vehicle.latitude, vehicle.longitude]}>
                    <Popup>

                        <div className='vehicle-card__about'>
                            <img width='100px' src="./img/auto.jpg" alt="Фото автомобиля" />
                            <ul>
                                <li>Название: {vehicle.name}</li>
                                <li>Модель: {vehicle.model}</li>
                                <li>Год выпуска: {vehicle.year}</li>
                                <li>Цена: {vehicle.price} $</li>
                                <li>Цвет машины: {vehicle.color}</li>
                            </ul>
                        </div>
                    </Popup>
                </Marker>)
            )}
        </MapContainer>
    )
};
