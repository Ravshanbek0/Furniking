import React from 'react'
import './Product.css'
import { useParams } from 'react-router-dom'

function Product({data}) {
    const {id}=useParams()
    const newDatas=data.filter((item)=>{
        return item.id==id
    })
    console.log(newDatas);
    return (
        <div className='product'>
            <div className="container">
                <div className="porduct_box">
                    <div className="main_img">
                        <img src={newDatas[0].image_url} alt="" />
                    </div>
                    <div className="texts">
                        <p className="category"><span className="span_product">Category:</span>{newDatas[0].category} </p>
                        <h1 className="name_title"><span className="span_product">Name:</span>{newDatas[0].name}</h1>
                        <span className={newDatas[0].new ? "new new_productR" : "new active"}>New</span>
                        <span className={newDatas[0].sale ? "new sale new_productR" : "new sale active"}>Sale</span>
                        
                        <span className="span_product price_icon_span">Prices:</span>
                        <div className="price">{newDatas[0].price} <del>{newDatas[0].del}</del>  <button>Buy now</button></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product