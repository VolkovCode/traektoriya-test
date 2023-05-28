import { Vehicle } from "../../model/types/vehicle";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { vehicleActions } from "../../model/slices/vehicleSlice";
import React, { useState } from "react";


interface VehicleListItemProps {
    vehicle: Vehicle;
}

export const VehicleListItem = (props: VehicleListItemProps) => {
    const {
        vehicle
    } = props

    const dispatch = useAppDispatch();
    const [isEdit, setIsEdit] = useState(false)
    const [name, setName] = useState(vehicle.name);
    const [model, setModel] = useState(vehicle.model);
    const [price, setPrice] = useState(vehicle.price);

    const nameField = isEdit ? <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)} value={name}/> : name
    const modelField = isEdit ? <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setModel(e.target.value)} value={model}/> : model
    const priceField = isEdit ? <input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPrice(Number(e.target.value))} type='number' value={price}/> : price

    const onEditHandler = () => {
        setIsEdit(true)
    }

    const onSaveHandler = (id) => {
        dispatch(vehicleActions.updateVehicleCard({id, name, model, price}));
        setIsEdit(false)
    }

    const onDeleteHandler = (id) => {
        dispatch(vehicleActions.deleteVehicleCard(id))
    }

    return (
        <div className='vehicle-card'>
            <div className='vehicle-card__about'>
                <img src="./img/auto.jpg" alt="Фото автомобиля" />
                <ul>
                    <li>Название: {nameField}</li>
                    <li>Модель: {modelField}</li>
                    <li>Год выпуска: {vehicle.year}</li>
                    <li>Цена: {priceField} $</li>
                    <li>Цвет машины: {vehicle.color}</li>
                </ul>
            </div>
            {
                isEdit
                ? <button onClick={() => onSaveHandler(vehicle.id)} type='button'>Сохранить</button>
                : <button onClick={() => onEditHandler()} type='button'>Редактировать</button>
            }
            <button onClick={() => onDeleteHandler(vehicle.id)}>Удалить</button>
            <hr />
        </div>
    )
}