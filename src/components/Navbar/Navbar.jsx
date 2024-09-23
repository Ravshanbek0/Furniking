import React, { useState } from 'react'
import './Header.css'
import { AiOutlineShopping } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiCircleRemove } from "react-icons/ci";
import { Link } from 'react-router-dom';

function Navbar({ shop_data }) {
    const [user, setUser] = useState("User name")
    const [user2, setUser2] = useState("")
    const [modalA, setModalA] = useState(true)
    function formFun(e) {
        e.preventDefault()
        setModalA(!modalA)
        setUser(user2)

    }
    return (
        <div>
            <div className={modalA ? "modal_nav active" : "modal_nav "}>
                <form onSubmit={formFun} className="modal_box-nav">
                    <CiCircleRemove onClick={() => { setModalA(!modalA) }} className='icon_x' />
                    <input onChange={(e) => { setUser2(e.target.value) }} type="text" placeholder='Ismingizni kirinting' />
                    <input type="text" placeholder='Login' />
                    <input type="number" placeholder='Parol' />
                    <button>Join</button>
                </form>
            </div>
            <div className="nav">
                <nav className='container'>
                    <div className="nav_bar">
                        <Link to={'/'}><img src="./public/logo.png" alt="" className="logo" /></Link>
                        <div className="nav_search">
                            <input type="text" placeholder='Search here' />
                            <select name="" id="">
                                <option value="">Categories</option>
                            </select>
                            <div className="nav_search_icon">
                                <CiSearch />
                            </div>
                        </div>
                        <p>{user}</p>
                        <div className="nav_icons">
                            <Link className='shop_data' to={`/card`}> <span>{shop_data.length}</span> <AiOutlineShopping className='' /></Link>
                            <IoIosNotificationsOutline className='' />
                            <CiUser className='' onClick={() => { setModalA(false) }} />
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    )
}

export default Navbar