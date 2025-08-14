import Hero from "../components/Hero"
import Landsecont from "../components/landsecont"
import Landthird from "../components/landthird"
import Landfourth from "../components/landfourth"
import Landfifth from "../components/landfifth"
import Landsix from "../components/landsix"
import Landseven from "../components/landseven"

const Home = () => {
  return (
    <div>
     

      <Hero />
   
      <Landsecont />
      <Landthird />
     <Landfourth />
     <Landfifth />
     <Landsix />
     <div className="mb-0 sm:mb-0 lg:mb-0 xl:mb-20">
       <Landseven />
     </div>
    </div>
  )
}

export default Home