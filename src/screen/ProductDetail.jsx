import { useState } from "react";
import Detail from "../component/Details/Detail";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Spinner from '../component/Spinner';


const ProductDetail = () => {

  const [productDetail, setproductDetail] = useState({});
  const [loading, setLoading] = useState(false);

  const {id} = useParams();
  useEffect(()=>{
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
    .then(res => res.json())
    .then(data => setproductDetail(data));
  },[]);

  setTimeout(()=>{
    setLoading(false)
  },500)

  return (
    <div>
      {loading && <Spinner />}
     {Object.keys(productDetail).length > 0 && <Detail detail={productDetail}/>}
    </div>
  )
}

export default ProductDetail;