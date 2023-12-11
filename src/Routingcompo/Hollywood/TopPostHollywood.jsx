import { useContext } from "react";
import { Bucket } from "../../Createstore";


function TopPostHollywood() {
    const [BollyData] = useContext(Bucket);
    return (
        <>
            <h1 className="Top-post">Top Post</h1>
            {BollyData.filter(item => item.cat === "Hollywood" && item.id % 2)
                .map((item, index) => {

                    return (
                        <>
                            <div key={index} className="TOP-Post">
                                <img src={item.img} alt="Img not found" />
                                <div className="Descreption-TOP-post">
                                    <h1>{item.title}</h1>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </>
                    )

                })}
        </>
    )
}

export default TopPostHollywood;