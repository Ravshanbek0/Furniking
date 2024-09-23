import React from 'react'
import '../Card.css'
import { Link, useParams } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import { TbShoppingBagPlus } from "react-icons/tb";
import { IoIosRefresh } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";

function Shop({ shop_data }) {
    return (
        <div className="container">
            <div className='card_box'>
                {shop_data?.map((item) => {
                    return <div key={item.id} className="card">
                        <div className="logic">
                            <span className={item.new ? "new " : "new active"}>New</span>
                            <span className={item.sale ? "new sale" : "new sale active"}>Sale</span></div>

                        <Link to={`/element/${item.id}`} className="card_img">
                            <img src={item.image_url} alt="" className="card_img" />
                        </Link>
                        <p className="categroy">{item.category}</p>
                        <p className="name">{item.name}</p>
                        <div className="price">
                            <p className="price1">{item.price} <del>{item.del}</del></p>
                            <img src="./public/card/ratings.png" alt="" />
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default Shop