import { useContext, useEffect, useState } from "react";
import Popup from "../../../Popup";
import EditAdvertisement from "../EditAdvertisement/EditAdvertisement";
import {axios} from '../../../../axios';
const Advertisement = ({ ad }) => {
    const [openPopup, setOpenPopup] = useState(false)
    // useEffect(() => {
    //     // handleCloseUpdate();
    //     // handleCloseDelete();
    // }, [movie]);
    const DeleteAds = () =>
    {
        axios.delete(`/category/${ad.id}`)
    .then(result => {
                      console.log(result) 
                       
                    })
    .catch( error =>{    
                     console.log(error)  
                               
                     })  
    }
    return (
        <>
            <td>{ad.maPhim} </td>
            <td>{ad.tenQuangCao}</td>
            <td>{ad.noiDung}</td>
            <td>{ad.timeStart}</td>
            <td>{ad.timeEnd}</td>
            <td><button className='btn-edit'onClick={() =>setOpenPopup(true)}><i className='fas fa-pencil-alt'></i></button></td>
            <td><button className='btn-delete' onClick={() => DeleteAds()}><i className='fas fa-trash'></i></button></td>
            <Popup
                title="Edit advertisement"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
            >
               <EditAdvertisement ad={ad}></EditAdvertisement>
            </Popup>
        </>
    );
};

export default Advertisement;
