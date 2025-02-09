import React from 'react';
import { motion } from 'framer-motion';
import { FaStar } from 'react-icons/fa';
import image1 from '../../assets/images/bhubaneshwar.jpg';
import image2 from '../../assets/images/redfort.jpg'; 
import image3 from '../../assets/images/tajmahar.avif'; 

const PopularDestinations = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
  };
  
  const staggerContainer = {
    initial: {},
    animate: { transition: { staggerChildren: 0.2 } },
  };
  

  return (
    <motion.section
      className="popular"
      id="destination"
      initial="initial"
      animate="animate"
      variants={staggerContainer}
    >
      <motion.div className="container" variants={fadeInUp}>
        <p className="section-subtitle">Uncover place</p>
        <h2 className="h2 section-title">Popular Destination</h2>
        <p className="section-text">
          "Come for the sights, stay for the selfies - this place is basically a vacation filter in real life!"
        </p>        
        <motion.ul className="popular-list" variants={staggerContainer}>
          {[image1, image2, image3].map((image, index) => (
            <motion.li key={index} variants={fadeInUp}>
              <div className="popular-card">
                <figure className="card-img">
                  <motion.img
                    src={image}
                    alt={`Destination ${index + 1}`}
                    loading="lazy"
                    whileHover={{ scale: 1.05 }}
                  />
                </figure>
                
                <div className="card-content">
                  <div className="card-rating">
                    <FaStar className="text-yellow-500" /> 
                    <FaStar className="text-yellow-500" /> 
                    <FaStar className="text-yellow-500" /> 
                    <FaStar className="text-yellow-500" /> <FaStar className="text-yellow-500" /> 
                  </div>

                  <p className="card-subtitle">
                    <a href="#">
                      {index === 0 ? 'Odisha' : index === 1 ? 'Delhi' : 'Agra'}
                    </a>
                  </p>

                  <h3 className="h3 card-title">
                    <a href="#">
                      {index === 0 ? 'Bhubaneshwar' : index === 1 ? 'Red Fort' : 'Taj Mahal'}
                    </a>
                  </h3>
                  <p className="card-text">
                    {index === 0
                      ? 'A vibrant metropolis renowned for its rich cultural heritage.'
                      : index === 1
                      ? "A symbol of the Mughal Empire's architectural legacy."
                      : 'An ivory-white marble mausoleum on the south bank of the Yamuna river.'}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
        <motion.button
          className="btn btn-primary"
          variants={fadeInUp}
          whileHover={{ scale: 1.1 }}
        >
          More Destinations
        </motion.button>
      </motion.div>
    </motion.section>
  );
};
export default PopularDestinations;