
import { createContext, useState } from "react";


export const Bucket = createContext();

function CreateStore (props) {
    const [data,setData] = useState([
        
        {
            id:1,
            cat:"Bollywood",
            title:"Yeh Jawaani Hai Deewani",
            description:"Kabir and Naina bond during a trekking trip. Before Naina can express herself, Kabir leaves India to pursue his career. They meet again years later, but he still cherishes his dreams more than bonds.",
            img:"https://2.bp.blogspot.com/-cHXQMgR77EY/UaxBjA1DPzI/AAAAAAAAAIA/VYUIr1Uy1A8/s1600/yeh-jawani-hai-deewani_1365160991.jpg",
            Date:"15th Nov 2013",
        },
        {
            id:2,
            cat:"Bollywood",
            title:"Animal",
            description:"A son's love for his father. Often away due to work the father is unable to comprehend the intensity of his son's love. Ironically, this fervent love and admiration for his father and family creates conflict between the father and son.",
            img:"https://i.ytimg.com/vi/ZfpA6Mt8BNo/maxresdefault.jpg",
            Date:"1st Dec 2023",
        },
        {
            id:3,
            cat:"Bollywood",
            title:"Pushpa: The Rule - Part 2",
            description:"The clash is on as Pushpa and Bhanwar Singh continue their rivalry in this epic conclusion to the two-parted action drama.",
            img:"https://www.indiatourism.guide/wp-content/uploads/2023/04/pushpa-2-release-date.jpeg",
            Date:"2024",
        },
        {
            id:4,
            cat:"Bollywood",
            title:"Tamasha",
            description:"A boy meets a girl, in Corsica. They decide not to reveal their real name or personality.",
            img:"https://wallpapercave.com/wp/wp6593838.jpg",
            Date:"2015",
        },
        {
            id:5,
            cat:"Bollywood",
            title:"Ae Dil Hai Mushkil",
            description:"This story explores love - the shapes it takes, the ways it changes us and the exhilarating and often terrifying ride it takes us on...",
            img:"https://d1u4oo4rb13yy8.cloudfront.net/article/44230-epvaxvmtiq-1477511371.jpg",
            Date:"2016",
        },
        {
            id:6,
            cat:"Bollywood",
            title:"Tu Jhoothi Main Makkaar",
            description:"Madness ensues when a 'player' in the world of romantic relationships finds a girl who's a worthy opponent...",
            img:"https://assetscdn1.paytm.com/images/cinema/Tu-Jhoothi-Main-Makkaar--app-c44e6a60-7c98-11ed-af72-ef9f24d260fa.jpg",
            Date:"2023",
        },
        {
            id:7,
            cat:"Bollywood",
            title:"Baahubali: The Beginning",
            description:"A child from the Mahishmati kingdom is raised by tribal people and one day learns about his royal heritage...",
            img:"https://th.bing.com/th/id/R.86f15caf43a6a35a0fc38b1478cbcb88?rik=%2fa7qxNW%2fE7jvtQ&riu=http%3a%2f%2fbaahubali.com%2fthe-beginning%2fvideos%2fmedia%2fcategory2%2fmain%2f02.jpg&ehk=NWnYdn%2f4YBe1Z4DgcrTr%2bYdKdEA%2fDrXDbTDaQLxPepk%3d&risl=&pid=ImgRaw&r=0",
            Date:"2015",
        },
        {
            id:8,
            cat:"Bollywood",
            title:"K.G.F: Chapter 2",
            description:"In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes. While his allies look up to him, the government sees him as a threat to law and order.",
            img:"https://wallpapercave.com/wp/wp4019395.jpg",
            Date:"2015",
        },
        {
            id:9,
            cat:"Technology",
            title:"Quantum computing",
            description:"A quantum computer is a computer that takes advantage of quantum mechanical phenomena.",
            img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/IBM_Q_system_%28Fraunhofer_2%29.jpg/1280px-IBM_Q_system_%28Fraunhofer_2%29.jpg",

        },
        {
            id:10,
            cat:"Technology",
            title:"Artificial Intelligence",
            description:"Artificial intelligence (AI) is the intelligence of machines or software...",
            img:"https://singularityhub.com/wp-content/uploads/2018/10/big-data-artificial-intelligence-concept-machine_shutterstock_1178406457.jpg"
        },
        {
            id:11,
            cat:"Technology",
            title:"Synthetic DNA",
            description:"The Covid-19 pandemic has underlined the necessity of biotechnology more than ever. For the Covid-19 research, DNA synthesis is one of the cornerstones.",
            img:"https://explorebiotech.com/ezoimgfmt/i0.wp.com/explorebiotech.com/wp-content/uploads/2021/06/Biotech-Breakthroughs-2021.jpg?resize=1024%2C576&ssl=1&ezimgfmt=ng:webp/ngcb1"
        },
        {
            id:12,
            cat:"Technology",
            title:"5G",
            description:"In telecommunications, 5G is the fifth-generation technology standard for cellular networks, which cellular phone companies began deploying worldwide in 2019...",
            img:"https://cdn.everythingrf.com/news/CTIA_wide_637776543239026392.jpg"
        },
        {
            id:13,
            cat:"Technology",
            title:"Electric vehicle",
            description:"An electric car or electric vehicle (EV) is a passenger automobile that is propelled by an electric traction motor...",
            img:"https://assets.mspimages.in/gear/wp-content/uploads/2023/02/tata-avinya.jpg"
        },
        {
            id:14,
            cat:"Technology",
            title:"STARSHIP",
            description:"SpaceX’s Starship spacecraft and Super Heavy rocket – collectively referred to as Starship – represent a fully reusable transportation system designed to carry both crew and cargo to Earth orbit, the Moon, Mars and beyond...",
            img:"https://www.teslarati.com/wp-content/uploads/2017/09/SpaceX-Moon-Base-SpaceX.jpg"
        },
        {
            id:15,
            cat:"Technology",
            title:"Neural Networks",
            description:"Neural networks are a subset of machine learning that are inspired by biological neural networks.",
            img:"https://th.bing.com/th/id/R.a11583abe6aea471a7fea92eddab8f50?rik=4UZ6iXsqIURrMQ&riu=http%3a%2f%2fdebuglies.com%2fwp-content%2fuploads%2f2018%2f12%2fArtificial-neural-networks.jpg&ehk=wPLxLMfAzJUD57PA6nveIFheAeYWwA0p99D9gVCWX%2fk%3d&risl=&pid=ImgRaw&r=0"
        },
        {
            id:16,
            cat:"Technology",
            title:"Robot",
            description:"A robot is a machine—especially one programmable by a computer—capable of carrying out a complex series of actions automatically...",
            img:"https://th.bing.com/th/id/OIP.z8m-n-EetrRwnUQ0c73NagHaEK?rs=1&pid=ImgDetMain"
        },
        {
            id:17,
            cat:"Hollywood",
            title:"LOKI",
            description:"The mercurial villain Loki resumes his role as the God of Mischief in a new series that takes place after the events of “Avengers: Endgame.”",
            img:"https://images7.alphacoders.com/132/1326003.jpeg",
            Directors: "Anthony RussoJoe Russo",
            Star:"Michael Waldron",
            
        },
        {
            id:18,
            cat:"Hollywood",
            title:"End Game",
            description:"After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.",
            img:"https://www.designbolts.com/wp-content/uploads/2019/01/Avengers-Endgame-2019-Desktop-Movie-Wallpapers-HD-6-1.jpg",
            Directors: "Michael Waldron",
            Star:"Robert Downey Jr.Chris EvansMark Ruffalo...",
            
        },
        {
            id:19,
            cat:"Hollywood",
            title:"Avatar: The Way of Water",
            description:"Avatar: The Way of Water",
            img:"https://th.bing.com/th/id/OIP.GgF3n2EbmoGk1SJ6s2XpBgHaEK?rs=1&pid=ImgDetMain",
            Directors: "James Cameron",
            Star:"Sam Worthington, Zoe Saldana, Sigourney Weaver...",
            
        },
        {
            id:20,
            cat:"Hollywood",
            title:"Pirates of the Caribbean",
            description:"Blacksmith Will Turner teams up with eccentric pirate Captain Jack Sparrow to save his love, the governor's daughter, from Jack's former pirate allies, who are now undead.",
            img:"https://downloadhdwallpapers.in/wp-content/uploads/2018/02/Jack-Sparrow-Pirates-Of-The-Caribbean-Dead-Men-Tell-No-Tales-Wallpaper-Download.jpg",
            Directors: "Gore Verbinski",
            Star:" Johnny Depp",
            
        },
        {
            id:21,
            cat:"Hollywood",
            title:"Joker",
            description:"Joker is a 2019 American neo-noir psychological thriller film directed by Todd Phillips, who also co-wrote the screenplay with Scott Silver...",
            img:"https://www.hdwallpapers.in/download/heath_ledger_joker_4k_5k_hd_superheroes-3840x2160.jpg",
            Directors: "Todd Phillips",
            Star:"Joaquin Phoenix, Robert De Niro, Zazie Beetz...",
            
        },
        {
            id:22,
            cat:"Hollywood",
            title:"Wonder Woman",
            description:"Wonder Woman is a 2017 superhero film based on the DC Comics character of the same name. Produced by Warner Bros. Pictures, DC Films, Atlas Entertainment, and Cruel and Unusual Films, and dis…",
            img:"https://data.1freewallpapers.com/download/wonder-woman-in-batman-v-superman-1280x720.jpg",
            Directors: "Patty Jenkins",
            Star:"Gal Gadot, Chris Pine, Robin Wright",
            
        },
        {
            id:23,
            cat:"Hollywood",
            title:"Black Widow",
            description:"In Marvel Studios' action-packed spy thriller Black Widow, Natasha Romanoff aka Black Widow confronts the...",
            img:"https://th.bing.com/th/id/R.f16cf7758ccd2c102c2d4879fa5ae7a4?rik=TZSV%2fD21wvc%2b6g&riu=http%3a%2f%2fdata.1freewallpapers.com%2fdownload%2fscarlett-johansson-as-the-black-widow-in-the-avengers-1920x1080.jpg&ehk=vcv9pdvghI10j3YxNp%2b7Laq%2bUbCBsvgAEztVtbMHRuc%3d&risl=&pid=ImgRaw&r=0",
            Directors: "Cate Shortland",
            Star:"Scarlett Johansson, Florence Pugh, David Harbour",
            
        },
        {
            id:24,
            cat:"Hollywood",
            title:"The Batman",
            description:"When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city's hidden corruption and question his family's involvement...",
            img:"https://wallpaperaccess.com/full/3871963.jpg",
            Directors: "Matt Reeves",
            Star:"Robert PattinsonZoë KravitzJeffrey Wright",
            
        },
        {
            id:25,
            cat:"Food",
            title:"Peri Peri Chicken",
            description:"This peri peri chicken recipe smothers chicken in a homemade peri peri sauce then bakes or grills them and serves them with extra sauce. It's a quick and easy weeknight meal.",
            img:"https://th.bing.com/th/id/R.eb8a96d47c809d8ad5e908982765e3c4?rik=Yr2xCrpvhMaZ7Q&riu=http%3a%2f%2fspiceandbuds.com%2fwp-content%2fuploads%2f2019%2f08%2fPeri-peri-chicken-1024x576.jpg&ehk=JKzkKeO15sJmBEk5s%2fsiFiZbgsInkFqcn087TXNIP4g%3d&risl=&pid=ImgRaw&r=0",

        },
        {
            id:26,
            cat:"Food",
            title:"Burrito-bowl",
            description:"This peri peri chicken recipe smothers chicken in a homemade peri peri sauce then bakes or grills them and serves them with extra sauce. It's a quick and easy weeknight meal.",
            img:"https://dosbros.com/wp-content/uploads/2019/07/Burrito-bowl.jpg",

        },
        {
            id:27,
            cat:"Food",
            title:"La Pino'z Pizza",
            description:"Pizza, Italian, Pasta, Fast Food.",
            img:"https://entrepreneursbreak.com/wp-content/uploads/2021/02/La-Pinoz-pizza-1140x570.jpeg",

        },
        {
            id:28,
            cat:"Food",
            title:"Chole Bhature",
            description:"Chole bhature is a food dish popular in the Northern areas of the Indian subcontinent. It is a combination of chana masala and bhatura/puri...",
            img:"https://wallpapercave.com/wp/wp9199764.jpg",

        },
        {
            id:29,
            cat:"Food",
            title:"Masala Omelette",
            description:"An omelette is a dish made from eggs, fried with butter or oil in a frying pan...",
            img:"https://images.pexels.com/photos/10756661/pexels-photo-10756661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",

        },
        {
            id:30,
            cat:"Food",
            title:"Mutton Curry",
            description:"Mutton curry is a dish that is prepared from goat meat and vegetables...",
            img:"https://i.ytimg.com/vi/tgaK_vL-73c/maxresdefault.jpg",

        },
        {
            id:31,
            cat:"Food",
            title:"Coastal Seafood",
            description:"13 Best South Indian Coastal Recipes You Must TryFrom Kerala's fish curry to Malabari biryani or Andhra's prawn fry, the coastal fare from south India is a treat for seafood lovers!...",
            img:"https://www.coastalseafoods.com/Assets/swordfishpiccata.jpg",

        },
        {
            id:32,
            cat:"Food",
            title:"Machhi Amritsari",
            description:"Ingredients of Machhi Amritsari 500 gm fish fillets/ fish fingers 50 gm ginger garlic paste 10 gm red chilli powder 20 ml lemon juice 05 gm ajwain 200 gm gram flour 2 eggs 100 gm yoghurt Salt to taste Oil for deep frying...",
            img:"https://4.bp.blogspot.com/-9VeYOLq9CN8/VInPV1Am0kI/AAAAAAAAaFE/l43vNB9rEhA/s1600/DSC05339.JPG",

        },
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