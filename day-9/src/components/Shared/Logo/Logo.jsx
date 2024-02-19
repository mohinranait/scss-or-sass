import image from '../../../assets/images/logo.png';

const Logo = () => {
    return <div className='flex items-center gap-3 text-white'>
        <img className=' h-14 w-14 rounded-full' src={image} alt="" />
        <h3 className=' text-xl font-kaushan'>Online Shop</h3>
    </div>
}

export default Logo