import PropTypes from 'prop-types';


const Facility = ({ item }) => {

    const { name, details } = item;

    return (
        <div className='border-t-2 border-orange-500 bg-base-300 p-10 rounded-lg'>
            <h2 className='font-bold text-xl text-zinc-600'>{name}</h2>
            <p className='text-zinc-400 mt-2'>{details}</p>
        </div>
    );
};

export default Facility;

Facility.propTypes = {
    item: PropTypes.object
}