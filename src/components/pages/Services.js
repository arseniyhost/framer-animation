import React from 'react';
import Header from '../Header';
import Hero from '../Hero';
import Image from '../../images/img-4.jpeg';
import { motion } from 'framer-motion';
import { animationThree, transition } from '../../animations';
import According from '../Dropdown/According';
import MainCoin from '../Crypto/MainCoin';

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
                title="Look at below"
                description="Do you wanna know the cost of Bitcoin?"
            />
            <MainCoin />
        </motion.div>
        
    )
}

export default Services
