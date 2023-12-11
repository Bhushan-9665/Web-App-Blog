
import TreadingCpompo, { HOllywoodCopmpo, TechnologyCopmpo } from "./Home/TreadingCompo.jsx";


function Home() {

    return (
        <>
        <div className="threeImageController-Main">
            <div className="Bollywood-Top">
                <TreadingCpompo />
            </div>
            <div className="Technology-Top">
                <TechnologyCopmpo />
            </div>
            <div className="Hollywood-Top">
                <HOllywoodCopmpo />
            </div>
        </div>
        </>
    )
}

export default Home;