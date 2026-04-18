import "./Home.css";
import { motion, useScroll, useTransform } from "motion/react"
import { Slide } from '@mui/material';
import { use, useEffect, useState } from 'react';
// Import Swiper React components
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import type { MotionStyle } from "motion";


export default function Home() {
  const [page2Transition, setPage2Transition] = useState(false);
  const [page4Transition, setPage4Transition] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => { //cleanup event listener
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); //runs once on component mount

  const handleScroll = () => {
    window.scrollY > window.innerHeight * 0.5 && !page2Transition &&
    setPage2Transition(true);
    window.scrollY > window.innerHeight * 2.5 && !page4Transition &&
    setPage4Transition(true);
  };

  const { scrollYProgress } = useScroll();

  // const filter2 = useTransform(
  //   scrollYProgress,
  //   [0, 0.3],
  //   []
  // );

  const filter = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["blur(0px)", "blur(20px)"]
  );

  const parallaxEffect = useTransform(
    scrollYProgress,
    [0.5, 0.6],
    ["translateY(0px)", "translateY(-200px)"]
  );

  console.log("scrollYProgress", scrollYProgress);
  return (
    <>
      <div className="home-page">
          <p className="intro">Hi, I'm Quan</p>
        <motion.div className="background" 
          style={{ filter }}
        >
          <img src="background.png" />
        </motion.div>
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
              "about4.jpg",
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
            "pic4.JPG",
            "pic5.jpg"
          ].map((img) =>
            <motion.div className="pics" key={img} style={{ parallaxEffect }as MotionStyle}>
                <img src={img}/>
            </motion.div>
          )
        }
      </div>

      <div className="home-page projects-section">
        <div className="projects-text-column">
          <Slide direction="right" in={page4Transition} timeout={2000} appear>
            <h1 className="projects-title">Projects</h1>
          </Slide>
          <Slide direction="right" in={page4Transition} timeout={1500} appear>
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
              // "project3.png"
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
