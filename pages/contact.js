import React, { useRef, useState } from "react";
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import emailjs from "emailjs-com";

export default function Contact() {

    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault(); // page reload na ho

        setLoading(true);

        emailjs.sendForm(
            "service_7fzik0i",
            "template_p2bvc3b",
            form.current,
            "YnUnp0MBrN-bhmakE"
        ).then(
            (result) => {
                console.log(result.text);
                setLoading(false);
                setShowSuccess(true); // Success popup show

                // Form fields clear kar do
                form.current.reset();

                // 4 seconds baad popup hide (optional)
                setTimeout(() => {
                    setShowSuccess(false);
                }, 6000);
            },
            (error) => {
                console.log(error.text);
                setLoading(false);
                alert("An error occurred, please try again.");
            }
        );
    };


    return (
        <>
            <Layout breadcrumbTitle="Contact">
                {/*-contact*/}
                <section className="contact-section pd_top_90 pd_bottom_70">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                <div className="contact_box_content bg_white shadow_sm rounded p-5 text-center h-100">
                                    <div className="icon trans mb-4">
                                        <img src="/assets/images/cont-1.png" alt="Location icon" className="img-fluid" width={60} />
                                    </div>
                                    <h6 className="title_no_a_24 mb-3">Location</h6>
                                    <p className="mb-0">
                                        Med Jaaf Solutions LLC<br />
                                        86 LACKAWANNA AVE STE 103<br />
                                        WOODLAND PARK, NJ 07424
                                    </p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                <div className="contact_box_content bg_white shadow_sm rounded p-5 text-center h-100">
                                    <div className="icon trans mb-4">
                                        <img src="/assets/images/cont-2.png" alt="Email icon" className="img-fluid" width={60} />
                                    </div>
                                    <h6 className="title_no_a_24 mb-3">Email</h6>
                                    <Link href="mailto:Medjaafsolutions@gmail.com" className="text_primary hover_underline">
                                        Medjaafsolutions@gmail.com
                                    </Link>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-sm-12 mb-4">
                                <div className="contact_box_content bg_white shadow_sm rounded p-5 text-center h-100">
                                    <div className="icon trans mb-4">
                                        <img src="/assets/images/cont-3.png" alt="Phone icon" className="img-fluid" width={60} />
                                    </div>
                                    <h6 className="title_no_a_24 mb-3">Call Us</h6>
                                    <Link href="tel:+9592350229" className="text_primary hover_underline">
                                        +959 235 0229
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/*-contact end*/}\
                {/*map*/}
                <section className="contact-map-section">
                    <div className="container-no">
                        <div className="row">
                            <div className="col-lg-12">
                                <section className="map-section">
                                    {/*Map Outer*/}
                                    <div className="map-outer">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan%20Rafael%2C%20California%2C%20Hoa%20K%E1%BB%B3!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                </section>
                {/*map*/}
                {/*form*/}
                <section className="form-section bg_light_1 position-relative">
                    {/*-============spacing==========-*/}
                    <div className="pd_top_90" />
                    {/*-============spacing==========-*/}
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-4 col-md-12">
                                <div className="section_title type_one">
                                    <h4 className="sm_title">Contact Us</h4>
                                    <div className="title_whole">
                                        <h3 className="title"> We have two ears and one mouth so we can listen twice as much as we speak.
                                        </h3>
                                    </div>
                                    <p>Epictetus, Greek Philosopher</p>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_40" />
                                {/*-============spacing==========-*/}
                                <div className="social-icons">
                                    <ul>


                                        <li><Link href="#" className="m_icon"> <i className="fab fa-instagram" />
                                        </Link></li>
                                    </ul>
                                </div>
                                {/*-============spacing==========-*/}
                                <div className="pd_bottom_20" />
                                {/*-============spacing==========-*/}
                            </div>
                            <div className="col-lg-8 col-md-12">
                                <section className="contact_form_box_all">
                                    <div className="contact_form_shortcode">
                                        <form ref={form} onSubmit={sendEmail} id="contact-form">
                                            <div className="messages" />
                                            <div className="controls">
                                                <div className="row">

                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <input type="text" name="organization_name" placeholder="Organization Name *" required="required" data-error="Enter Organization Name" />
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                    </div>


                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <input type="text" name="organization_location" placeholder="Organization Location *" required="required" data-error="Enter Organization Location" />
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                    </div>


                                                    <div className="col-md-6 col-sm-12 ">
                                                        <div className="form-group " style={{ backgroundColor: "white", }}
                                                        >
                                                            <select name="states" className="form-control" required="required" data-error="Select a State" >
                                                                <option value="" disabled selected>Select State *</option>
                                                                <option value="AL">Alabama</option>
                                                                <option value="AK">Alaska</option>
                                                                <option value="AZ">Arizona</option>
                                                                <option value="AR">Arkansas</option>
                                                                <option value="CA">California</option>
                                                                <option value="CO">Colorado</option>
                                                                <option value="CT">Connecticut</option>
                                                                <option value="DE">Delaware</option>
                                                                <option value="DC">District of Columbia</option>
                                                                <option value="FL">Florida</option>
                                                                <option value="GA">Georgia</option>
                                                                <option value="HI">Hawaii</option>
                                                                <option value="ID">Idaho</option>
                                                                <option value="IL">Illinois</option>
                                                                <option value="IN">Indiana</option>
                                                                <option value="IA">Iowa</option>
                                                                <option value="KS">Kansas</option>
                                                                <option value="KY">Kentucky</option>
                                                                <option value="LA">Louisiana</option>
                                                                <option value="ME">Maine</option>
                                                                <option value="MD">Maryland</option>
                                                                <option value="MA">Massachusetts</option>
                                                                <option value="MI">Michigan</option>
                                                                <option value="MN">Minnesota</option>
                                                                <option value="MS">Mississippi</option>
                                                                <option value="MO">Missouri</option>
                                                                <option value="MT">Montana</option>
                                                                <option value="NE">Nebraska</option>
                                                                <option value="NV">Nevada</option>
                                                                <option value="NH">New Hampshire</option>
                                                                <option value="NJ">New Jersey</option>
                                                                <option value="NM">New Mexico</option>
                                                                <option value="NY">New York</option>
                                                                <option value="NC">North Carolina</option>
                                                                <option value="ND">North Dakota</option>
                                                                <option value="OH">Ohio</option>
                                                                <option value="OK">Oklahoma</option>
                                                                <option value="OR">Oregon</option>
                                                                <option value="PA">Pennsylvania</option>
                                                                <option value="RI">Rhode Island</option>
                                                                <option value="SC">South Carolina</option>
                                                                <option value="SD">South Dakota</option>
                                                                <option value="TN">Tennessee</option>
                                                                <option value="TX">Texas</option>
                                                                <option value="UT">Utah</option>
                                                                <option value="VT">Vermont</option>
                                                                <option value="VA">Virginia</option>
                                                                <option value="WA">Washington</option>
                                                                <option value="WV">West Virginia</option>
                                                                <option value="WI">Wisconsin</option>
                                                                <option value="WY">Wyoming</option>
                                                            </select>
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                    </div>


                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <input type="url" name="organization_website" placeholder="Organization Website (If available)" />
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                    </div>


                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <input type="text" name="first_name" placeholder="First Name *" required="required" data-error="Enter First Name" />
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                    </div>


                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <input type="text" name="last_name" placeholder="Last Name *" required="required" data-error="Enter Last Name" />
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                    </div>


                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <input type="email" name="email" placeholder="Email *" required="required" data-error="Enter Your Email" />
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                    </div>


                                                    <div className="col-md-6 col-sm-12">
                                                        <div className="form-group">
                                                            <input type="tel" name="phone" placeholder="Phone *" required="required" data-error="Enter Your Phone" />
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                    </div>


                                                    <div className="col-sm-12">
                                                        <p className="mb-2 pt-3">Preferred Form of Communication *</p>

                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="preferred_communication"
                                                                id="comm_email"
                                                                value="Email"
                                                                style={{ padding: '10px' }}
                                                            />
                                                            <label className="form-check-label" htmlFor="comm_email">Email</label>
                                                        </div>

                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="preferred_communication"
                                                                id="comm_call"
                                                                value="Call Me"
                                                                style={{ padding: '10px' }}
                                                            />
                                                            <label className="form-check-label" htmlFor="comm_call">Call Me</label>
                                                        </div>

                                                        <div className="form-check form-check-inline">
                                                            <input
                                                                className="form-check-input"
                                                                type="radio"
                                                                name="preferred_communication"
                                                                id="comm_text"
                                                                value="Text Message"
                                                                style={{ padding: '10px' }}
                                                            />
                                                            <label className="form-check-label" htmlFor="comm_text">Text Message</label>
                                                        </div>
                                                    </div>


                                                    {/* Specialty Input - Name badal kar 'user_specialty' kar diya */}
                                                    <div className="col-md-12 col-sm-12">
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                name="user_specialty"
                                                                placeholder="Specialty *"
                                                                required="required"
                                                            />
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                    </div>

                                                    {/* Message Textarea - Name badal kar 'user_message' kar diya */}
                                                    <div className="col-sm-12">
                                                        <div className="form-group">
                                                            <textarea
                                                                name="user_message"
                                                                placeholder="How can we help you? *"
                                                                rows={4}
                                                                required="required"
                                                            ></textarea>
                                                            <div className="help-block with-errors" />
                                                        </div>
                                                    </div>



                                                    <div className="col-sm-12">
                                                        <p className="text-muted small pt-3">
                                                            By texting START or initiating a conversation with +959 235 0229, you consent to receive marketing text messages from Speedy Credentialing. Consent is not a condition of purchase. Message and data rates may apply. Message frequency varies. Unsubscribe at any time by replying STOP. Reply HELP for help.
                                                            <a style={{
                                                                position: "relative",
                                                                zIndex: 9999,
                                                            }} href="/privacy">Privacy Policy</a> |<a
                                                                href="/terms"
                                                                style={{
                                                                    position: "relative",
                                                                    zIndex: 9999,
                                                                }}
                                                            >
                                                                Terms & Conditions
                                                            </a>

                                                        </p>
                                                    </div>

                                                    <div className="col-sm-12">
                                                        <div className="form-group mg_top apbtn">
                                                            <button
                                                                className="theme_btn"
                                                                type="submit"
                                                                disabled={loading} // Submit ke time disable
                                                                style={{
                                                                    position: "relative",
                                                                    zIndex: 9999,
                                                                    opacity: loading ? 0.8 : 1,
                                                                }}
                                                            >
                                                                {loading ? (
                                                                    <>
                                                                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                                                                        Sending...
                                                                    </>
                                                                ) : (
                                                                    "Get a Complementary Analysis"
                                                                )}
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </section>
                            </div>
                        </div>
                    </div>
                    {/* Success Popup Modal */}
                    {showSuccess && (
                        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ backgroundColor: "rgba(0,0,0,0.5)", zIndex: 9999 }}>
                            <div className="bg-white rounded shadow p-5 text-center" style={{ maxWidth: "500px", animation: "fadeIn 0.5s" }}>
                                <div className="mb-4">
                                    <i className="fas fa-check-circle text-primary" style={{ fontSize: "60px" }}></i>
                                </div>
                                <h4 className="text-primary mb-3">Message Sent Successfully!</h4>
                                <p>Thank you for contacting us. We will get back to you shortly.</p>
                                <button
                                    className="theme_btn mt-3"
                                    onClick={() => setShowSuccess(false)}
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    )}
                    <div className="ab_img_left_bottom z_0 mr_top_minus_150">
                        <img src="/assets/images/bg-1.png" className="img-fluid" alt="img" />
                    </div>
                    {/*-============spacing==========-*/}
                    <div className="pd_bottom_90" />
                    {/*-============spacing==========-*/}
                </section>
                {/*form*/}


            </Layout>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: scale(0.9); }
                    to { opacity: 1; transform: scale(1); }
                }
            `}</style>
        </>
    )
}