import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';


const Section4 = () => {
    return (
        <>
            <style>
                {`
                .swiper-pagination-bullet {
                    background-color: #ec0101 !important;
                } 
                `}
            </style>
            <div className="container sectionfour mb-5">
                <div className="row">
                    <div className="row mt-5 py-5">
                        <div className="col-lg-12 text-center">
                            <img src="https://preview.colorlib.com/theme/nova/images/karate-divider.png.webp" alt="" className='img-fluid ms-0 mb-2' />
                            <h2 className='text-center ourTeacher'>our Testimonials</h2>
                        </div>
                    </div>
                </div>
                <Swiper
                    cssMode={true}
                    navigation={true}
                    pagination={{ clickable: true }}
                    mousewheel={true}
                    keyboard={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="container mb-5 mt-5">
                            <div className="row d-flex justify-content-center mt-5" >
                                <div className="col-lg-7 mx-auto">
                                    <div className="teacher mt-5 mx-auto text-center ">
                                        <img src="https://preview.colorlib.com/theme/nova/images/person_1.jpg.webp" className='img-fluid border mx-auto d-block' alt="" />
                                        <h3 className='font-weight-bold mt-0'>Maria Jones </h3>
                                        <span className='d-block mt-0 mb-5'>Instructor</span>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container mt-5">
                            <div className="row d-flex justify-content-center mt-5" >
                                <div className="col-lg-7 mx-auto">
                                    <div className="teacher mt-5 mx-auto text-center ">
                                        <img src="https://preview.colorlib.com/theme/nova/images/person_1.jpg.webp" className='img-fluid border mx-auto d-block' alt="" />
                                        <h3 className='font-weight-bold mt-0'>Maria Jones </h3>
                                        <span className='d-block mt-0 mb-5'>Instructor</span>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="container mt-5">
                            <div className="row d-flex justify-content-center mt-5" >
                                <div className="col-lg-7 mx-auto">
                                    <div className="teacher mt-5 mx-auto text-center ">
                                        <img src="https://preview.colorlib.com/theme/nova/images/person_1.jpg.webp" className='img-fluid border mx-auto d-block' alt="" />
                                        <h3 className='font-weight-bold mt-0'>Maria Jones </h3>
                                        <span className='d-block mt-0 mb-5'>Instructor</span>
                                        <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
}

export default Section4;
