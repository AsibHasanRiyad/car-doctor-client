import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect( () =>{
        fetch('http://localhost:5008/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className=" text-center space-y-3">
            <h1 className=" text-xl text-[#FF3811] font-semibold">Service</h1>
            <h1 className=" text-5xl font-bold">Our Service Area</h1>
            <p className=" text-base text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomized <br /> words which do not look even slightly believable.</p>
            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
                {
                    services.map(service => <Service service={service} key={service._id}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;