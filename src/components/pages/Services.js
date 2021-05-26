import React from 'react';
import Header from '../Header';
import Hero from '../Hero';
import Image from '../../images/img-3.jpg';
import { motion } from 'framer-motion';
import { animationThree, transition } from '../../animations';

const Services = () => {
    return (
        <motion.div
            initial="out"
            animate="end"
            exit="out"
            variants={animationThree}
            transition={transition}
        >
            <Header />
            <Hero
                image={Image}
                title="Look at this bird"
                description="Can you believe this?"
            />
        </motion.div>
    )
}

export default Services
