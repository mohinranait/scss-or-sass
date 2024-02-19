import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as ReactCarousel } from 'react-responsive-carousel'

import banner1 from '../../../assets/images/banner1.png';
import banner2 from '../../../assets/images/banner2.png';
import banner3 from '../../../assets/images/banner3.png';
import banner4 from '../../../assets/images/banner4.png';


const Carousel = () => {
    return <div>
        <ReactCarousel autoPlay infiniteLoop showThumbs={false}>
            <div>
                <img src={banner2} alt="" />
            </div>
            <div>
                <img src={banner1} alt="" />
            </div>
            <div>
                <img src={banner3} alt="" />
            </div>
            <div>
                <img src={banner4} alt="" />
            </div>
        </ReactCarousel>
    </div>
}

export default Carousel