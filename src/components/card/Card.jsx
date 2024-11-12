import { Link } from 'react-router-dom';
import { MdStarOutline } from "react-icons/md";
import { MdStarHalf } from "react-icons/md";
import {useState} from 'react'

// import Head from './components/header/Head.tsx'



function Card(props) {
  const [count, setCount] = useState(0);


  return (
     <div className="container-flued p-3 mx-auto">
      <div className="card" style={{ width: '18rem' }}>
        <img src={props.srcimg} className="card-img-top" alt="..." style={{height:"15rem"}}/>
        <div className="card-body row">
          <div className="col">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">~ <del>{props.mainprice}</del>/-</p>
          <p className="card-text pb-3">~{props.discountprice}/-</p>
          </div>
          {/* RIGHT section in card  */}
          <div className="float-end col text-warning">
            
             <span>  4.5 <MdStarOutline />
          <MdStarOutline /><MdStarOutline />
          <MdStarOutline /><MdStarHalf /> </span>
          
          <div className="text-dark   bg-warning bg-gradient rounded-circle shadow"><h6 className="text-center text-danger pt-2 pb-2">50%offer</h6></div>
          

          </div>

          <div className="gap-4">
          <Link to="#" className="btn btn-warning bg-gradient">
            Buy Now
          </Link>
          

          <Link to="#" className="btn btn-outline-dark float-end"   onClick={() => setCount(count+1)}>
            AddCard
          </Link>
          
          <p >{count}</p>
         
          </div>
        </div>
    

      
    </div>
    </div>
  );
}
export default Card;
