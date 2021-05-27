import React from 'react';
import Header from '../Header';
import Hero from '../Hero';
import Image from '../../images/img-1.jpg';
import { motion } from 'framer-motion';
import { animationOne, transition } from '../../animations';
import According from '../Dropdown/According';

const Home = () => {
    return (
        <motion.div
            initial="out"
            animate="in"
            exit="out"
            variants={animationOne}
            transition={transition}
        >
            <Header />
            <Hero
                image={Image}
                title="Experience"
                description="You should know a lots information here"
            />
            <According />
        </motion.div>
    )
}

export default Home
