import { useContext } from "react";
import { Bucket } from "../../Createstore";


function TreadingCpompo(){
    const [BollyData] = useContext(Bucket)
    console.log(BollyData)
    return(
        <>
        <div>
        {BollyData
        .filter(item => item.title === "Yeh Jawaani Hai Deewani")
        .map((item, index) => {
            
            return (
                <>
                <img src={item.img} alt="Bolly" className="Home-Bolly-Top" />
                </>
            )
        })}
        </div>
        </>
    )
}

export default TreadingCpompo;

function TechnologyCopmpo(){
    const [BollyData] = useContext(Bucket)
    console.log(BollyData)
    return(
        <>
        <div>
        {BollyData
        .filter(item => item.title === "Quantum computing")
        .map((item, index) => {
            
            return (
                <>
                <img src={item.img} alt="Bolly" className="Technology-Top-img" />
                </>
            )
        })}
        </div>
        </>
    )
}

export {TechnologyCopmpo}


function HOllywoodCopmpo(){
    const [BollyData] = useContext(Bucket)
    console.log(BollyData)
    return(
        <>
        <div>
        {BollyData
        .filter(item => item.title === "LOKI")
        .map((item, index) => {
            
            return (
                <>
                <img src={item.img} alt="Bolly" className="Hollywood-Top-img" />
                </>
            )
        })}
        </div>
        </>
    )
}

export {HOllywoodCopmpo};