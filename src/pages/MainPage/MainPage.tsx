import { VehicleList } from "../../entities/Vehicle/ui/VehicleList/VehicleList";
import { VehiclesMap } from "../../entities/Vehicle/ui/VehiclesMap/VehiclesMap";

export const MainPage = () => {
    return (
        <>
            <VehiclesMap />
            <div className="page-main">
                <VehicleList />
            </div>
        </>
    );
};
