import { useContext, useEffect, useState } from "react";
import Popup from "../../../Popup";
import EditAdvertisement from "../EditAdvertisement/EditAdvertisement";
import {axios} from '../../../../axios';
const Advertisement = (props) => {
    const [openPopup, setOpenPopup] = useState(false)
    const DeleteAds = () =>
    {
        axios.delete(`/advertisement/${props.ad.id}`)
    .then(result => {
                    props.handleReloadComponent();
                      alert(result.data.message) 
                       
                    })
    .catch( error =>{    
                alert(error.message)  
                               
                     })  
    }
    return (
        <>
            <td>{props.ad.phim.tenPhim} </td>
            <td>{props.ad.tenQuangCao}</td>
            <td>{props.ad.noiDung}</td>
            <td>{props.ad.timeStart}</td>
            <td>{props.ad.timeEnd}</td>
            <td><button className='btn-edit'onClick={() =>setOpenPopup(true)}><i className='fas fa-pencil-alt'></i></button></td>
            <td><button className='btn-delete' onClick={() => DeleteAds()}><i className='fas fa-trash'></i></button></td>
            <Popup
                title="Edit advertisement"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                handleReloadComponent = {props.handleReloadComponent}
            >
               <EditAdvertisement ad={props.ad}></EditAdvertisement>
            </Popup>
        </>
    );
};

export default Advertisement;
