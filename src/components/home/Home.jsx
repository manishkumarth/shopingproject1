import Card from '../card/Card';
import styles from './home.module.css';
import {NavLink} from 'react-router-dom'
import Sdata from '../Sdata.jsx'


function Home() {
  
  return (
    <div className={`${styles.main} `}>
      <h2 className="text-capitalize text-center pt-4">wel come to </h2>
      <p className="text-center">
        Others who use this device won’t see your activity, so you can browse
        more privately. This won't change how data is collected by websites that
        you visit and the services that they use, including,
        <br />
        This won't change how data is collected by websites that you visit and
        the services that they use, includin
      </p>
      <div className="container own pt-5">
        <div className="row ">
          <NavLink className="btn btn-dark col-lg-6" to="/Shoping" >
            shoping
          </NavLink>
          <a className="btn btn-outline-light col-lg-6 text-dark" href="">
            Read More......
          </a>
          {/* ******************************************  */}
          <Card srcimg={Sdata[0].srcimg}
          title={Sdata[0].title}
        mainprice={Sdata[0].mainprice}
        discountprice={Sdata[0].discountprice}
        />
          {/* ******************************************************* */}
          
        </div>
      </div>
    </div>
  );
}
export default Home;
