import './items.css';

const Items = (props) => {
  const {title, image, description, price} = props.mobileData;
  return (
    <div className='items-card'>
        <div className='card-row mb-3'>
          <img src={image} className='mobile-img'/>
          <div className='card-detail'>
            <p className='item-name'>{title.slice(0,15)}</p>
            <p className='item-desc'>{description.toLowerCase().slice(0,40)}...</p>
            <div className='d-flex justify-content-center'>
              <i className="bi bi-tags-fill"></i>
              <p className='item-price ms-2'>{price}$</p>
            </div>
            <div className='buy-button'>
                <button className='custom-buy-btn'>Limited time deal</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Items