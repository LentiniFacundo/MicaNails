import Header from "./Components/Header/Header"
import NavBar from "./Components/NavBar/NavBar"
import MainContainer from "./Components/MainContainer/MainContainer"
import Home from "./Components/Home/Home"
import PortfolioContainer from "./Components/Portfolio/PortfolioContainer"
import AboutMe from "./Components/AboutMe/AboutMe"
import Comments from "./Components/Comments/Comments"
import Footer from "./Components/Footer/Footer"
import Contact from "./Components/Contact/Contact"

function App() {

  return (
    <>
      <Header title={"Mica's Nails"}>
        <NavBar/>
      </Header>
        <MainContainer>
          <Home title={'Eleva tu estilo personal'} description={'Arte y cuidado profesional para tus manos con un toque de elegancia y sofisticación.'}/>
          <PortfolioContainer title={'Nuestros estilos'}/>
          <AboutMe />
          <Comments />
          <Contact />
        </MainContainer>
        <Footer />
    </>
  )
}

export default App
