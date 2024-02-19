import Carousel from "./carousel/Carousel";
import Category from "./category/Category";
import Discount from "./discount/Discount";

import Review from "./review/Review";
import ShirtCart from "./shirt cart/ShirtCart";
import ShoesCart from "./shoesCart/ShoesCart";
import Shop3Items from "./shop-3-items/Shop3Items";
import Shop5items from "./shopbyoffer/Shop5items";
import TshirtCart from "./t-shirt cart/TshirtCart";


const Home = () => {
    return (
        <div className="container mx-auto">
            <Carousel />
            <Category></Category>
            <TshirtCart></TshirtCart>
            <Shop3Items></Shop3Items>
            <ShoesCart></ShoesCart>
            <Shop5items></Shop5items>
            <ShirtCart></ShirtCart>
            <Discount></Discount>
            {/* <Review></Review> */}
        </div>
    );
};

export default Home;