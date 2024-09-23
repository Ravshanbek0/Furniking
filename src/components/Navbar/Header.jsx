import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import './Header.css'
import { AiOutlineShopping } from "react-icons/ai";
import { IoIosNotificationsOutline } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { BiMenuAltLeft } from "react-icons/bi";
import Cards from '../Cards/Cards';

function Header({data,setNav_id,nav_id,setShop_data,shop_data,setData}) {
    const [mainImg, setMainImg] = useState("./header/mainHead.png")
    return (

        <header className='header'>
            <div className="header_info">
                <div className="container">
                    <div className="header_info_text">
                        <h1 className="head_green_title"><BiMenuAltLeft /> ALL COLLECTIONS</h1>
                        <ul>
                            <li><a href="">HOME</a></li>
                            <li><a href="">SHOP</a></li>
                            <li><a href="">BLOG</a></li>
                            <li><a href="">ABOUT</a></li>
                            <li><a href="">CONTACT US</a></li>
                        </ul>
                    </div>

                </div>
                
            </div>
            <div className="container">
                    <div className="header_main_blog">
                        <div className="header_main_left">
                            <h2>All</h2>
                            <h2>New Arrivals</h2>
                            <h2>Hot Sale</h2>
                            <h2>Furniture</h2>
                            <h2>Amrature</h2>
                            <h2>Tabble</h2>
                            <h2>Chair</h2>
                            <h2>Sofa</h2>
                            <h2>Mirrors</h2>
                            <h2>Stools</h2>
                            <h2>Benches</h2>
                        </div>
                        <div className="header_main_right">
                            <div className="head_main_texts">
                                <p>TOP COLLECTIONS 2022</p>
                                <h1>We Serve Your
                                    Dream Furniture</h1>
                                <h5>Get 50% off all products</h5>
                                <button>SHOP NOW</button>
                            </div>
                            <div className="head_main_imgs">
                                <img src={mainImg} alt="" className="hMain_img" />
                                <div className="hIMgs">
                                    <div onClick={() => { setMainImg("./header/head1.png") }} className="hLittle1">
                                        <img src="./header/head1.png" alt="" />
                                        <p>120$</p>
                                        <span>Office Desk Chair</span>
                                    </div>
                                    <div onClick={() => { setMainImg("./header/head2.png") }} className="hLittle1">
                                        <img src="./header/head2.png" alt="" />
                                        <p>180$</p>
                                        <span>Home Alisa Sofa</span>
                                    </div>
                                    <div onClick={() => { setMainImg("./header/head3.png") }} className="hLittle1">
                                        <img src="./header/head3.png" alt="" />
                                        <p>250$</p>
                                        <span>Modern Chair</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="xizmatlar">
                        <div>
                            <img src="./xizmatlar/xizmatlar1.png" alt="" />
                            <p><span>Free Shipping</span><br />Orders over $100</p>
                        </div>
                        <div>
                            <img src="./xizmatlar/xizmatlar3.png" alt="" />
                            <p><span>Smart Gift Card</span><br />Buy $1000 to get card</p>
                        </div>
                        <div>
                            <img src="./xizmatlar/xizmatlar4.png" alt="" />
                            <p><span>Quick Payment</span><br />100% secure payment</p>
                        </div>
                        <div>
                            <img src="./xizmatlar/xizmatlar2.png" alt="" />
                            <p><span>24/7 Support</span><br />Quick support</p>
                        </div>
                    </div>
                    <div className="reklama">
                        <div className="reklama_left">

                            <h1 className='reklamah1'>Modern Furniture Collections</h1>
                            <p className='reklamap'>Starting from $500</p>
                            <span className='reklamas'>Read more-</span>
                        </div>
                        <div className="reklama_right">
                            <div className="reklama_left_boxes ll">
                                <h1 className='reklamah1'>Geometric Bookcase</h1>
                                <p className='reklamap'>Up to 20% discount</p>
                                <span className='reklamas'>Read more-</span>
                            </div>
                            <div className="reklama_left_boxes rr">
                                <h1 className='reklamah1'>Minimal Sofa collections </h1>
                                <p className='reklamap'>Sale upto 40% discount</p>
                                <span className='reklamas'>Read more-</span>
                            </div>
                        </div>
                    </div>
                </div>
                <Cards  setData={setData} setShop_data={setShop_data} shop_data={shop_data} data={data} />
        </header>
    )
}

export default Header