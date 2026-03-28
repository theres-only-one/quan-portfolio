import "./Home.css";
import { Slide } from '@mui/material';
import { useEffect, useState } from 'react';
// Import Swiper React components
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';


export default function Home() {
  const [page2Transition, setPage2Transition] = useState(false);
  const [page3Transition, setPage3Transition] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => { //cleanup event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); //runs once on component mount

  const handleScroll = () => {
    window.scrollY > window.innerHeight * 0.5 && !page2Transition &&
    setPage2Transition(true);
    window.scrollY > window.innerHeight * 1.5 && !page3Transition &&
    setPage3Transition(true);
  };

  return (
    <>
      <div className="home-page">
        <p className="intro">Hi, I'm Quan</p>
        <img src="background.png" className="background"/>
      </div>
      
      <div className="home-page about-section">
        <Swiper className="about-carousel"
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000 }}  
          pagination={{ clickable: true }}
          loop
          navigation
          spaceBetween={0}
          slidesPerView={1}
        >
          {
            [
              "about1.jpg",
              "about2.JPG",
              "about3.JPG",  
            ].map((img) =>
              <SwiperSlide key={img}><img src={img}/></SwiperSlide>
            )
          }
        </Swiper>
        <div className="biography">
          <Slide direction="left" in={page2Transition} timeout={1000} appear>
            <h1 className="biography-title">I am a...</h1>
          </Slide>
          <Slide direction="left" in={page2Transition} timeout={2000} appear>
            <p className="biography-detail detail">
              Boy Scout, airsofter, photographer, and developer. I enjoy building software that solves real-world problems and learning about new technologies. When I'm not coding, you can find me outdoors exploring nature or capturing moments through my camera lens.
            </p>
          </Slide>
        </div>
      </div>
      
      <div className="home-page pics-section">
        {
          [
            "pic1.jpg",
            "pic2.jpg",
            "pic3.jpg",
            "pic4.JPG",
            "pic5.jpg"
          ].map((img) =>
            <div className="pics" key={img}>
              <img src={img}/>
            </div>
          )
        }
      </div>

      <div className="home-page projects-section">
        <div className="projects-text-column">
          <Slide direction="left" in={page3Transition} timeout={1500} appear>
            <h1 className="projects-title">Projects</h1>
          </Slide>
          <Slide direction="right" in={page3Transition} timeout={2000} appear>
            <p className="detail">My projects reflect a mix of community service, independent initiatives, and hands-on problem solving. I have completed 500+ hours of community service, contributing to local programs, volunteer efforts, and service-oriented initiatives that support my community. Alongside service work, I pursue personal projects that involve building practical tools, improving workflows, and exploring technical and analytical challenges. Across all projects, I emphasize responsibility, consistency, and learning through real-world application.</p>
          </Slide>
        </div>
        <Swiper className="projects-carousel"
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{ delay: 5000 }}  
          pagination={{ clickable: true }}
          loop
          navigation
          spaceBetween={0}
          slidesPerView={1}
        >
          {
            [
              "project1.jpg",
              "project2.jpg",
              "project3.png"
            ]
            .map((img) =>
              <SwiperSlide key={img}><img src={img}/></SwiperSlide>
            )
          }
        </Swiper>
      </div>
    </>
  );
}
