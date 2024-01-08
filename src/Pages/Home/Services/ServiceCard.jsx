import PropTypes from 'prop-types';
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {

    const { _id, title, img, price } = service;

    return (
        <div className="card  border">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body ">
                <h2 className="card-title font-bold text-2xl">{title}</h2>
                
                <div className="card-actions items-center mt-4 text-rose-600">
                    <p className='font-bold text-md '>Price: ${price}</p>
                    <Link to={`/servicedetail/${_id}`}><GoArrowRight></GoArrowRight></Link>
                </div>
            </div>
        </div>

    );
};

export default ServiceCard;

ServiceCard.propTypes = {
    service: PropTypes.object
}
