import Card from '../card/Card';
import Sdata from '../Sdata'

function Shoping() {
  return (
  <>
  <div className="container row mx-auto px-0">
    <div  className="col mx-auto ">
    <Card srcimg={Sdata[0].srcimg}
          title={Sdata[0].title}
        mainprice={Sdata[0].mainprice}
        discountprice={Sdata[0].discountprice}
 />
  </div>
  <div  className="col">
  <Card srcimg={Sdata[1].srcimg}
          title={Sdata[1].title}
        mainprice={Sdata[1].mainprice}
        discountprice={Sdata[1].discountprice}
        />
  </div>
  <div  className="col">
  <Card srcimg={Sdata[2].srcimg}
          title={Sdata[2].title}
        mainprice={Sdata[2].mainprice}
        discountprice={Sdata[2].discountprice}
        />
  </div>
  <div  className="col">
  <Card srcimg={Sdata[3].srcimg}
          title={Sdata[3].title}
        mainprice={Sdata[3].mainprice}
        discountprice={Sdata[3].discountprice}
        />
  </div>
  <div  className="col">
  <Card srcimg={Sdata[4].srcimg}
          title={Sdata[4].title}
        mainprice={Sdata[4].mainprice}
        discountprice={Sdata[4].discountprice}
        />
  </div>
  <div  className="col">
  <Card srcimg={Sdata[5].srcimg}
          title={Sdata[5].title}
        mainprice={Sdata[5].mainprice}
        discountprice={Sdata[5].discountprice}
        />
  </div>
  <div  className="col">
  <Card srcimg={Sdata[6].srcimg}
          title={Sdata[6].title}
        mainprice={Sdata[6].mainprice}
        discountprice={Sdata[6].discountprice}
        />
  </div>
  <div  className="col">
  <Card srcimg={Sdata[7].srcimg}
          title={Sdata[7].title}
        mainprice={Sdata[7].mainprice}
        discountprice={Sdata[7].discountprice}
        />
  </div>
  <div  className="col">
  <Card srcimg={Sdata[8].srcimg}
          title={Sdata[8].title}
        mainprice={Sdata[8].mainprice}
        discountprice={Sdata[8].discountprice}
        />
  </div>
  </div>
  </>)
}
export default Shoping;
