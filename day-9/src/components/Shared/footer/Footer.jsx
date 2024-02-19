import Logo from "../Logo/Logo";


const Footer = () => {
    return (
        <div>
            <footer className="footer text-white  p-10 bg-[#444852] ">
                <aside className="flex items-center gap-4">
                    <Logo />
                </aside>
                <nav>
                    <header className="text-xl font-medium pb-4">Our Service</header>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Shop</a>
                    <a className="link link-hover">About Us</a>
                </nav>
                <nav>
                    <header className="text-xl font-medium pb-4">Contact us</header>
                    <a className="link link-hover">(+88) 1234 567887</a>
                    <a className="link link-hover">shop@online.com</a>
                </nav>
                <nav>
                    <header className="text-xl font-medium pb-4">Social</header>
                    <a className="link link-hover">Facebook</a>
                    <a className="link link-hover">You Tube</a>
                </nav>
                <nav>
                    <header className="text-xl font-medium pb-4">Instagram</header>
                    <div className="flex gap-4">
                        <a href="https://www.instagram.com/asafayet21/">
                            <img src="https://i.ibb.co/bPy3fwT/Rectangle-34624343.png" alt="" />
                        </a>
                        <a href="https://www.instagram.com/asafayet21/">
                            <img src="https://i.ibb.co/Z2Yqtjv/Rectangle-34624344.png" alt="" />
                        </a>
                    </div>
                    <div className="flex pt-1 gap-4">
                        <a href="https://www.instagram.com/asafayet21/">
                            <img src="https://i.ibb.co/Qc1vj2y/Rectangle-34624345.png" alt="" />
                        </a>
                        <a href="https://www.instagram.com/asafayet21/">
                            <img src="https://i.ibb.co/wJqgfVx/Rectangle-34624346.png" alt="" />
                        </a>
                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;