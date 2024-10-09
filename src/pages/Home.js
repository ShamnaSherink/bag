import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './home.css'
import Button from 'react-bootstrap/Button';
import Navbar from '../components/Navbar';
import Navbar2 from '../components/Navbar2';
import { Card } from 'react-bootstrap';
import Footer from '../components/Footer';




export default function Home() {
  return (
    <div>
      <Navbar />

      <Navbar2 /><br></br>

      <Container fluid className="leather-section">
        <Row className="align-items-center justify-content-center text-center">
          <Col md={6} className="text-container">
            <h1 className="main-title">Leather <span className="highlight">Mordern</span></h1>
            <h2 className="subtitle">Utility</h2>
            <p className="description">
              A leather modern utility bag is a stylish and functional accessory made from high-quality leather, featuring a minimalist design, multiple compartments for organizing essentials, and adjustable straps for comfortable carrying
            </p>
            <Button variant="dark" className="mr-3" style={{borderRadius:'1px'}}>Shop Now</Button>
            <Button variant="outline-dark" style={{borderRadius:'1px' }}>View All</Button>
          </Col>
          <Col md={6} className="image-container">
            <img src="./assets/manbag.webp" alt="Leather Bag" className="img-fluid" />
          </Col>
        </Row>
      </Container>

      <br></br>
      <br></br>
      <div className='marquee' style={{ border: '2px solid black', backgroundColor: 'black', color: 'white', height: '45px', display: 'flex', padding: '4px', marginTop: '-40px', height: '35px' }}>
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

      {<div className="professional-bags-container container-fluid">
        <div className="row align-items-center">
          <div className="col-md-4">
            <img src="/assets/man1.webp" alt="Person with Backpack" className="img-fluid" />
          </div>
          <div className="col-md-4 text-center">
            <h2 style={{ marginTop: '10px' }}>Professional Bags</h2>
            <p>
              Professional bags are designed to offer both style and functionality, featuring sleek designs, durable materials
            </p>
            <button className="btn btn-primary">Shop Now</button>
            <button className="btn btn-secondary" style={{marginLeft:'2px',borderRadius:'4px',height:'43px'}}>Watch Video</button>
          </div>
          <div className="col-md-4">
            <img src="/assets/hand.webp" alt="Person with Briefcase" className="img-fluid" />
          </div>
        </div>
      </div>

      }

      <div className="container mt-5">
        <h2 style={{ marginTop: '8px' }} className="text-center">Check Out Our Collections</h2>
        <p className="text-center">Explore our diverse collections to find the perfect professional bag that combines style, functionality, and quality</p>
        <div className="row">
          <div className="col-md-3">
            <div className="card">
              <img src="./assets/shop-4.webp" className="card-img-top" alt="Check-In Luggage" />
              <div className="card-body text-center">
                <h5 style={{ fontSize: '15px' }} className="card-title">Check-In Luggage</h5>
                <p className="card-text">Rs. 2,780.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="./assets/shop-3.webp" className="card-img-top" alt="Classic Laptop Backpack" />
              <div className="card-body text-center">
                <h5 style={{ fontSize: '15px' }} className="card-title">Classic Laptop Backpack</h5>
                <p className="card-text">Rs. 1,290.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="./assets/shop-1.jpg" className="card-img-top" alt="Camping Backpack" />
              <div className="card-body text-center">
                <h5 style={{ fontSize: '15px' }} className="card-title">Camping Backpack</h5>
                <p className="card-text">Rs. 1,150.00</p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src="./assets/shop-2.webp" className="card-img-top" alt="Brown Briefcase" />
              <div className="card-body text-center">
                <h5 style={{ fontSize: '15px' }} className="card-title">Brown Briefcase</h5>
                <p className="card-text">Rs. 2,550.00</p>
              </div>
            </div>
          </div>
        </div>
      </div>




      <div className="hero-section">
        <div className="container text-center">
          <h1>Freshly Arrived Backpack From Our Newest Collection</h1>
          <button className="btn btn-light mt-3">Shop All</button>
        </div>
      </div>


      <div className="container my-5">
        <div className="row text-center">
          <div className="col-md-3 mb-4">
            <div className="feature-box p-3">
              <div className="image-container mb-3">
                <img src="./assets/glob1.avif" alt="Branded Bags" className="img-fluid feature-image" />
              </div>
              <h4>Branded Bags</h4>
              <p>Discover our exclusive range of branded bags that showcase exceptional craftsmanship and luxury materials.</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="feature-box p-3">
              <div className="image-container mb-3">
                <img src="./assets/leaff.avif" alt="Best Materials" className="img-fluid feature-image" />
              </div>
              <h4>Best Materials</h4>
              <p>High-quality leather offers durability and a classic look.while nylon provides water resistance and strength.</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="feature-box p-3">
              <div className="image-container mb-3">
                <img src="./assets/last2.avif" alt="Quality Bags" className="img-fluid feature-image" />
              </div>
              <h4>Quality Bags</h4>
              <p>Quality bags are durable and stylish, built to last. They combine functionality with elegance for everyday use .</p>
            </div>
          </div>
          <div className="col-md-3 mb-4">
            <div className="feature-box p-3">
              <div className="image-container mb-3">
                <img src="./assets/bulb.avif" alt="Creative Designs" className="img-fluid feature-image" />
              </div>
              <h4>Creative Designs</h4>
              <p>Creative bag designs use unique patterns shapes  blend functionality with style, making them eye-catching accessories.</p>
            </div>
          </div>
        </div>

      </div>


      <Container style={{ marginTop: '-50px' }} fluid className="p-5">
        <Row className="text-center mb-5">
          <Col>
            <h1 className="mb-3">Highlight Collection</h1>
            <p className="lead">
              A highlight collection features standout pieces that showcase unique designs and exceptional quality. Each item reflects the brand's best style.
            </p>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col lg={6} md={12}>
            <img
              src="./assets/frndz.webp"
              alt="Adventure"
              className="img-fluid"
            />
          </Col>
          <Col lg={6} md={12} className="text-center">
            <h2>Adventure Bags</h2>
            <p>
              Adventure bags are designed for durability and functionality, perfect for outdoor activities. They often include features like water resistance and multiple compartments to keep gear organized.
            </p>
            <Button variant="primary">Shop All</Button>
          </Col>
        </Row>
      </Container>


      <Container fluid className="elegance-bags">
        <Row className="align-items-center">
          <Col md={6} className="text-section">
            <h1>Elegance Bags</h1>
            <p>
              An elegance bag exudes sophistication with its sleek design and high-quality materials. It complements formal attire while adding a touch of luxury to any outfit.

            </p>
            <Button variant="primary">Shop Now</Button>
          </Col>
          <Col md={6} className="image-section">
            <img src="./assets/1bag.webp" alt="Bag 1" className="bag-image" />
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col md={6} className="image-section">
            <img src="./assets/capman.webp" alt="Bag 2" className="bag-image" />
          </Col>
          <Col md={6} className="text-section">
            <p>
              Its refined design includes minimalist lines and subtle embellishments, making it suitable for both formal events and upscale casual outings. This type of bag not only enhances an outfit but also serves as a timeless accessory that elevates the overall look.

            </p>
          </Col>
        </Row>
      </Container>







      <Container style={{ marginTop: '' }} fluid className="p-4">
        <Row>
          <Col md={4} sm={12} className="mb-3">
            <Card>
              <Card.Img variant="top" src="./assets/shop-23.jpg" />
              <Card.Body>
                <Card.Title>Foldable Waterproof</Card.Title>
                <Card.Text>
                  Rs. 1,820.00
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12} className="mb-3">
            <Card>
              <Card.Img variant="top" src="./assets/shop-30.webp" />

              <Card.Body>
                <Card.Title>Formal Backpack</Card.Title>
                <Card.Text>
                  Rs. 1,650.00
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4} sm={12} className="mb-3">
            <Card className="text-center p-4 bg-light">
              <Card.Img variant="top" src="./assets/shop-3.webp" />

              <Card.Body style={{ marginTop: '20px' }}>
                <h2>30% OFF</h2>
                <p style={{ marginTop: 'px' }}>ALL LUXURY BRANDS</p>
                <p>CODE: LUXURY</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>



      {/* RATINGS:- */}
      <Container fluid className="p-4">
        <h2 className="text-center mb-4">Testimonials From Satisfied Customers</h2>
        <p className="text-center mb-4">
          Customer testimonials praise our bags for their exceptional quality, durability, and elegant designs







        </p>
        <Row>
          <Col md={3} sm={12} className="mb-3">
            <Card className="p-4 bg-dark text-white">
              <Card.Body>
                <h4 style={{ color: 'black' }}   >Discover Customer Experiences Firsthand</h4>
                <div className="d-flex align-items-center mt-3">
                  <img src="./assets/profile.webp" alt="Customer Images" className="me-2 rounded-circle" style={{ width: '140px', height: '40px' }} />
                </div>
                <p className="mt-3" style={{ color: 'black' }}>★ 5K Reviews</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12} className="mb-3">
            <Card className="p-4">
              <Card.Body>
                <p>★★★★★</p>
                <p>"I love my bag! The quality is unmatched, and it’s perfect  both everyday use special occasions."</p>
                <p><strong>Laura</strong> - Australia</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12} className="mb-3">
            <Card className="p-4">
              <Card.Body>
                <p>★★★★☆</p>
                <p>"This bag is a game-changer! Stylish, functional, and so durable. I take it everywhere!"

                </p>
                <p><strong>Mathew</strong> - USA</p>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3} sm={12} className="mb-3">
            <Card className="p-4">
              <Card.Body>
                <p>★★★☆☆</p>
                <p>"I'm impressed by the attention to detail. This bag is both beautiful and practical!"</p>
                <p><strong>Jordan</strong> - London</p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>






      <Container fluid className="fresh-updates-section">
        <Row>
          <Col className="text-center">
            <h1 className="fresh-updates-title">Fresh Updates</h1>
            <p style={{ fontSize: '20px' }} className="fresh-updates-subtitle">
              Our latest bag updates feature fresh designs, enhanced durability, and improved functionality to meet the needs of modern lifestyles
            </p>
          </Col>
        </Row>

        <Row className="justify-content-center">
          <Col md={3}>
            <Card className="update-card">
              <Card.Img variant="top" src="./assets/fresh1.webp" />
              <Card.Body>
                <Card.Text className="date">Jun 21 2024</Card.Text>
                <Card.Title>Travel Bags For Every Type Of Adventure</Card.Title>
                <Card.Text>
                  Travel bags for every adventure, from rugged backpacks to sleek duffels, ready for any journey...
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="update-card">
              <Card.Img variant="top" src="./assets/fresh2.webp" />
              <Card.Body>
                <Card.Text className="date">Jun 21 2024</Card.Text>
                <Card.Title>Best Lightweight Travel Backpacks For You</Card.Title>
                <Card.Text>
                  Discover the best lightweight travel backpacks for comfort and style on the go
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="update-card">
              <Card.Img variant="top" src="./assets/fresh3.webp" />
              <Card.Body>
                <Card.Text className="date">Jun 21 2024</Card.Text>
                <Card.Title>Popular Bag Styles: Seasonal Fashion Updates</Card.Title>
                <Card.Text>
                  Stay trendy with popular bag styles featuring seasonal updates that refresh your wardrobe and elevate your look...
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="update-card">
              <Card.Img variant="top" src="./assets/fresh4.webp" />
              <Card.Body>
                <Card.Text className="date">Jun 21 2024</Card.Text>
                <Card.Title>Designer Laptop Messenger Bags</Card.Title>
                <Card.Text>
                  Shop stylish designer laptop messenger bags that blend functionality with a professional look."
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>






      <div className="footer mt-5 pt-5">
        <Container style={{ marginTop: '-90px' }}>
          <Row className="text-center mb-5">
            <Col md={3}>
              <h5>Luxury Bags</h5>
              <img src="./assets/lastt1.avif" alt="Branded Bags" className="img-fluid feature-image" />

              <p>Discover luxury bags featuring exquisite craftsmanship and timeless elegance
              </p>
            </Col>
            <Col md={3}>
              <h5>Superior Quality</h5>
              <img src="./assets/qulity.avif" alt="Branded Bags" className="img-fluid feature-image" />

              <p>Enjoy superior quality with bags made from premium materials for lasting durability
              </p>
            </Col>
            <Col md={3}>
              <h5>Free Delivery</h5>
              <img src="./assets/bus.avif" alt="Branded Bags" className="img-fluid feature-image" />

              <p>Enjoy free delivery all orders, making shopping experience even more convenient

              </p>
            </Col>
            <Col md={3}>
              <h5>Refund Guarantee</h5>
              <img src="./assets/last4.avif" alt="Branded Bags" className="img-fluid feature-image" />

              <p> Enjoy peace of mind with our refund guarantee on every purchase
              </p>
            </Col>
          </Row>
        </Container>

        
      </div>
      <Footer/>
    </div>

  )
}






