import Loader from '../assets/loading.gif';

const Spinner = () => {
  return (
    <div className='container text-center'>
        <img src={Loader} alt="loading"/>
    </div>
  )
}

export default Spinner