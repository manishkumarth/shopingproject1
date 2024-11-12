import Card from '../card/Card';

function Addcart() {
  return (
    <div className="container-flued px-2 bg-warning">
      <div className="container mx-auto">
        <div className="row">
          <div className="col-lg-8 col-sm">
            <div
              className="bg-secondary bg-gradient mt-2 "
              style={{ height: '31.5rem' }}

            >

              <Card
                srcimg="https://www.allrecipes.com/thmb/5JVfA7MxfTUPfRerQMdF-nGKsLY=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/25473-the-perfect-basic-burger-DDMFS-4x3-56eaba3833fd4a26a82755bcd0be0c54.jpg"
                title="burger"
                mainprice="499"
                discountprice="299"
              
               
              />
              {/* prouduct section left section  */}
            </div>
          </div>
          <div className="col-lg-4 col-sm mt-2">
            <div
              style={{ height: '15rem' }}
              className="bg-secondary bg-gradient"
            >
              uper right
            </div>
            <div
              style={{ height: '15rem' }}
              className="bg-secondary bg-dradient mt-4"
            >
              
              down right
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Addcart;
