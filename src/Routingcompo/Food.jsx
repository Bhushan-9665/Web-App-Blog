import Advertistement from "./Bollywoodf/Advertistement";
import FoodContain from "./Food/FoodCoaint";
import TopPostFood from "./Food/TopFood";


function Food() {

    return (
        <>
        <div className="Container">
                <div className="item-1">
                    <FoodContain />
                </div>
                <div className="item-2">
                    <div className="item-a">
                        <TopPostFood />
                    </div>
                    <div className="item-b">
                        <Advertistement />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Food;