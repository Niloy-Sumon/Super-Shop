import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import VerticalMenu from '../../Order/VerticalMenu/VerticalMenu';
import ManageInventory from './ManageInventory/ManageInventory';

const ManageProduct = () => {
    const [manage, setManage] = useState([])
    useEffect(() => {
        const url = 'https://hidden-thicket-93837.herokuapp.com/products'
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setManage(data)
                console.log(data)
            })
    }, [])
    const handleDelete = id => {
        fetch(`https://hidden-thicket-93837.herokuapp.com/delete/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                
            })
            window.location.reload(false);
    }
    return (
        <div>
            <div className='h-100%'>
                <div className="row ">
                    <div className="col-md-4" style={{ background: 'black' }}>
                        <VerticalMenu></VerticalMenu>
                    </div>
                    <div className='col-md-8'>
                        <h1>Manage Products</h1>

                        <ManageInventory
                            manage={manage}
                            handleDelete={handleDelete}
                        ></ManageInventory>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageProduct;