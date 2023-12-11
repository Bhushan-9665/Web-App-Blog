
import Advertistement from "./Bollywoodf/Advertistement";
import TechnologyContain from "./Technology/TechnologyContain";
import TopPostTechno from "./Technology/TopPostTechno";



function Technology() {

    return (
        <>
            <div className="Container">
                <div className="item-1">
                    <TechnologyContain />
                </div>
                <div className="item-2">
                    <div className="item-a">
                        <TopPostTechno />
                    </div>
                    <div className="item-b">
                        <Advertistement />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Technology;