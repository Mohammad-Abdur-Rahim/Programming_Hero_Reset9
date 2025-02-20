import profile from "../../assets/img/logo.png";
const Footer = () => {
    return (
        <>



            <div className="bg-base-200 pt-20 ">
                <div
                    className="hero bg_container w-4/5 mx-auto rounded text-black  bg-white pt-10 pb-10 mtClass ">

                    <div className="hero-content  text-center">
                        <div className="space-y-10 ">

                            <h1 className="mb-5 text-3xl font-bold">Subscribe to our Newsletter</h1>
                            <p className="mb-10 text-xl">
                                Get the latest updates and news right in your inbox!
                            </p>
                            <div className="space-y-5 md:space-y-0">
                                <input
                                    type="text"
                                    placeholder="Enter Your Email"
                                    className="input input-bordered join-item md:w-100  bg-white  border border-gray-400" />
                                <button className="btn bg-[#F1BE60] join-item md:w-50  text-black ml-5">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center pt-10 pb-5 "><img className="w-25" src={profile} alt="" /></div>
            </div>
            {/* Main Footer Part Here ------------------------------------------------------------------------ */}
            <footer className="footer flex flex-col sm:flex-row justify-around bg-base-200 text-base-content p-10">
                <nav className="mb-6 sm:mb-0">
                    <h6 className="font-bold text-xl text-white">About Us</h6>
                    <p className="max-w-80 text-[#FFFFFF99]">We are a passionate team <br /> dedicated to providing the best services to our customers.</p>
                </nav>
                <nav className="mb-6 sm:mb-0">
                    <h6 className="font-bold text-xl text-white">Quick Links</h6>
                    <a className="text-[#FFFFFF99]">Home</a>
                    <a className="text-[#FFFFFF99]">Service</a>
                    <a className="text-[#FFFFFF99]">About</a>
                    <a className="text-[#FFFFFF99]">Contact</a>
                </nav>
                <form>
                    <h6 className="font-bold text-xl text-white">Subscribe</h6>
                    <fieldset className="form-control md:w-full sm:w-80">
                        <label className="label">
                            <span className="label-text pb-5">Subscribe to our newsletter for the <br /> latest updates. </span>
                        </label>
                        <div className="flex flex-wrap w-full gap-2">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered w-1/2 sm:w-auto md:w-full" />
                            <button className="btn bg-[#F1BE60] w-1/2 sm:w-auto md:w-full text-black">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </footer>


        </>

    );
};

export default Footer;