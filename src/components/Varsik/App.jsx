import React, {useState, useEffect} from 'react'
import Product from './Product';

export default function App() {
    // const [isShow, setIsShow] = useState(true);

    // const handleClick =() => {
    //     setIsShow(!isShow)
    // }

    // const [imgUrl, setImgUrl] = useState({
    //     path:"https://media.istockphoto.com/id/1363837547/photo/white-peony-flower.jpg?b=1&s=170667a&w=0&k=20&c=szHTLJAH3D2nRSOduVJ90EIdpQf8OIJsP2dl_RumYQI="
    // })
    // const s = {
    //     "backgroundImage" : `url(${imgUrl.path})`,
    //     "width": "200px",
    //     "height": "200px"
    // }

    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = () => {
            fetch("https://fakestoreapi.com/products").then(res => res.json()).then(json => setData(json))
        }
        getData()
    }, [])


  return (
    <div>
        {data.map(product => {
            return <Product key={product.id} product={product} />
        })
        }

        {/* {
            isShow ? <h1>Lorem, ipsum.</h1> : null
        }
        <button onClick={handleClick}>{isShow ? "hide" : "show"}</button> */}


        {/* <img src={imgUrl.path} alt="" />
        <div style={s}></div> */}
    </div>
  )
}
