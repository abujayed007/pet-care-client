import About from "./About";
import Banner from "./Banner";
import Category from "./Category";
import Products from "./Products";



const Home = () => {
    return (
        <div>
          <Banner/>
          <Category/>
          <About/>
          <Products/>
        </div>
    );
};

export default Home;