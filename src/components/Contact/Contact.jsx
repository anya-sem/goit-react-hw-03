import { IoIosPerson } from "react-icons/io";
import { IoIosCall } from "react-icons/io";

export const Contact = ({ id, name, number, onDelete}) => {
    return (
        <div>
            <IoIosPerson />
            <p>{name}</p>
            <IoIosCall />
            <p>{number}</p>
            <button onClick={()=> onDelete(id)}>Delete</button>
        </div>
    )
}