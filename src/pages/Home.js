import React from 'react'
import Bagnavbar from '../components/Bagnavbar'
import Bagnavbar2 from '../components/Bagnavbar2'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import './home.css'
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';




export default function Home() {
  return (
    <div>
      <Bagnavbar />

      <Bagnavbar2 /><br></br>
      <Container>
        <Row>
          <Col className='column'><div className='headd'><h1 style={{ fontSize: '70px', marginTop: "90px" }}>Leather <Badge bg="dark">Mordern</Badge> <br />Utility</h1></div>
            <p style={{ marginTop: '300px', fontSize: '20px' }}>Augue lacus viverra vitae congue eu consequat ac felis donec. Bibendum at varius vel pharetra vel. Quam adipiscing vitae proin sagittis nisl rhoncus.</p>

          </Col>
          {/* <Col><img src='/assets/manbag.webp' style={{height:'600px',width:'800px'}}></img></Col> */}
          <Col>
            <img src='/assets/manbag.webp' style={{ height: '600px', width: '900px' }} alt="Man's bag" />
          </Col>  

        </Row>
        <div className='btn1' style={{display:'flex',justifyContent:'center',alignItems:'center'}} ><Button style={{ marginTop: '-300px', marginLeft:'-817px' }} variant="dark">Shop Now</Button>
          <Button style={{ marginLeft: '124px', marginTop: '-295px' }} variant="dark">View All</Button></div>

      </Container>
      <br></br>


      <div style={{ border: '2px solid black', backgroundColor: 'black', color: 'white', height: '45px', display: 'flex', padding: '4px', marginTop: '-24px' }}>
        <marquee ><b>Travel Light,Travel Righ</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>Discover Your Perfect Bag &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <b>Travel Light,Travel Right </b></b>;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>Find The Perfect Travel Companion</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>Explore New Bag Collections</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>Pack Smart,Travel Stylish</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>Find The Perfect Travel Companion</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>Discover Your Perfect Bag</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <b>Explore New Bag Collections</b> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

        </marquee>
      </div>



      <Container>
      <Row>
        <Col className='col1' xs></Col>
        <Col className='col3' xs={{ order: 5 }}>
        
        </Col>
        <Col className='col2' xs={{ order: 0 }}>
        <h2 className='pro'>Professional Bags
        <p className='prof'>Professional bags like briefcases were symbols of business and professionalism. They were predominantly used by men in corporate setting.and its give ore comfirtable for all users.</p>
        </h2>
        
        <button style={{marginLeft:'160px',marginTop:'-100px'}}>Shop Now</button>
        </Col>
      </Row>
    </Container>



      <br></br>
      <br></br>
      <br></br>

      <div className='check'>
        <h1 >Check Out Our Collections</h1>
        <div style={{ fontSize: '20px', fontFamily: 'inherit' }}>Vulputate enim nulla aliquet porttitor lacus luctus accumsan.</div>
      </div>
      <br></br>
      <Container>
        <Row>
          <Col xs><div ><img src='./assets/shop-1.jpg' height={'300px'}></img></div>
            <p style={{ fontSize: '19px' }}>Camping Backpack</p>
            <p style={{ fontSize: '18px' }}><b>Rs. 1,150.00</b></p>
            <div style={{ border: '2px solid balack' }}></div>
          </Col>
          <Col xs={{ order: 5 }}><div className='' ><img src='./assets/shop-2.webp' height={'300px'}></img></div>
            <p style={{ fontSize: '19px' }}>Classic Laptop Backpack</p>
            <p style={{ fontSize: '18px' }}><b>Rs. 1,290.00</b></p></Col>
          <Col xs={{ order: 0 }}><div><img src='./assets/shop-3.webp' height={'300px'}></img></div>
            <p style={{ fontSize: '19px' }}>Check In Lugguage</p>
            <p style={{ fontSize: '18px' }}><b>Rs. 2,780.00</b></p></Col>


          <Col xs={{ order: 0 }}><div><img src='./assets/shop-4.webp' height={'300px'}></img></div>
            <p style={{ fontSize: '19px' }}>Classic Laptop Backpack</p>
            <p style={{ fontSize: '18px' }}><b>Rs. 1,290.00</b></p></Col>


        </Row>
      </Container>
      <br></br>
      <div className='wdbag'>
        <div className='woodbag'><img src='./assets/woodenbag.webp' width={'1560px'}></img>
          <div className='text1'><h1>Freshly Arrived Backpack From </h1>
            <h1 className='text2'>Our Newest Collection</h1>
            <button className='button'>Shop All</button>
          </div>
        </div>

      </div>





      <Container className="my-5">
      <Row>
        <Col xs={12} md={4} className="mb-4">
          <Card className="text-center">
            <Card.Img variant="top" src="./assets/shop-23.jpg" />
            <Card.Body>
              <Card.Title>Foldable Waterproof</Card.Title>
              <Card.Text>Rs. 1,820.00</Card.Text>
            </Card.Body>
          </Card>
        </Col>




        <Col xs={12} md={4} className="mb-4">
          <Card className="text-center">
            <Card.Img variant="top" src="./assets/shop-30.webp" />
            <Card.Body>
              <Card.Title>Formal Backpack</Card.Title>
              <Card.Text>Rs. 1,650.00</Card.Text>
            </Card.Body>
          </Card>
        </Col>

        <Col xs={12} md={4} className="mb-4">

          <div className="d-flex align-items-center justify-content-center h-100 bg-light p-3" style={{ minHeight: '200px' }}>
            <div className="text-center">
              <h2>30% OFF</h2>
              <p>All Luxury Brands</p>
              <p>Code: LUXURY</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>

















      <Container className="features-section" style={{ paddingTop: '50px', paddingBottom: '50px' }}>
        <Row className="text-center">
          <Col md={3} sm={6} xs={12} className="feature">
            <div className="feature-icon">
              <img src="./assets/world.avif" alt="Branded Bags" />
            </div>
            <h5>Branded Bags</h5>
            <p>Morbi tristique senectus et netus et malesuada fames ac turpis.</p>
          </Col>
          <Col md={3} sm={6} xs={12} className="feature">
            <div className="feature-icon">
              <img src="./assets/leaff.avif" alt="Best Materials" />
            </div>
            <h5>Best Materials</h5>
            <p>Hendrerit gravida rutrum quisque non tellus orci montes.</p>
          </Col>
          <Col md={3} sm={6} xs={12} className="feature">
            <div className="feature-icon">
              <img src="./assets/tags.avif" alt="Quality Bags" />
            </div>
            <h5>Quality Bags</h5>
            <p>Senectus et netus et malesuada fames ac turpis egestas.</p>
          </Col>
          <Col md={3} sm={6} xs={12} className="feature">
            <div className="feature-icon">
              <img src="./assets/bulb.avif" alt="Creative Designs" />
            </div>
            <h5>Creative Designs</h5>
            <p>Gravida cum sociis natoque penatibus et magnis dis.</p>
          </Col>
        </Row>
      </Container>





      <Container className="highlight-collection my-5">
        <h2 className="highlight-title text-center"style={{fontSize:'39px'}} >Highlight Collection</h2>
        <p className="highlight-description text-center" style={{fontSize:'20px'}}>
          Hendrerit dolor magna eget est lorem ipsum dolor sit amet. At elementum
          eu facilisis sed odio morbi quis commodo odio.
        </p>
        <Row className="highlight-content align-items-center">
          <Col md={6} className="highlight-image-wrapper">
            <img
              src="./assets/frndz.webp"
              alt="Highlight"
              className="highlight-image img-fluid rounded"
            />
          </Col>
          <Col md={6} className="highlight-text-wrapper">
            <h3 className="highlight-subtitle">Adventure Bags</h3>
            <p className="highlight-text">
              Pellentesque massa placerat duis ultricies lacus sed turpis.
              Facilisis volutpat est velit egestas dui id ornare arcu odio. Nunc
              aliquet bibendum enim facilisis gravida neque convallis a cras.
            </p>
            <Button variant="dark" className="highlight-button">Shop All</Button>
          </Col>
        </Row>
      </Container>









      <div className="container-fluid">
        <div className="row align-items-center" style={{ backgroundColor: '#2c3e50', color: 'white', padding: '20px' }}>
          <div className="col-md-6">
            <h1 className='elegance' >Elegance Bags</h1>
            <p>Aliquet risus feugiat in ante metus dictum at tempor commodo. Adipiscing commodo elit at imperdiet dui accumsan sit. Tortor posuere ac ut consequat semper viverra nam.</p>
            <button className="btn-light" style={{backgroundColor:'white',color:'black',padding:'7px',borderRadius:'10px'}}>Shop Now</button>

          </div>

          <div className="col-md-6">
            <div className="row">
              <div className="col-md-6">
              </div>
              <img src="./assets/capman.webp" className="img-fluid2" alt="Bag 1" />



            </div>
          </div>
        </div>

        <div className="row mt-3">
          {/* <div className="col-md-12">
          <p>Risus in hendrerit gravida rutrum quisque. Pharetra vel turpis nunc eget lorem dolor. Varius quam quisque id diam vel. Curabitur vitae nunc sed velit dignissim. Facilisis mauris sit amet massa vitae tortor condimentum.</p>
        </div> */}

          {/* <img className='creambag' src='./assets/1bag.webp'></img> */}
          <div className="col-md-6">
            <img src="./assets/1bag.webp" className="img-fluid3" alt="Bag 2" />

          </div>
        </div>
      </div>




      







      <div className="container my-5">
      <h2 className="text-center mb-4"style={{fontSize:'40px'}} >Testimonials From Satisfied Customers</h2>
      <p className="text-center mb-5" style={{fontSize:'20px'}}>Augue lacus viverra vitae congue eu consequat ac felis donec bibendum at varius vel pharetra vel.</p>
      <div className="row">
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">Discover Customer Experiences Firsthand</h5>
              <p className="card-text" ><b>5K Reviews</b></p>
              <div className="avatar-group">
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">★★★★★</h5>
              <p className="card-text"><b>Ibero volutpat sed cras ornare arcu dui vivamus arcu.</b></p>
              <footer className="blockquote-footer"><b>Laara - Australia</b></footer>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">★★★★☆</h5>
              <p className="card-text"><b>Arcu ac tortor dignissim convallis aenean et.</b></p>
              <footer className="blockquote-footer"><b>Mathew - USA</b></footer>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-4">
          <div className="card h-100 shadow-sm">
            <div className="card-body text-center">
              <h5 className="card-title">★★★☆☆</h5>
              <p className="card-text"><b>Porta nibh venenatis cras sed.</b></p>
              <footer className="blockquote-footer"><b>Jordan - London</b></footer>
            </div>
          </div>
        </div>
      </div>
    </div>










    <div class="container my-5">
    <h2 class="text-center mb-4"style={{fontSize:'45px'}} >Fresh Updates</h2>
    <p class="text-center mb-5" style={{fontSize:'20px'}} >Vitae Suscipit Tellus Mauris A Diam Maecenas Sed Quisque Id Diam Vel Quam Elementum Pulvinar Etiam Non.</p>
    <div class="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
        <div class="col">
            <div class="card h-100">
                <img style={{height:'300px'}} src="./assets/fresh1.webp" class="card-img-top" alt="Travel Bags"></img>
                <div class="card-body"> 
                    <p class="card-date text-muted">Jun 21 2024</p>
                    <h5 class="card-title">Travel Bags For Every Type Of Adventure</h5>
                    <p class="card-text">Nunc consequat interdum varius sit. Egestas sit amet tellus cras adipiscing enim at quis...</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <img style={{height:'300px'}} src="./assets/fresh2.webp" class="card-img-top" alt="Lightweight Travel Backpacks"></img>
                <div class="card-body">
                    <p class="card-date text-muted">Jun 21 2024</p>
                    <h5 class="card-title">Best Lightweight Travel Backpacks For You</h5>
                    <p class="card-text">Orci dapibus ultrices in iaculis nunc sed augue lacus. Diam quis enim lobortis scelerisque fermentum...</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <img style={{height:'300px'}} src="./assets/fresh3.webp" class="card-img-top" alt="Popular Bag Styles"></img>
                <div class="card-body">
                    <p class="card-date text-muted">Jun 21 2024</p>
                    <h5 class="card-title">Popular Bag Styles: Seasonal Fashion Updates</h5>
                    <p class="card-text">Velit scelerisque in dictum non. Felis eget velit aliquet sagittis id consectetur purus ut...</p>
                </div>
            </div>
        </div>
        <div class="col">
            <div class="card h-100">
                <img style={{height:'300px'}} src="./assets/fresh4.webp" class="card-img-top" alt="Laptop Messenger Bags"></img>
                <div class="card-body">
                    <p class="card-date text-muted">Jun 21 2024</p>
                    <h5 class="card-title">Designer Laptop Messenger Bags</h5>
                    <p class="card-text">Faucibus a pellentesque sit amet porttitor eget dolor morbi non. Odio facilisis mauris sit amet...</p>
                </div>
            </div>
        </div>
    </div>
</div>








<div className="App">
      <div className="container my-5">
        <div className="row text-center">
          <div className="col-lg-3 col-md-6 mb-4">
            <i className="bi bi-bag-fill fs-1 mb-3"></i>
            <img style={{height:'70px',width:'90px'}} src="./assets/lastt1.avif" alt="Branded Bags" />

            <h5>Luxury Bags</h5>
            <p>Dolor sit amet consectetur adipiscing elit ut aliquam purus.</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <i className="bi bi-gem fs-1 mb-3"></i>
            <img style={{height:'70px',width:'90px'}} src="./assets/last2.avif" alt="Branded Bags" />

            <h5>Superior Quality</h5>
            <p>Condimentum mattis pellentesque id nibh tortor id aliquet.</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <i className="bi bi-truck fs-1 mb-3"></i>
            <img style={{height:'70px',width:'90px'}} src="./assets/de.avif" alt="Branded Bags" />

            <h5>Free Delivery</h5>
            <p>Arcu cursus vitae congue mauris rhoncus aenean.</p>
          </div>
          <div className="col-lg-3 col-md-6 mb-4">
            <i className="bi bi-shield-check fs-1 mb-3"></i>
            <img style={{height:'70px',width:'90px'}} src="./assets/last4.avif" alt="Branded Bags" />

            <h5>Refund Guarantee</h5>
            <p>Bibendum enim facilisis gravida neque convallis a cras semper.</p>
          </div>
        </div>
      </div>

      




      <footer className="bg-dark text-white py-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 mb-4">
              <h5>Contact Us</h5>
              <ul className="list-unstyled">
                <li>Site Map</li>
                <li>Site Credits</li>
                <li>Support</li>
                <li>Careers</li>
                <li>Services</li>
                <li>Locations</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5>Company</h5>
              <ul className="list-unstyled">
                <li>Feedback</li>
                <li>Technical Support</li>
                <li>Sales Team</li>
                <li>Products</li>
                <li>Find A Store</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5>Useful Links</h5>
              <ul className="list-unstyled">
                <li>Help Center</li>
                <li>Case Studies</li>
                <li>Events</li>
                <li>Privacy Policy</li>
                <li>Partners</li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 mb-4">
              <h5>Newsletter</h5>
              <p>Fusce id ornare arcu. Vivamus id blandit erat. Vestibulum non dolor sem.</p>
              <form  className="d-flex">
                <input type="email" className="form-control" placeholder="Enter your email" />
                <button className="btn btn-primary ms-2" type="submit" style={{marginTopop:'10px'}}>Submit</button>
              </form>
            </div>
          </div>

          <div className="row mt-4">
            <div className="col-12 d-flex justify-content-between align-items-center">
              <div>
        <div style={{ marginRight: 'auto' ,border:'2px solid black',width:'100px',textAlign:'center',backgroundColor:'white'}}><b style={{color:'black'}}>JOOT <a style={{backgroundColor:'black',color:'white'}}>BAG</a></b></div>

              </div>
              <p className="mb-0">
                Our bags are ideal for students, travelers, and professionals who need to carry essentials hands-free. 
                These bags are made from premium materials, including real leather, sturdy canvas, and environmentally 
                friendly alternatives.
              </p>
              <div>
                <img src="./assets/visa" alt="Visa" className="mx-2" style={{ width: '40px' }} />
                <img src="./assets/mc" alt="Mastercard" className="mx-2" style={{ width: '40px' }} />
                <img src="./assets/am" alt="American Express" className="mx-2" style={{ width: '40px' }} />
                <img src="./assets/ppn.png" alt="PayPal" className="mx-2" style={{ width: '40px' }} />
                <img src="./assets/di" alt="PayPal" className="mx-2" style={{ width: '40px' }} />
              </div>
            </div>
          </div>
        </div>
      </footer>
</div>





</div>


  )
}
