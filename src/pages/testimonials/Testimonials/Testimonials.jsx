import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './Testimonials.css';
import { FaQuoteRight } from "react-icons/fa";
import ReactStars from "react-rating-stars-component";
import { motion } from "framer-motion"

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/testimonials')
            .then(res => res.json())
            .then(data => setTestimonials(data))
    }, [])
    return (
        <div className='bg-base-200'>
            <div className='py-16 container mx-auto grid lg:grid-cols-2 gap-8 px-4'>
                <div className='flex flex-col justify-center'>
                    <motion.h3
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.2,
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 0.6 },
                            ease: "easeIn",
                            duration: 1
                        }}
                        className='text-1xl font-bold text-[#64ab45] bg-[#dde5da] px-4 py-2 w-2/3 md:1/3 rounded'
                    >
                        Our testimonials
                    </motion.h3>
                    <motion.h1
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.3,
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 0.6 },
                            ease: "easeIn",
                            duration: 1
                        }}
                        className="my-8 text-3xl md:text-5xl font-bold"
                    >
                        What they’re talking about our policy
                    </motion.h1>
                    <motion.p
                        initial={{ x: -100, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.4,
                            x: { type: "spring", stiffness: 60 },
                            opacity: { duration: 0.6 },
                            ease: "easeIn",
                            duration: 1
                        }}
                        className="text-[#82828A]"
                    >
                        Our Client valuable reviews are the jems of TravelBod, Which makes us more connected towards You.
                    </motion.p>
                    <Link to='/testimonials'>
                        <motion.button
                            initial={{ x: -100, opacity: 0 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{
                                delay: 0.5,
                                x: { type: "spring", stiffness: 60 },
                                opacity: { duration: 0.6 },
                                ease: "easeIn",
                                duration: 1
                            }}
                            className="btn text-white text-[17px] bg-[#64ab45] hover:bg-[#82d75d] my-6">All Testimonials</motion.button>
                    </Link>
                </div>
                <Swiper
                    slidesPerView={1}
                    loop={true}
                    navigation={true}
                    modules={[Navigation]}
                    className='shadow-xl shadow-[#e2f3da] testimonial rounded-xl'
                >
                    {
                        testimonials.map(testimonial => <SwiperSlide className='rounded-xl'>
                            <div className='p-8 md:p-16'>
                                <span className='flex justify-end text-4xl lg:text-6xl text-[#64ab45ab]'><FaQuoteRight /></span>
                                <div className='flex items-center'>
                                    <img className='testimonial_img' src={testimonial.img} alt="" />
                                    <div className='ms-2'>
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            color="#64ab45"
                                        />
                                        <p className='text-left text-2xl font-bold'>{testimonial.name}</p>
                                        <p className='text-[17px] text-[#82828A] text-left'>{testimonial.designation}</p>
                                    </div>
                                </div>
                                <p className='text-[#82828A] my-4 text-left'>{testimonial.review}</p>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    );
};

export default Testimonials;