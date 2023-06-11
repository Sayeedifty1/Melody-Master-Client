import img from '../../../assets/logo.png'


const Footer = () => {
    return (

        <><footer className="footer p-10 dark:bg-slate-800 dark:text-white bg-base-200 text-base-content">
            <div>
               <img className='w-[200px]' src={img} alt="" />
                <p>Providing reliable tech since 1992</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <a className="link link-hover">About us</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Newsletter</span>
                <div className="form-control w-80">
                    <label className="label">
                        <span className="label-text">Enter your email address</span>
                    </label>
                    <div className="relative">
                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                        <button className="btn  bg-yellow-600 absolute top-0 right-0 rounded-l-none">Subscribe</button>
                    </div>
                </div>
            </div>
        </footer>
            <footer className="footer footer-center p-4 bg-base-300 dark:bg-slate-700 text-base-content dark:text-white">
                <div>
                    <p>Copyright © 2023 - All right reserved by ACME Industries Ltd</p>
                </div>
            </footer>
        </>

    );
};

export default Footer;