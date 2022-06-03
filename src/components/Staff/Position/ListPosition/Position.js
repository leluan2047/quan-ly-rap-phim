import { useContext, useEffect, useState } from "react";
import Popup from "../../../Popup";
import EditPosition from "../EditPosition/EditPosition";
import {axios} from '../../../../axios';
const Position = (props) => {
    const [openPopup, setOpenPopup] = useState(false)
    // useEffect(() => {
    //     // handleCloseUpdate();
    //     // handleCloseDelete();
    // }, [movie]);
    const DeletePosition = () =>
    {
        axios.delete(`/positions/${props.position.id}`)
    .then(result => {
                        props.handleReloadComponent()
                      alert(result.data.message) 
                       
                    })
    .catch( error =>{    
                     alert(error.response.data.message)  
                               
                     })  
    }
    return (
        <>
            <td>{props.position.id} </td>
            <td>{props.position.tenCV}</td>
            <td><button className='btn-edit'onClick={() =>setOpenPopup(true)}><i className='fas fa-pencil-alt'></i></button></td>
            <td><button className='btn-delete' onClick={() => DeletePosition()}><i className='fas fa-trash'></i></button></td>
            <Popup
                title="Edit position"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                handleReloadComponent = {props.handleReloadComponent}
            >
               <EditPosition position={props.position}></EditPosition>
            </Popup>
        </>
    );
};

export default Position;
