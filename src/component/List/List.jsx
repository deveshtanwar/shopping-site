import { useEffect, useState } from 'react';
import Items from '../Items/Items'
import './list.css';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner';

const List = () => {

  const [mobile, setMobile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(()=>{
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
    .then(res=>res.json())
    .then(data => setMobile(data))
  },[])

  setTimeout(()=>{
    setLoading(false)
  },500)

  const searchHandler = (val) => { 
    console.log(val);
  }
  return(
    <div className='container mt-3'>
      <div className='list-header mx-2'>
          <div style={{fontSize:"20px", fontFamily:"arial"}}>Available Items</div>
          <input type='text' className='search-items' placeholder='search items'
          onChange={(e)=>{setSearch(e.target.value)}}/>
      </div>
      <hr />
      {loading && <Spinner />}
      <div className='list-items'>
        {mobile.length > 0 && mobile.filter((item)=>{
          return search.toLowerCase() === ""? item : item.title.toLowerCase().includes(search);
        })
        .map((val, index)=>{
          return(
          <div className='mobile-item' key={index}><Link className='item-link' to={`/details/${val.id}`}><Items mobileData={val}/></Link></div>
          )
        })}
      </div>
    </div>
  )
}

export default List