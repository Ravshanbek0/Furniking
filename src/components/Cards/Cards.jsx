import React, { useState } from 'react'
import './Card.css'
import { Link, NavLink } from 'react-router-dom'
import { FaRegHeart } from "react-icons/fa";
import { TbShoppingBagPlus } from "react-icons/tb";
import { IoIosRefresh } from "react-icons/io";
import { FaRegEye } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

function Cards({ data ,setData,shop_data,setShop_data}) {
    const [likeData,setLikeData]=useState(data)
    const [item_id,setItem_id]=useState()
    const [dataSh,setDataSh]=useState([])
    const [heart,setHeart] =useState(true)
    const [id,setId]=useState()
    function setItem_idFun(id) {
        const newShop=data.filter((item)=>{
            return item.id==id
        })
        setShop_data([...shop_data,newShop[0]])
    }
    function newFun(params) {

        const data7=likeData.filter((item)=>{
            return item.new==true
        })
        setData(data7)
    }
    function saleFun(params) {
        const data9=likeData.filter((item)=>{
            return item.sale==true
        })
        setData(data9)
    }
    function topFun(params) {
        setData(likeData)
    }
    return (
        <div className='cards'>
            <div className="container">
                <h1 className="cards_title">TRENDING</h1>
                <ul className="card_p">
                    <li><NavLink  onClick={topFun}>Top Products </NavLink></li>
                    <li><NavLink  onClick={newFun}>New Arrivals</NavLink></li>
                    <li><NavLink  onClick={saleFun}>Best Sellers</NavLink></li>
                </ul>
                <div className="card_box">
                    {data?.map((item) => {
                        return <div key={item.id} className="card">
                            <div className="card_modal">
                                <div className="heart_icon"  onClick={()=>{
                                    setId(item.id)
                                    setHeart(!heart)
                                }}>
                                    {heart ? <FaRegHeart /> :  <FaHeart className='yurak'/>}
                                </div>                                                                                                                                                                                                                                                                                                                                                  
                                <div className="heart_icon" onClick={()=>{setItem_idFun(item.id)}}>
                                    <TbShoppingBagPlus />
                                </div>
                                <div className="heart_icon">
                                    <IoIosRefresh />
                                </div>
                                <div className="heart_icon">
                                    <FaRegEye />
                                </div>
                            </div>
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
                    {/* <div className="card">
                        <span className="new">New</span>
                        <span className="new sale">Sale</span>
                        <img src="./public/card/card1.png" alt="" className="card_img" />
                        <p className="categroy">CHAIR</p>
                        <p className="name">Minimal LCD chair</p>
                        <div className="price">
                            <p className="price1">$180 <del>250$</del></p>
                            <img src="./public/card/ratings.png" alt="" />
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    )
}

export default Cards