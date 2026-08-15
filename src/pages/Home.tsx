import "./Home.css";

import MediaCard from "../components/MediaCard.tsx";
import AnimatedParagraph from "../components/AnimatedParagraph.tsx";

import { motion, useScroll, useTransform } from "motion/react"
// Import Swiper React components
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function Home() {
  const { scrollYProgress } = useScroll();

  // Scroll-triggered animation for first page background
  const filter = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["blur(0px)", "blur(20px)"]
  );

  // Scroll-triggered parallax animation for pics-section
  const foregroundY = useTransform(
    scrollYProgress,
    [0.4, 0.75],
    ["0%", "-15%"] // Adjust the parallax effect magnitude as needed
  );


  return (
    <main>
      <div className="home-page">
        <p className="section-title garamond">Hi, I'm Quan</p>
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
              "about5.jpg",
              "about6.jpg",
            ].map((img) =>
              <SwiperSlide key={img}><img src={img}/></SwiperSlide>
            )
          }
        </Swiper>

        <div className="biography">
          <AnimatedParagraph className="section-title garamond "
            paragraph="I am a..."
          />
          <AnimatedParagraph className="biography-detail detail"
            paragraph={
              ("Boy Scout, airsofter, photographer, and developer. I enjoy " +
               "building software that solves real-world problems and " +
               "learning about new technologies. When I'm not coding, you " +
               "can find me outdoors exploring nature or capturing moments " +
               "through my camera lens.")
            }
          />
        </div>
      </div>
      
      <div className="home-page pics-section">
        <AnimatedParagraph className="pics-title garamond"
          paragraph="Moments from the journey"
        />

        <AnimatedParagraph className="pics-subtitle"
          paragraph="A collection of adventures across mountains, coastlines, and everything in between"
        />
        <div className="cards-wrapper">
          {
            [
              {img:"pic1.jpg", altText:"A view worth the trek at Camp Chawanakee",captionTitle:"Camp Chawanakee",
                captionBody:"A scenic trek to a lakeside camp with breathtaking views and peaceful nights", 
                captionLocation:"Sierra National Forest, CA",},
              {img:"pic2.jpg", altText:"Backcountry snow camping", captionTitle:"Backcountry Snow Camping", 
                captionBody:"Backcountry snow camping in the Sierra Nevada mountains, embracing the beauty of winter wilderness", 
                captionLocation:"Rocky Mountains, CO"},
              {img:"pic4.JPG", altText:"Backpacking the California coast (Point Reyes)", captionTitle:"Backpacking Point Reyes", 
                captionBody:"Backpacking the California coast, exploring rugged cliffs, sandy beaches, and breathtaking ocean views", 
                captionLocation:"Point Reyes National Seashore, CA"},
              {img:"pic5.jpg", altText:"Camping on the Stanislaus River", captionTitle:"Camping", 
                captionBody:"Camping by the Stanislaus River, enjoying the serenity of nature", 
                captionLocation:"Camp Wolfeboro, CA"},
            ].map(({ img, altText, captionTitle, captionBody, captionLocation }, index: number) =>
              <MediaCard className="figure" key={index} image={img} altText={altText} 
                captionTitle={captionTitle}
                captionBody={captionBody}
                captionLocation={captionLocation}
              />
            )
          }
        </div>
      </div>

      <div className="home-page projects-section">
        <div className="projects-text-column">
          <AnimatedParagraph className="section-title garamond"
            paragraph="Projects"
          />
          <AnimatedParagraph className="detail"
            paragraph={
              ("My projects reflect a mix of community service and independent " +
                "initiatives. I have " +
                "completed 500+ hours of community service, contributing to my surrounding area through various volunteer projects." +
                "I have also developed a variety of personal projects, including a " +
                "a machine learning model for image classification. "
              )
            }
          />
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
    </main>
  );
}
