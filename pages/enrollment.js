import Layout from "@/components/layout/Layout";
import { useState, useRef } from 'react';
import {
    User,
    Building2,
    FileUp,
    ShieldCheck,
    ChevronRight,
    CheckCircle2
} from 'lucide-react'; // Suggested icons
import emailjs from "emailjs-com";


export default function Team() {
    const [currentStep, setCurrentStep] = useState(1);

    const form = useRef();
    const [loading, setLoading] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault(); // page reload na ho

        setLoading(true);

        emailjs.sendForm(
            "service_phzeixp",
            "template_er4zxdi",
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

    const insuranceList = [
        "ACI Specialty Benefits", "Aetna", "Amerigroup", "AmeriHealth", "Anthem", "Banner Health",
        "Beacon Health Options", "Blue Cross Blue Shield", "CareConnect Health Plan", "Centene Corporation",
        "CHAMPVA", "Choice Health-Care Network", "Cigna and Ever-north", "ComPsych", "EmblemHealth",
        "GHI", "Great-West Life", "Health Net", "Health Net I MHN", "Health Plus", "Horizon Blue Cross",
        "Horizon Blue Cross and Blue", "Horizon Healthcare", "Humana", "Kaiser Permanente", "Magellan",
        "MagnaCare", "Medicaid", "Medicare", "Mercy Care", "Meridian", "Molina Healthcare", "MultiPlan",
        "Optum", "Oscar Health", "Oxford", "Phoenix Health Plan", "Sharp Health plan", "TRICARE",
        "UMR", "UnitedHealthcare IJHC I UBH", "VA Community Care Network", "Other"
    ];

    const documentList = [
        { label: "State License", required: true },
        { label: "IRS Letter", required: true, note: "Compulsory" },
        { label: "Accreditation Letter", required: false },
        { label: "Malpractice/PLI/COI", required: true },
        { label: "W9 Form", required: true },
        { label: "Voided Check/Bank Letter", required: true },
        { label: "Owner Driving License", required: true },
        { label: "Resume / CV", required: true }
    ];

    return (
        <Layout breadcrumbTitle="Enrollment">
            <section className="enrollment-form-area py-5 bg-light min-vh-100">
                <div className="container">


                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="form-header mb-5">
                                <h2 className="display-6 fw-bold text-dark">Provider/Facility Details</h2>
                            </div>

                            <form ref={form} onSubmit={sendEmail} className="enrollment-form bg-white p-4 p-md-5 rounded-4 shadow-sm border">

                                {/* --- Section 1: Personal Details --- */}
                                <div className="form-section mb-5">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="icon-box bg-primary-light text-primary me-3">
                                            <User size={24} />
                                        </div>
                                        <h4 className="mb-0 fw-bold">1. Provider Information</h4>
                                    </div>
                                    <div className="row g-4">
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Full Name *</label>
                                            <input type="text" name="full_name" className="form-control custom-input" placeholder="Legal Name" required />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label small fw-bold text-uppercase text-muted">SSN (Last 4)</label>
                                            <input type="text" name="ssn_last4" className="form-control custom-input" placeholder="0000" maxLength="4" />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Date of Birth</label>
                                            <input type="date" name="dob" className="form-control custom-input" />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Percentage of Ownership</label>
                                            <input type="text" name="ownership_percentage" className="form-control custom-input" placeholder="%" />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label small fw-bold text-uppercase text-muted">NPPES username</label>
                                            <input type="text" name="nppes_username" className="form-control custom-input" placeholder="NPPES username" />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label small fw-bold text-uppercase text-muted">NPPES password</label>
                                            <input type="text" name="nppes_password" className="form-control custom-input" placeholder="NPPES password" />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Speciality</label>
                                            <input type="text" name="speciality" className="form-control custom-input" placeholder="e.g. Cardiology" />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Email Address</label>
                                            <input type="email" name="provider_email" className="form-control custom-input" placeholder="email@provider.com" />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Cell No.</label>
                                            <input type="tel" name="cell_no" className="form-control custom-input" placeholder="+1..." />
                                        </div>
                                    </div>
                                </div>

                                {/* --- Section 2: Facility Details --- */}
                                <div className="form-section mb-5">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="icon-box bg-success-light text-success me-3">
                                            <Building2 size={24} />
                                        </div>
                                        <h4 className="mb-0 fw-bold">2. Facility Details</h4>
                                    </div>
                                    <div className="row g-4">
                                        <div className="col-md-12">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Facility/Agency Name</label>
                                            <input type="text" name="facility_name" placeholder="Facility/Agency Name" className="form-control custom-input" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Tax ID </label>
                                            <input type="text" name="tax_id" placeholder="Tax ID " className="form-control custom-input" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">NPI Type 1 (Individual)</label>
                                            <input type="text" name="npi_individual" placeholder="NPI Type 1 (Individual)" className="form-control custom-input" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">NPI Type 2 (group)</label>
                                            <input type="text" name="npi_group" placeholder="NPI Type 2 (group)" className="form-control custom-input" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Primary Service Address</label>
                                            <input type="text" name="primary_address" placeholder="Primary Service Address" className="form-control custom-input" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Pay to Address</label>
                                            <input type="text" name="pay_to_address" placeholder="Pay to Address" className="form-control custom-input" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Mailing Address</label>
                                            <input type="text" name="mailing_address" placeholder="Mailing Address" className="form-control custom-input" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Office Hours at location</label>
                                            <input type="text" name="office_hours" placeholder="Office Hours at location" className="form-control custom-input" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Appointment Phone No.</label>
                                            <input type="text" name="appointment_phone" placeholder="Appointment Phone No." className="form-control custom-input" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Fax No.</label>
                                            <input type="text" name="fax_no" placeholder="Fax No." className="form-control custom-input" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Office Email </label>
                                            <input type="text" name="office_email" placeholder="Office Email" className="form-control custom-input" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Office Manager/Contact </label>
                                            <input type="text" name="office_manager" placeholder="Office Manager/Contact " className="form-control custom-input" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">CAQH logins</label>
                                            <input type="text" name="caqh_logins" placeholder="CAQH logins" className="form-control custom-input" />
                                        </div>
                                    </div>
                                </div>

                                {/* --- Section 3: Document Uploads --- */}
                                {/* --- Section 3: Document Uploads --- */}
                                <div className="form-section mb-5">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="icon-box bg-warning-light text-warning me-3">
                                            <FileUp size={24} />
                                        </div>
                                        <h4 className="mb-0 fw-bold">3. Compliance Documents</h4>
                                    </div>
                                    <h5>You can add anything else you’d like, but please make sure to include the IRS option — it’s required.</h5>

                                    <div className="row g-3">
                                        {documentList.map((doc, index) => {
                                            // Label ko clean karke name banate hain (spaces aur special chars hata kar)
                                            const fieldName = doc.label
                                                .toLowerCase()
                                                .replace(/[^a-z0-9]/g, '_')  // sab non-alphanumeric ko _ se replace
                                                .replace(/_+/g, '_');        // multiple _ ko single kar do

                                            return (
                                                <div key={index} className="col-md-6">
                                                    <div className="upload-card">
                                                        <div className="d-flex justify-content-between mb-2">
                                                            <span className="fw-semibold small">
                                                                {doc.label} {doc.required && <span className="text-danger">*</span>}
                                                            </span>
                                                            {doc.note && <span className="badge bg-soft-danger text-danger">{doc.note}</span>}
                                                        </div>
                                                        <input
                                                            type="file"
                                                            name={fieldName}  // ← Yeh important hai EmailJS ke liye
                                                            className="form-control form-control-sm"
                                                            accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
                                                        />
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* --- Section 4: Insurance Companies --- */}
                                <div className="form-section mb-5">
                                    <div className="d-flex align-items-center mb-4">
                                        <div className="icon-box bg-info-light text-info me-3">
                                            <ShieldCheck size={24} />
                                        </div>
                                        <h4 className="mb-0 fw-bold">4. Insurance Selection</h4>
                                    </div>

                                    {/* Hidden field for EmailJS */}
                                    <input type="hidden" name="selected_insurances" id="selected_insurances" />

                                    <div className="insurance-grid-container p-3 border rounded-3 bg-light-subtle">
                                        <div className="row g-2 overflow-auto" style={{ maxHeight: '350px' }}>
                                            {insuranceList.map((item, index) => (
                                                <div key={index} className="col-md-4 col-sm-6">
                                                    <div className="insurance-check-card">
                                                        <input
                                                            type="checkbox"
                                                            className="btn-check"
                                                            id={`ins-${index}`}
                                                            value={item}
                                                            onChange={(e) => {
                                                                const hiddenInput = document.getElementById('selected_insurances');
                                                                let values = hiddenInput.value ? hiddenInput.value.split(' | ') : [];

                                                                if (e.target.checked) {
                                                                    if (!values.includes(item)) {
                                                                        values.push(item);
                                                                    }
                                                                } else {
                                                                    values = values.filter(v => v !== item);
                                                                }

                                                                hiddenInput.value = values.join(' | ');
                                                            }}
                                                        />
                                                        <label
                                                            className="btn btn-outline-primary btn-sm w-100 text-start d-flex align-items-center"
                                                            htmlFor={`ins-${index}`}
                                                        >
                                                            <CheckCircle2 size={14} className="me-2 icon-check" />
                                                            <span className="text-truncate">{item}</span>
                                                        </label>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>


                                {/* --- Submit --- */}
                                <div className="submit-area border-top pt-5 ">

                                    <div className="col-md-12">
                                        <p>Write Other Insurance Company that you want to be registered that are not mentioned in our list
                                        </p>
                                        <textarea
                                            name="other_insurances"
                                            rows="4"
                                            className="form-control custom-input"
                                            placeholder="Enter any other insurance companies..."
                                        ></textarea>                                    </div>

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
                                            "Send"
                                        )}
                                    </button>
                                </div>
                            </form>
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
                        </div>
                    </div>
                </div>
            </section>

            <style jsx>{`
                /* Modern Color Palette & UI Elements */
                .bg-primary-light { background: #e7f1ff; }
                .bg-success-light { background: #e6fcf5; }
                .bg-warning-light { background: #fff9db; }
                .bg-info-light { background: #e3fafc; }
                
                .icon-box {
                    width: 48px;
                    height: 48px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border-radius: 12px;
                }

                .custom-input {
                    padding: 0.75rem 1rem;
                    border: 1px solid #dee2e6;
                    border-radius: 10px;
                    transition: all 0.2s ease;
                }

                .custom-input:focus {
                    border-color: #0d6efd;
                    box-shadow: 0 0 0 4px rgba(13, 110, 253, 0.1);
                    background-color: #fff;
                }

                .upload-card {
                    background: #f8f9fa;
                    border: 2px dashed #dee2e6;
                    padding: 15px;
                    border-radius: 12px;
                    transition: all 0.2s ease;
                }

                .upload-card:hover {
                    border-color: #0d6efd;
                    background: #fff;
                }

                /* Stepper Styling */
                .stepper-wrapper {
                    padding: 0 40px;
                }
                .stepper-wrapper::before {
                    content: '';
                    position: absolute;
                    top: 50%;
                    left: 0;
                    right: 0;
                    height: 2px;
                    background: #dee2e6;
                    z-index: 0;
                }
                .step-item {
                    position: relative;
                    z-index: 1;
                }
                .step-circle {
                    width: 40px;
                    height: 40px;
                    background: #fff;
                    border: 2px solid #dee2e6;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-weight: bold;
                    color: #adb5bd;
                }
                .step-item.active .step-circle {
                    background: #0d6efd;
                    border-color: #0d6efd;
                    color: #fff;
                }
           
                .btn-check {
    position: absolute;
    opacity: 0;
    pointer-events: none;
}

                /* Insurance Grid */
                .insurance-check-card .btn-outline-primary {
                    border-color: #eee;
                    color: #444;
                    background: white;
                    padding: 10px;
                    border-radius: 8px;
                    font-size: 0.85rem;
                }
                .insurance-check-card .icon-check { opacity: 0; transition: 0.2s; }
                .btn-check:checked + .btn {
                    background-color: #0d6efd !important;
                    color: white !important;
                    border-color: #0d6efd;
                }
                .btn-check:checked + .btn .icon-check { opacity: 1; }

                .bg-soft-danger { background-color: #fee2e2; }
            `}</style>
        </Layout>
    );
}