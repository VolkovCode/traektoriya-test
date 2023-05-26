import { Vehicle } from "../../model/types/vehicle";

interface VehicleListItemProps {
    vehicle: Vehicle;
}

export const VehicleListItem = (props: VehicleListItemProps) => {
    const {
        vehicle
    } = props

    return (
    <div className='vehicle-card'>
        <></>
        <img src="./img/auto.jpg" alt="Фото автомобиля" />
        <div className='vehicle-card__about'>
            <ul>
                <li>Название: {vehicle.name}</li>
                <li>Модель: {vehicle.model}</li>
                <li>Год выпуска: {vehicle.year}</li>
                <li>Цена: {vehicle.price} $</li>
                <li>Цвет машины: {vehicle.color}</li>
            </ul>
        </div>
        <hr />
    </div>
    )
}