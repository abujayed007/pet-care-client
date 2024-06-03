import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import cat from '../../assets/pet images/cat.jpg'
import dog from '../../assets/pet images/dog2.jpg'
import rabbit from '../../assets/pet images/rabbit.jpg'
const Banner = () => {
    return (
        <div className='container mx-auto'>
            <Carousel >
                <div>
                    <img  src={cat} />
                </div>
                <div>
                    <img  src={dog}/>
                </div>
                <div>
                    <img  src={rabbit} />
                </div>
            </Carousel>
        </div>
    );
};
export default Banner;