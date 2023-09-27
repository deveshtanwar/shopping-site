import { useDispatch} from 'react-redux';
import {addItem} from '../../Store/Slices/CartSlice';
import './detail.css';
import { useState } from 'react';
import { v4 as uuid } from 'uuid';

const Detail = (props) => {
  const {title, description, category, price, image, rating} = props.detail;
  const [color, setColor] = useState("");
  const [storage, setStorage] = useState("");
  const dispatch  = useDispatch();

  const addNewItem = (payload) => {
    if(color === "" || storage === ""){
      alert("please select color and storage")
    }
    else{
      let itemObject = {
        ...payload,
        color:color,
        storage:storage,
        quantity:1,
        uid:uuid()
      }
      dispatch(addItem(itemObject))
      const alert = document.getElementById('alert-show');
      alert.classList.add('alert-visible');
    }

    setTimeout(()=>{
      const alert = document.getElementById('alert-show');
      alert.classList.remove('alert-visible')
    },500);
  }

  const handleColorChange = (e) =>{
    setColor(e.target.value);
  }

  const handleStorageChange = (e) =>{
    setStorage(e.target.value);
  }

  return (
    <div className="detailView">
      <div className="detail-image">
        <img src={image} className='detail-img'/>
      </div>
      <div className='prodDetail'>
        <div className='prodDesc'>
          <h2 style={{fontFamily:"sans-serif", margin:"5px 0px", color:"gray"}}>Specifications</h2>
          <small style={{color:"gray", margin:"5px 0px"}}>{category}</small>
          <h2 style={{fontFamily:"arial", margin:"5px 0px"}}>{title}</h2>
          <p style={{fontSize:"14px", color:"gray"}}>{description}</p>
          <div className='rating' style={{fontSize:"14px", margin:"5px 0px", fontWeight:"500"}}>Rating : {rating.rate}<i className={`bi bi-star-fill ms-1 ${rating.rate >3?"text-success":"text-danger"}`}></i></div>
          <h3><i className="bi bi-tags-fill mx-2" style={{fontSize:"22px"}}></i>{price} $</h3>
        </div>
        <div className='prodAction'>
          <div className='selector-btn'>

            <div className='my-2'>
              <small style={{color:"gray", fontWeight:"500", fontSize:"16px"}}>Color</small><br />
                <div className='d-flex'>
                  <div className='radio-btn me-2'>
                    <label htmlFor="option1" className='mx-2'>Black</label>
                    <input type="radio" value="black" id="option1" name='color' onClick={handleColorChange}/>
                  </div>
                  <div className='radio-btn'>
                    <label htmlFor="option2" className='mx-2'>White</label>
                    <input type="radio" value="white" id="option2" name='color' onClick={handleColorChange}/>
                  </div>
                </div>
            </div>
            
            <div className='my-2'>
              <small style={{color:"gray", fontWeight:"500", fontSize:"16px"}}>Storage</small><br />
              <div className='d-flex'>
                <div className='radio-btn me-2'>
                  <label htmlFor="storage-option1" className='mx-2'>256gb</label>
                  <input type="radio" value="256gb" id="storage-option1" name='storage' onClick={handleStorageChange}/>
                </div>
                <div className='radio-btn'>
                  <label htmlFor="storage-option2" className='mx-2'>128gb</label>
                  <input type="radio" value="128gb" id="storage-option2" name='storage' onClick={handleStorageChange}/>
                </div>
              </div>
            </div>
          </div>
          <div className='actions d-flex'>
            <button className='btn btn-primary' onClick={()=>{
              addNewItem(props.detail);
            }}>Buy Now</button>
            <div className="alert alert-primary p-1 m-0" role="alert" id="alert-show">
              Item added to Bag!!
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Detail;
