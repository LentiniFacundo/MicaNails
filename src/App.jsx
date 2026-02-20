import Header from "./Components/Header/Header"
import NavBar from "./Components/NavBar/NavBar"
import MainContainer from "./Components/MainContainer/MainContainer"
import Home from "./Components/Home/Home"
import PortfolioContainer from "./Components/Portfolio/PortfolioContainer"
import AboutMe from "./Components/AboutMe/AboutMe"
import Comments from "./Components/Comments/Comments"
import Footer from "./Components/Footer/Footer"
import Contact from "./Components/Contact/Contact"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Reservations } from "./Components/Reservations/Reservations"
import Error404 from "./Components/404/Error404"
import ScrollToTop from "./utils/ScrollToTop"
import AdminDashBoard from "./Components/AdminDashboard/AdminDashBoard"

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={
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
        } />
        <Route path="/reservations/*" element={<Reservations/>} />
        <Route path="*" element={<Error404/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
