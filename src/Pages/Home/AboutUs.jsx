/* eslint-disable react/no-unescaped-entities */
import person from '../../assets/images/about_us/person.jpg'
import parts from '../../assets/images/about_us/parts.jpg'

const AboutUs = () => {
    return (
        <div>
            <div className="hero min-h-screen ">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 relative'>
                        <img src={person} className=" w-3/4 rounded-lg shadow-2xl" />
                        <img src={parts} className="absolute right-5 top-1/2  w-2/3  rounded-lg  border-8 border-white shadow-2xl" />
                    </div>
                    <div className='lg:w-1/2 space-y-5 p-4'>
                        <h3 className='font-bold text-md text-rose-600'>About Us</h3>
                        <h1 className="text-5xl font-bold mb-2">We are qualified & of experience in this field</h1>
                        <p className="">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                        
                        <p className="">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
                        <button className="btn bg-rose-600 hover:bg-rose-700 text-white font-bold">Get More info</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;