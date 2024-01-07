import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {

    const [services, setServices] = useState([]);

    useEffect( () => {
        fetch('services.json')
            .then(response => response.json())
            .then(data => setServices(data))
            // .catch(error => console.error(error))
    }, []);


    return (
        <div className="mt-10">
            <div className="space-y-4 text-center w-1/2 mx-auto">
                <h2 className="font-bold text-xl text-rose-600">Service</h2>
                <h2 className="font-bold text-3xl ">Our Service Area</h2>
                <p className="">
                     {/* eslint-disable-next-line react/no-unescaped-entities */}
                    the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-3 lg:grid-cols-3 lg:gap-5 mt-12">
                
                {
                    services.map(service => 
                        <ServiceCard
                            key={service._id}
                            service={service}
                        ></ServiceCard>
                        )
                }
            </div>
        </div>
    );
};

export default Services;