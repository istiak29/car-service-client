import PropTypes from 'prop-types'
import { ImCross } from "react-icons/im";


const CheckOutTable = ({ checkOut, handleDelete }) => {

    const { _id, img, serviceTitle, price, orderDate } = checkOut;

    return (
        <tbody >
            {/* row 1 */}
            <tr>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn rounded-full hover:bg-orange-600"><ImCross></ImCross></button>
                </th>


                <td>
                    <div className="flex items-center gap-3">
                        <div className="avatar">
                            <div className="w-24 rounded">
                                <img src={img} />
                            </div>
                        </div>
                        <div>
                            <div className="font-bold text-2xl">{serviceTitle}</div>
                            <div className="text-sm opacity-50">United States</div>
                        </div>
                    </div>
                </td>


                <td>
                    <span className="font-bold text-lg">${price}</span>
                </td>


                <td>
                    <span className="font-bold text-lg">{orderDate}</span>

                </td>

                <th>
                    <button className="btn bg-orange-500 hover:bg-orange-600 text-white">Pending</button>
                </th>
            </tr>

        </tbody>
    );
};

export default CheckOutTable;

CheckOutTable.propTypes = {
    checkOut: PropTypes.object,
    handleDelete: PropTypes.func,
}