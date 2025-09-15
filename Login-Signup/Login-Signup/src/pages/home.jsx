import About from "../components/About"
import Categories from "../components/Categories"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Offers from "../components/Offers"
import Product from "../components/product"

function Home()
{
    return(
        <>
            <Header></Header>
            <Hero></Hero>
            <Product></Product>
            <Categories></Categories>
            <Offers></Offers>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
        </>
    )
}

export default Home