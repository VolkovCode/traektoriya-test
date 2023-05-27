import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import { useSelector } from "react-redux";
import { getVehiclesData } from "../../model/selectors/vehicleSelectors";
import { useEffect } from "react";
import { fetchVehicleList } from "../../model/services/fetchVehicleList/fetchVehicleList";
import { VehicleListItem } from "../VenicleListItem/VenicleListItem";
import { vehicleActions } from "../../model/slices/vehicleSlice";

export const VehicleList = () => {
    const dispatch = useAppDispatch();
    const vehicles = useSelector(getVehiclesData);

    useEffect(() => {
        dispatch(fetchVehicleList());
    }, [dispatch]);

    const onChangeHandler = (sortType) => {
        dispatch(vehicleActions.setVehiclesSortParams(sortType));
    };

    return (
        <div className='vehicles-list'>
            <select defaultValue='sort' onChange={e => onChangeHandler(e.target.value)}>
                <option value={'sort'} disabled>Сортировка</option>
                <option value="price desc">По цене, по убыванию</option>
                <option value="price asc">По цене, по возрастанию</option>
                <option value="year desc">По году выпуска, по убыванию</option>
                <option value="year asc">По году выпуска, по возрастанию</option>
            </select>
            <div>
                {vehicles?.map((vehicle) => (<VehicleListItem key={vehicle.id} vehicle={vehicle} />))}
            </div>
        </div>
    )
}