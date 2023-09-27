import React from 'react'
import Carousel from 'react-bootstrap/Carousel'

import "./bannerhome.css"

const BannerHome = () => {
  return (
        <Carousel fade className='w-100'>
                <Carousel.Item>
                    <div >
                    <img className='img-fluid img-banner' src="https://images.unsplash.com/photo-1598605272254-16f0c0ecdfa5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80" alt="hotelimg" />
                    </div>
                    <Carousel.Caption>
                    <p className='titleBanner m-0'>Rolling</p>
                    <p className='subtitleBanner m-0'>Gran Hotel</p>
                    <p className='sloganBanner m-0'>Tu lugar de descanso preferido</p>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='img-fluid img-banner' src="https://images.unsplash.com/photo-1529169436040-836f3d93f0f8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="rooms" />
                    <Carousel.Caption>
                        <p className='titleBanner m-0'>Rolling</p>
                        <p className='subtitleBanner m-0'>Gran Hotel</p>
                        <p className='sloganBanner m-0'>Tu lugar de descanso preferido</p>

                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img className='img-fluid img-banner' src="https://images.unsplash.com/photo-1605346576608-92f1346b67d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" alt="roomHotel" />
                    
                    {/* <ExampleCarouselImage text="Third slide" /> */}
                    <Carousel.Caption>
                    <p className='titleBanner m-0'>Rolling</p>
                        <p className='subtitleBanner m-0'>Gran Hotel</p>
                        <p className='sloganBanner m-0'>Tu lugar de descanso preferido</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
  )
}

export default BannerHome