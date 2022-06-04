import { useContext, useEffect, useState } from "react";
import Popup from "../../../Popup";
import EditCategory from "../EditCategory/EditCategory";
import {axios} from '../../../../axios';
const Category = (props) => {
    const [openPopup, setOpenPopup] = useState(false)
    // useEffect(() => {
    //     // handleCloseUpdate();
    //     // handleCloseDelete();
    // }, [movie]);
    const DeleteCategory = () =>
    {
        axios.delete(`/category/${props.category.id}`)
    .then(result => {
                    props.handleReloadComponent();
                      console.log(result) 
                    })
    .catch( error =>{    
                     console.log(error)  
                               
                     })  
    }
    return (
        <>
            <td>{props.category.id} </td>
            <td>{props.category.tenTheLoai}</td>
            <td>{props.category.trangThai}</td>
            <td><button className='btn-edit'onClick={() =>setOpenPopup(true)}><i className='fas fa-pencil-alt'></i></button></td>
            <td><button className='btn-delete' onClick={() => DeleteCategory()}><i className='fas fa-trash'></i></button></td>
            <Popup
                title="Edit category"
                openPopup={openPopup}
                setOpenPopup={setOpenPopup}
                handleReloadComponent = {props.handleReloadComponent}
            >
               <EditCategory category={props.category}></EditCategory>
            </Popup>
        </>
    );
};

export default Category;
