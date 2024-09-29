import Carousel from 'react-bootstrap/Carousel';


function CarouselImages() {
  return (

  <Carousel>
      <Carousel.Item interval={3000}>
            <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="First slide"
        />
  
      </Carousel.Item>
      <Carousel.Item interval={3000}>
            <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1586281380117-5a60ae2050cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
            <img
          className="d-block w-100"
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="First slide"
        />
      
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselImages;