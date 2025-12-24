import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper';

// Import Swiper styles (ensure these are in your global CSS or imported here)
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export default function Banner1() {
    const slides = [
        {
            title: "Streamline Your Credentialing Process with Speed, Accuracy, and Confidence",
            description: "At Med Jaff, we specialize exclusively in delivering fast, reliable, and customized medical credentialing services to healthcare providers across the United States.",
            image: "/assets/images/new-images/3img.webp"
        },
        {
            title: "Struggling with Medical Credentialing?",
            description: "Let us handle the hassle — streamline your healthcare services with our expert credentialing solutions across the USA.",
            image: "/assets/images/new-images/4img.webp" // Replace with your 2nd image
        },
        {
            title: "Credentialing Solutions That Grow With You",
            description: "Whether you're an independent provider launching your first practice or a growing healthcare group expanding into new states, Med Jaff adapts to your evolving needs. We manage everything from initial enrollment and multi-state licensing to payer re- credentialing and ongoing compliance — so you can scale with confidence.",
            image: "/assets/images/new-images/5img.webp" // Replace with your 3rd image
        }
    ];

    return (
        <section className="single_banner style_one">
            <style>{`
                /* Allow pagination to be seen outside the swiper box */
                .mySwiper {
                    overflow: visible !important; 
                    position: relative;
                }
                .mySwiper .swiper-pagination {
                    bottom: -60px !important;
                    z-index: 100;
                }
                .mySwiper .swiper-pagination-bullet {
                    background: #077A7D;
                    width: 12px;
                    height: 12px;
                    opacity: 0.5;
                    margin: 0 6px !important;
                }
                .mySwiper .swiper-pagination-bullet-active {
                    opacity: 1;
                    transform: scale(1.2);
                }
                /* Customizing Navigation Arrows */
                .mySwiper .swiper-button-prev {
                    color: #077A7D;
                    z-index: 101;
                }
                .mySwiper .swiper-button-next:after, 
                .mySwiper .swiper-button-prev:after {
                    font-size: 20px;
                    font-weight: bold;
                }
            `}</style>
            {/* Background remains static as per your design */}
            <div className="image_bg">
                <img src="/assets/images/slider/banner-single-4-bg.png" className="img-fluid" alt="img" />
            </div>

            <Swiper
                spaceBetween={0}
                centeredSlides={true}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                pagination={{ clickable: true }}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <div className="content_box">
                            <div className="large-container">
                                <div className="row align-items-center">
                                    <div className="col-lg-5">
                                        <div className="section_title type_one">
                                            <div className="title_whole">
                                                <h4 className="title">{slide.title}</h4>
                                            </div>
                                            <p>{slide.description}</p>
                                        </div>
                                        <div className="newsteller_simple mt-4">
                                            <div className="d-flex align-items-center">
                                                <button
                                                    type="button"
                                                    className="btn btn-sm rounded-pill shadow-sm px-5 py-3 text-uppercase fw-bold d-inline-flex align-items-center justify-content-center"
                                                    style={{
                                                        backgroundColor: '#077A7D',
                                                        color: '#fff',
                                                        border: 'none',
                                                        transition: 'all 0.3s ease'
                                                    }}
                                                    onMouseOver={(e) => {
                                                        e.currentTarget.style.backgroundColor = '#055f61';
                                                        e.currentTarget.style.transform = 'translateY(-3px)';
                                                        e.currentTarget.style.boxShadow = '0 1rem 3rem rgba(0,0,0,.175)';
                                                    }}
                                                    onMouseOut={(e) => {
                                                        e.currentTarget.style.backgroundColor = '#077A7D';
                                                        e.currentTarget.style.transform = 'translateY(0)';
                                                        e.currentTarget.style.boxShadow = 'none';
                                                    }}
                                                >
                                                    Start the Conversation
                                                    <i className="fa fa-chevron-right ms-3" style={{ fontSize: '14px' }}></i>
                                                </button>
                                            </div>
                                        </div>
                                        <div className="review_box d-flex gap-3 align-items-center mb-5">
                                            {[
                                                "https://speedycredentialing.com/wp-content/uploads/2025/05/Asset-7_.webp",
                                                "https://vagabondtoursofireland.com/images-adventures/reviews/google-reviews.png",
                                                "https://speedycredentialing.com/wp-content/uploads/2025/05/Asset-28home.svg"
                                            ].map((src, i) => (
                                                <div key={i} style={{ width: '80px', height: '80px', marginRight: '10px' }}>
                                                    <img src={src} alt="img" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                                                </div>
                                            ))}
                                        </div>

                                    </div>
                                    <div className="col-lg-1" />
                                    <div className="col-lg-6">
                                        <div className="image">
                                            <img src={slide.image} className="img-fluid" alt="img" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* Absolute Title remains static as per your design */}

            <div className="section_title abso type_one">
                <div className="title_whole">
                    <h2 className="title"> INSURANCE</h2>
                </div>
            </div>
        </section>
    );
}