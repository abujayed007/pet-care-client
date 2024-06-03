import About from "./About";
import Banner from "./Banner";
import Category from "./Category";
import Pets from "./Pets";





const Home = () => {
    return (
        <div>
          <Banner/>
          <Category/>
          <About/>
          <Pets/>
        </div>
    );
};

export default Home;