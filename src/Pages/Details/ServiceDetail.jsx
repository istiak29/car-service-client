import { Link, useLoaderData } from "react-router-dom";
import Facility from "../Shared/Facility";
import { GoArrowRight } from "react-icons/go";
import { HiDocumentChartBar } from "react-icons/hi2";
import logo from '../../assets/logo.svg'
import d1 from '../../assets/images/homeCarousel/1.jpg'


const ServiceDetail = () => {

    const serviceDetail = useLoaderData()

    const { _id, title, img, price, description, facility } = serviceDetail;

    return (
        <div>
            <div className="grid grid-cols-3 gap-6">

                {/* left side */}
                <div className="col-span-2">
                    <figure><img src={img} alt="" className="rounded-lg" /></figure>
                    <h2 className="font-bold text-4xl mt-12">{title}</h2>
                    <p className="mt-8 text-zinc-400">{description}</p>
                    <div className="grid grid-cols-2 gap-2 mt-8">
                        {
                            facility.map((item, k) =>
                                <Facility
                                    key={k}
                                    item={item}
                                ></Facility>
                            )
                        }
                    </div>

                    {/* --------------- */}
                    <div className="space-y-7">
                        <h2 className="font-bold text-2xl">3 Simple Steps to Process</h2>
                        <p className="text-zinc-400">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which do not look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there is not anything embarrassing hidden in the middle of text</p>
                        <div className=" flex gap-5 ">
                            <div className=" border rounded-xl text-center p-5 space-y-4">
                                <span className="  p-3 rounded-full text-white bg-orange-600  text-center">01</span>
                                <h2 className="font-bold text-lg">STEP ONE</h2>
                                <p className="text-sm text-zinc-400">It use A Dictionary of over 200</p>
                            </div>
                            <div className="border rounded-xl text-center p-5 space-y-4">
                                <span className=" p-3 rounded-full text-white bg-orange-600  text-center">02</span>
                                <h2 className="font-bold text-lg">STEP TWO</h2>
                                <p className="text-sm text-zinc-400">It use A Dictionary of over 200</p>
                            </div>
                            <div className="border rounded-xl text-center p-5 space-y-4">
                                <span className=" p-3 rounded-full text-white bg-orange-600  text-center">03</span>
                                <h2 className="font-bold text-lg">STEP THREE</h2>
                                <p className="text-sm text-zinc-400">It use A Dictionary of over 200</p>
                            </div>
                        </div>
                    </div>

                    <figure className="my-10"><img src={d1} alt="" className="rounded-lg"/></figure>
                </div>

                {/* Right side */}
                <div className="space-y-8">

                    <div className="bg-base-300 p-10 space-y-5 rounded-md">
                        <h2 className="font-bold text-2xl">Services</h2>
                        <div className="flex justify-between font-semibold px-5 py-2 border bg-white rounded-md hover:bg-orange-600 hover:text-white">Full Car Repair <GoArrowRight></GoArrowRight> </div>
                        <div className="flex justify-between font-semibold px-5 py-2 border bg-white rounded-md hover:bg-orange-600 hover:text-white">Engine Repair <GoArrowRight></GoArrowRight> </div>
                        <div className="flex justify-between font-semibold px-5 py-2 border bg-white rounded-md hover:bg-orange-600 hover:text-white">Automatic Services <GoArrowRight></GoArrowRight> </div>
                        <div className="flex justify-between font-semibold px-5 py-2 border bg-white rounded-md hover:bg-orange-600 hover:text-white">Engine Oil Change <GoArrowRight></GoArrowRight> </div>
                        <div className="flex justify-between font-semibold px-5 py-2 border bg-white rounded-md hover:bg-orange-600 hover:text-white">Battery Charge <GoArrowRight></GoArrowRight> </div>
                    </div>

                    <div className="bg-slate-900 text-white p-10 rounded-lg">
                        <h2 className="font-bold text-2xl">Download</h2>
                        <div className="flex gap-3 items-center  px-5 py-2 ">
                            <div className="text-3xl"><HiDocumentChartBar></HiDocumentChartBar></div>
                            <div>
                                <h2 className="font-semibold">Our Brochure</h2>
                                <h3 className="text-sm text-zinc-400">Download</h3>
                            </div>
                            <div className="ml-14 rounded-lg bg-orange-600 text-3xl  p-4"><GoArrowRight></GoArrowRight></div>
                        </div>

                    </div>

                    <div className="bg-slate-900 text-center p-10 rounded-lg text-white space-y-8">
                        <figure className="flex justify-center  ">
                            <img src={logo} alt="" className="stroke-slate-200" />
                        </figure>
                        <h2>Need Help? We Are Here
                            To Help You</h2>
                        <div className="relative bg-white rounded-lg p-5 text-center pb-10">
                            <h2 className="font-bold text-xl text-black"><span className="text-orange-600">Car Doctor</span> Special</h2>
                            <p className="text-lg text-zinc-400">Save up to <span className="text-orange-600">60% off</span></p>

                            <div className="absolute left-14 right-10  font-bold w-2/3 text-lg px-7 py-4 bg-orange-600 rounded-md">Get A Quote</div>
                        </div>

                    </div>
                    <h2 className="font-bold text-4xl">Price: ${price}</h2>
                    <div className="font-bold text-lg px-7 p-4 text-center  rounded-lg bg-orange-600 text-white"> <Link to={`/chcekout/${_id}`}>Proceed Checkout</Link></div>
                </div>
                
            </div>

           

        </div>
    );
};

export default ServiceDetail;