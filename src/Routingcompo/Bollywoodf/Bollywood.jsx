import Advertistement from "./Advertistement";
import Bollywoodcompo from "./Bollywoodcompo";
import Toppost from "./Toppost";

// import { useContext } from "react";
// import { Bucket } from "../../Createstore";


function Bollywood() {
    // const [BollyData] = useContext(Bucket);
    // console.log(BollyData)
    return (
        <>
            <div className="Container">
                <div className="item-1">
                    <Bollywoodcompo />
                </div>
                <div className="item-2">
                    <div className="item-a">
                        <Toppost />
                    </div>
                    <div className="item-b">
                        <Advertistement />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Bollywood;