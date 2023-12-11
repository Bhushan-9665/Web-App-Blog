import { useContext } from "react";
import { Bucket } from "../../Createstore";



function HollywoodContain() {
    const [BollyData] = useContext(Bucket);

    return (
        <>
        <h1 className="tittle-1">Technology</h1>
                    {BollyData.filter(item => item.cat === "Hollywood")
                    .map((item, index) => {
                        // console.log(BollyData)
                        return (
                            <>
                            
                                <div className="Home-UI">

                                    <img src={item.img} alt="IMG Not Found" />
                                    <div className="description">
                                        <h1>{item.title}</h1>
                                        <p>{item.description}</p>
                                        <p>{item.Directors}</p>
                                        <p>{item.Star}</p>
                                        
                                    </div>
                                </div>
                            </>
                        )
                    })}
        </>
    )
}

export default HollywoodContain;