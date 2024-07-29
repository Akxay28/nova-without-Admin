import React from 'react'

const Section2 = () => {
    return (
        < >
            <div className="container main-container ">
                <div className="row   ">
                    <div className="col-lg-12 text-center">
                        <img src="https://preview.colorlib.com/theme/nova/images/karate-divider.png.webp" alt="" className='img-fluid ' />
                        <h2 className='text-center ourTeacher'>our teachers</h2>
                    </div>
                </div>

                {/* Card Section   */}

                <div className="container   mt-5 mb-5">
                    <div className="row mt-5">
                        <div className="col-lg-3 mt-5   ">
                            <div className="card cardData text-center">
                                <img src="https://preview.colorlib.com/theme/nova/images/person_1.jpg.webp" className='img-fluid' alt="" />
                                <h3 className='font-weight-bold'>Maria Jones </h3>
                                <span className='d-block mb-5'>Instructor</span>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            </div>
                        </div>
                        <div className="col-lg-3 mt-5   ">
                            <div className="card cardData bgcolor2 text-center">
                                <img src="https://preview.colorlib.com/theme/nova/images/person_2.jpg" className='img-fluid' alt="" />
                                <h3 className='font-weight-bold'>James Campbel
                                </h3>
                                <span className='d-block mb-5'>Instructor</span>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            </div>
                        </div> <div className="col-lg-3 mt-5    ">
                            <div className="card cardData bgcolor3 text-center">
                                <img src="https://preview.colorlib.com/theme/nova/images/person_3.jpg" className='img-fluid' alt="" />
                                <h3 className='font-weight-bold'>Rob Smith
                                </h3>
                                <span className='d-block mb-5'>Instructor</span>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            </div>
                        </div> <div className="col-lg-3 mt-5    ">
                            <div className="card cardData bgcolor4 text-center">
                                <img src="https://preview.colorlib.com/theme/nova/images/person_4.jpg" className='img-fluid' alt="" />
                                <h3 className='font-weight-bold'>Kaye Hamilton
                                </h3>
                                <span className='d-block mb-5'>Instructor</span>
                                <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Section2