import "./Home.css";
import { motion, stagger, useScroll, useTransform } from "motion/react"
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

  /* Paragraphs cannot be animated word by word or line by line, so split
     paragraphs into children containing 1 word each. */
  const paragraphAnimation = {
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        delayChildren: stagger(0.01), // Stagger children by 0.01 seconds
      },
    },
    hidden: {
      opacity: 0,
      transition: {
        when: "afterChildren",
      },
    },
  }

  // Children of paragraphs containing 1 word each
  const wordAnimation = {
    visible: { clipPath: "inset(0% 0% 0% 0%)" },
    hidden:  { clipPath: "inset(100% 0% 0% 0%)" },
  }


  return (
    <main>
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
              "about4.jpg"
            ].map((img) =>
              <SwiperSlide key={img}><img src={img}/></SwiperSlide>
            )
          }
        </Swiper>

        <div className="biography">
          <motion.h1 className="biography-title"
            initial="hidden"
            whileInView="visible"
            variants={ paragraphAnimation }
            viewport={{ once: true }}
          >
            {
              ("I am a...").split(' ').map((word: string) =>
                <motion.span variants={wordAnimation}>{word + ' '}</motion.span>
              )
            }
          </motion.h1>
          <motion.div className="biography-detail detail"
            initial="hidden"
            whileInView="visible"
            variants={ paragraphAnimation }
            viewport={{ once: true }}
          >
            {
              ("Boy Scout, airsofter, photographer, and developer. I enjoy " +
               "building software that solves real-world problems and " +
               "learning about new technologies. When I'm not coding, you " +
               "can find me outdoors exploring nature or capturing moments " +
               "through my camera lens."
              ).split(' ').map((word: string) =>
                <motion.span variants={wordAnimation}>{word + ' '}</motion.span>
              )
            }
          </motion.div>
        </div>
      </div>
      
      <div className="home-page pics-section">
        {
          [
            {img:"pic1.jpg", caption:"A view worth the trek at Camp Chawanakee"},
            {img:"pic2.jpg", caption:"Backcountry snow camping"},
            {img:"pic4.JPG", caption:"Backpacking the California coast (Point Reyes)"},
            {img:"pic5.jpg", caption:"Scuba diving at Sea Base in the Florida Keys"},
          ].map(({ img, caption }) =>
            <div className="figure" key={img}>
              <div className="parallax-wrapper">
                <motion.img src={img} style={{ y: foregroundY }}/>
              </div>
              <p style={{textAlign: "center", fontSize: "1.25rem", fontWeight: "300"}}>{caption}</p>
            </div>
          )
        }
      </div>

      <div className="home-page projects-section">
        <div className="projects-text-column">
          <motion.h1 className="projects-title"
            initial="hidden"
            whileInView="visible"
            variants={ wordAnimation }
            viewport={{ once: true }}
          >
            Projects
          </motion.h1>
          <motion.div className="detail"
            initial="hidden"
            whileInView="visible"
            variants={ paragraphAnimation }
            viewport={{ once: true }}
          >
            {
              ("My projects reflect a mix of community service, independent " +
                "initiatives, and hands-on problem solving. I have " +
                "completed 500+ hours of community service, contributing to " +
                "local programs, volunteer efforts, and service-oriented " +
                "initiatives that support my community. Alongside service " +
                "work, I pursue personal projects that involve building " +
                "practical tools, improving workflows, and exploring " +
                "technical and analytical challenges. Across all projects, " +
                "I emphasize responsibility, consistency, and learning " +
                "through real-world application."
              ).split(' ').map((word: string, i: number) =>
                <motion.span key={i} variants={wordAnimation}>{word + ' '}</motion.span>
              )
            }
          </motion.div>
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
