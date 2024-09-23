import React, { useState } from 'react'
import Header from './components/Navbar/Header'
import Navbar from './components/Navbar/Navbar'
import Cards from './components/Cards/Cards'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from './pages/Product'
import Shop from './components/Cards/Shop/Shop'

function App() {
  const [shop_data,setShop_data]=useState([])

  const [data, setData] = useState([
    {
      id: 1,
      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIPRN152msTIJfvRVDAPvAYPqzEKFlc-f9fYDMgTuJ7VW2wcQXYC8tOLklusWn8CpXje8&usqp=CAU",
      category: "CHAIR",
      name: "Minimal LCD chair",
      price: "$180",
      del: "250$",
      new:true,
      sale:true
    },
    {
      id: 2,
      new:true,
      sale:false,

      image_url: "https://www.pngall.com/wp-content/uploads/4/Luxury-Couch-PNG-Picture.png",
      category: "CHAIR",
      name: "Minimal iconic chair",
      price: "$120",
      del: "$150"
    },
    {
      id: 3,
      sale:true,

      image_url: "../card/card3.png",
      category: "CHAIR",
      name: "Dining chairs",
      price: "$100",
      del: "$120",
      new:false,

    },
    {
      id: 4,
      new:false,
      sale:false,

      image_url: "../card/card4.png",
      category: "CAR",
      name: "Buskbo armchair ",
      price: "$130",
      del: "$150"
    },
    {
      id: 5,
      new:true,
      sale:true,

      image_url: "../card/card5.png",
      category: "MODERN",
      name: "Modern chairs",
      price: "$100",
      del: "$120"
    },
    {
      id: 6,
      new:false,
      sale:false,

      image_url: "../card/card6.png",
      category: "CHAIR",
      name: "Plastic dining chair",
      price: "$130",
      del: "$150"
    },
    {
      id: 7,
      new:false,
      sale:false,

      image_url: "../card/card7.png",
      category: "wood",
      name: "Minimal Wood chair",
      price: "180$",
      del: "250$"
    },
    {
      id: 8,
      new:true,
      sale:false,

      image_url: "../card/card8.png",
      category: "CHAIR",
      name: "Elegent wood chair",
      price: "$120",
      del: "$150"
    },
    {
      id: 9,
      new:false,
      sale:true,

      image_url: "https://mysleepyhead.com/media/catalog/product/m/e/menu_coffee_table.jpg",
      category: "CHAIR",
      name: "Elegent wood chair",
      price: "$90",
      del: "$150"
    },
    {
      id: 10,
      new:false,
      sale:true,

      image_url: "data:image/jpeg;base64,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",
      category: "TABLE",
      name: "Blox Dining Table",
      price: "$120",
      del: "$150"
    },
    {
      id: 11,
      new:true,
      sale:false,

      image_url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxe0Vw10LZRdObHaiueNSjmljMSPGMUOzP3A&usqp=CAU",
      category: "SOFA",
      name: "Black Grey Sofa",
      price: "$220",
      del: "$300"
    },
    {
      id: 12,
      new:false,
      sale:true,

      image_url: "https://www.worldmarket.com/dw/image/v2/BJWT_PRD/on/demandware.static/-/Sites-wm-master-catalog/default/dw28de0ab4/images/large/115393_XXX_v1.jpg?sw=768&sh=768&sm=fit&sfrm=jpg&q=80",
      category: "SOFA",
      name: "Track Arm Sofa",
      price: "$420",
      del: "$550"
    },
  ])
  return (
    <div>
      <BrowserRouter>
        <Navbar  shop_data={shop_data}/>
        <Routes>
          <Route path='/' element={<Header setData={setData} shop_data={shop_data} setShop_data={setShop_data}  data={data} />} />
          <Route path='/element/:id' element={<Product data={data}/>} />
          <Route path='/card' element={<Shop shop_data={shop_data} data={data} />}/>
        </Routes>
      </BrowserRouter>

    </div>
  )
}

export default App