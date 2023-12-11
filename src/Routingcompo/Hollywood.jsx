import Advertistement from "./Bollywoodf/Advertistement";
import HollywoodContain from "./Hollywood/HollywoodContain";
import TopPostHollywood from "./Hollywood/TopPostHollywood";


function Hollywood() {

    return (
        <>
        <div className="Container">
                <div className="item-1">
                    <HollywoodContain />
                </div>
                <div className="item-2">
                    <div className="item-a">
                        <TopPostHollywood />
                    </div>
                    <div className="item-b">
                        <Advertistement />
                    </div>

                </div>
            </div>
        </>
    )
}

export default Hollywood;