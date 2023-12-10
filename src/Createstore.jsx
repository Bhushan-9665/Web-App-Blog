
import { createContext, useState } from "react";


export const Bucket = createContext();

function CreateStore (props) {
    const [data,setData] = useState([
        
        {
            id:1,
            cat:"Bollywood",
            title:"Yeh Jawaani Hai Deewani",
            description:"Kabir and Naina bond during a trekking trip. Before Naina can express herself, Kabir leaves India to pursue his career. They meet again years later, but he still cherishes his dreams more than bonds.",
            img:"https://th.bing.com/th/id/OIP.NSaYn6J-yMiMNSwJzWGeiAHaEK?w=317&h=180&c=7&r=0&o=5&pid=1.7",
            Date:"15th Nov 2013",
        },
        {
            id:2,
            cat:"Bollywood",
            title:"Animal",
            description:"A son's love for his father. Often away due to work the father is unable to comprehend the intensity of his son's love. Ironically, this fervent love and admiration for his father and family creates conflict between the father and son.",
            img:"https://th.bing.com/th/id/OIF.u084nCRhXqiOv5mfLS7SnA?w=303&h=180&c=7&r=0&o=5&pid=1.7",
            Date:"1st Dec 2023",
        },
        {
            id:3,
            cat:"Bollywood",
            title:"Pushpa: The Rule - Part 2",
            description:"The clash is on as Pushpa and Bhanwar Singh continue their rivalry in this epic conclusion to the two-parted action drama.",
            img:"https://th.bing.com/th/id/OIP.sEUcbRo1aeGHcOYfFMV8WAAAAA?w=318&h=180&c=7&r=0&o=5&pid=1.7",
            Date:"2024",
        },
        {
            id:4,
            cat:"Bollywood",
            title:"Tamasha",
            description:"A boy meets a girl, in Corsica. They decide not to reveal their real name or personality.",
            img:"https://th.bing.com/th/id/OIP.ojfjsm7kuDuhVDBzcvihuwHaI4?w=149&h=180&c=7&r=0&o=5&pid=1.7",
            Date:"2015",
        },
        {
            id:5,
            cat:"Bollywood",
            title:"Ae Dil Hai Mushkil",
            description:"This story explores love - the shapes it takes, the ways it changes us and the exhilarating and often terrifying ride it takes us on. It is the journey of two characters, Alizeh and Ayan, as they navigate life, love and heartbreak.",
            img:"https://wallpapercave.com/dwp1x/wp6584806.jpg",
            Date:"2016",
        },
        {
            id:6,
            cat:"Bollywood",
            title:"Tu Jhoothi Main Makkaar",
            description:"Madness ensues when a 'player' in the world of romantic relationships finds a girl who's a worthy opponent, that believes love is a battle of wits.",
            img:"https://th.bing.com/th/id/OIP.m24UUfJFuhOT34TjU_4eyQHaEJ?w=299&h=180&c=7&r=0&o=5&pid=1.7",
            Date:"2023",
        },
        {
            id:7,
            cat:"Bollywood",
            title:"Baahubali: The Beginning",
            description:"A child from the Mahishmati kingdom is raised by tribal people and one day learns about his royal heritage, his father's bravery in battle and a mission to overthrow the incumbent ruler.",
            img:"https://th.bing.com/th/id/OIP.ofoPZbD-RYfvhcGxEiLSDQHaK_?w=204&h=303&c=7&r=0&o=5&pid=1.7",
            Date:"2015",
        },
        {
            id:8,
            cat:"Bollywood",
            title:"K.G.F: Chapter 2",
            description:"In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes. While his allies look up to him, the government sees him as a threat to law and order. Rocky must battle threats from all sides for unchallenged supremacy.",
            img:"https://th.bing.com/th/id/OIP.EPT8k0LATKt0glqR6R3xhAHaEK?w=324&h=184&c=7&r=0&o=5&pid=1.7",
            Date:"2015",
        }
    ])
    return(
        <>
        <Bucket.Provider value={[data, setData]}>
            {props.children}
        </Bucket.Provider>
        </> 
    )
}
// export {Bucket};
export default CreateStore;