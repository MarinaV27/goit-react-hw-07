import css from "./Contact.module.css"
import { FaUser } from "react-icons/fa6";
import { MdCall } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contactsOps";


export default function Contact( { name, number, id } ) {
    const dispatch = useDispatch();
    const handleDelete = () => {dispatch(deleteContact(id))}
    return (
        <div className={css.container}> 
            <div className={css.contact}>
               <p className={css.text}><FaUser />  {name}</p>
               <p className={css.text}><MdCall />  {number}</p>
            </div>
            <button className={css.btn} onClick={handleDelete}>Delete</button>
        </div>
       
    )
}
