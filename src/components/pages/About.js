import React from 'react';
import Header from '../Header';
import Hero from '../Hero';
import Image from '../../images/img-5.jpeg';
import { motion } from 'framer-motion';
import { animationTwo, transition } from '../../animations';
import According from '../Dropdown/According';
import MainTodo from '../Todo/MainTodo';

const About = () => {
    return (
        <>
            <motion.div
                initial="out"
                animate="in"
                exit="out"
                variants={animationTwo}
                transition={transition}
            >
                <Header />
                <Hero
                    image={Image}
                    title="Decision matter"
                    description="Do today than tomorrow!"
                />
            </motion.div>
            <MainTodo />
        </>
    )
}

export default About
