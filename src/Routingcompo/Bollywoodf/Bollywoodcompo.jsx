import { useContext } from "react";
import { Bucket } from "../../Createstore";


function Bollywoodcompo() {
    const [BollyData] = useContext(Bucket);
    // console.log(BollyData)
    return(
        <>
        <h1 className="tittle-1">Bollywood</h1>
                    {BollyData.map((item, index) => {
                        // console.log(BollyData)
                        return (
                            <>
                            
                                <div className="Home-UI">

                                    <img src={item.img} alt="IMG Not Found" />
                                    <div className="description">
                                        <h1>{item.title}</h1>
                                        <p>{item.description}</p>
                                        <p>Realise Date :{item.Date}</p>
                                    </div>
                                </div>
                                <div className="UnderLine"></div>
                            </>
                        )
                    })}
        </>
    )
    
}

export default Bollywoodcompo;