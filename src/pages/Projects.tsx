import './Projects.css';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Projects() {
  return (
    <main>
      <div className="home-page"> 
        <h1 className="section-title garamond">My Projects</h1>
        <img src="projectpage2.gif" className="background"/>
        <div className="background-gradient"/>
      </div>

      <div className="home-page second-page">
        <h1 className='garamond' style={{margin: "2.5rem 0", fontSize: "7rem", fontWeight: "200"}}>Overview</h1>
        <Swiper className="page2Carousel"
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000 }}  
          pagination={{ clickable: true }}
          loop
          navigation
          spaceBetween={0}
          slidesPerView={3}
        >
          {
            [
              "about1.jpg",
              "about2.JPG",
              "about3.JPG",
              "about4.jpg",
              "about5.jpg",
              "about6.jpg",
            ].map((img) =>
              <SwiperSlide key={img}><img src={img}/></SwiperSlide>
            )
          }
        </Swiper>
      </div>
    </main>
  );
}