import Layout from "@/components/layout/Layout";
import { useState } from 'react';
import {
    User,
    Building2,
    FileUp,
    ShieldCheck,
    ChevronRight,
    CheckCircle2
} from 'lucide-react'; // Suggested icons

export default function Team() {
    const [currentStep, setCurrentStep] = useState(1);

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

                            <form className="enrollment-form bg-white p-4 p-md-5 rounded-4 shadow-sm border">

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
                                            <input type="text" className="form-control custom-input" placeholder="Legal Name" required />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label small fw-bold text-uppercase text-muted">SSN (Last 4)</label>
                                            <input type="text" className="form-control custom-input" placeholder="0000" maxLength="4" />
                                        </div>
                                        <div className="col-md-3">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Date of Birth</label>
                                            <input type="date" className="form-control custom-input" />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Percentage of Ownership</label>
                                            <input type="text" className="form-control custom-input" placeholder="%" />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label small fw-bold text-uppercase text-muted">NPPES username</label>
                                            <input type="text" className="form-control custom-input" placeholder="NPPES username" />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label small fw-bold text-uppercase text-muted">NPPES password</label>
                                            <input type="text" className="form-control custom-input" placeholder="NPPES password" />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Speciality</label>
                                            <input type="text" className="form-control custom-input" placeholder="e.g. Cardiology" />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Email Address</label>
                                            <input type="email" className="form-control custom-input" placeholder="email@provider.com" />
                                        </div>
                                        <div className="col-md-4">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Cell No.</label>
                                            <input type="tel" className="form-control custom-input" placeholder="+1..." />
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
                                            <input type="text" placeholder="Facility/Agency Name" className="form-control custom-input" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Tax ID </label>
                                            <input type="text" placeholder="Tax ID " className="form-control custom-input" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">NPI Type 1 (Individual)</label>
                                            <input type="text" placeholder="NPI Type 1 (Individual)" className="form-control custom-input" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">NPI Type 2 (group)</label>
                                            <input type="text" placeholder="NPI Type 2 (group)" className="form-control custom-input" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Primary Service Address</label>
                                            <input type="text" placeholder="Primary Service Address" className="form-control custom-input" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Pay to Address</label>
                                            <input type="text" placeholder="Pay to Address" className="form-control custom-input" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Mailing Address</label>
                                            <input type="text" placeholder="Mailing Address" className="form-control custom-input" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Office Hours at location</label>
                                            <input type="text" placeholder="Office Hours at location" className="form-control custom-input" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Appointment Phone No.</label>
                                            <input type="text" placeholder="Appointment Phone No." className="form-control custom-input" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Fax No.</label>
                                            <input type="text" placeholder="Fax No." className="form-control custom-input" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Office Email </label>
                                            <input type="text" placeholder="Office Email" className="form-control custom-input" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">Office Manager/Contact </label>
                                            <input type="text" placeholder="Office Manager/Contact " className="form-control custom-input" />
                                        </div>
                                        <div className="col-md-6">
                                            <label className="form-label small fw-bold text-uppercase text-muted">CAQH logins</label>
                                            <input type="text" placeholder="CAQH logins" className="form-control custom-input" />
                                        </div>
                                    </div>
                                </div>

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
                                        {documentList.map((doc, index) => (
                                            <div key={index} className="col-md-6">
                                                <div className="upload-card">
                                                    <div className="d-flex justify-content-between mb-2">
                                                        <span className="fw-semibold small">{doc.label} {doc.required && <span className="text-danger">*</span>}</span>
                                                        {doc.note && <span className="badge bg-soft-danger text-danger">{doc.note}</span>}
                                                    </div>
                                                    <input type="file" className="form-control form-control-sm" />
                                                </div>
                                            </div>
                                        ))}
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

                                    <div className="insurance-grid-container p-3 border rounded-3 bg-light-subtle">
                                        <div className="row g-2 overflow-auto" style={{ maxHeight: '350px' }}>
                                            {insuranceList.map((item, index) => (
                                                <div key={index} className="col-md-4 col-sm-6">
                                                    <div className="insurance-check-card">

                                                        {/* Hidden Checkbox */}
                                                        <input
                                                            type="checkbox"
                                                            className="btn-check"
                                                            id={`ins-${index}`}
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
<textarea></textarea>
                                        </div>
                                
                                    <button type="submit" className="btn btn-primary btn-lg px-5 py-3 rounded-pill fw-bold shadow-lg d-inline-flex align-items-center">
                                        Send <ChevronRight size={20} className="ms-2" />
                                    </button>
                                </div>
                            </form>
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