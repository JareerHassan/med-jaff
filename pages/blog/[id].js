import Link from "next/link"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Layout from "../../components/layout/Layout"
import data from "../../util/blog.json"

const BlogDetails = () => {

    let Router = useRouter()

    const [blogPost, setBlogPost] = useState(null)


    const { id } = Router.query

    useEffect(() => {
        setBlogPost(data.find((data) => data.id == id))
    }, [id])


    return (
        <>
            <Layout breadcrumbTitle="Blog Details">

                {blogPost && (
                    <>

                        <section className="blog-detail-section">
                            {/*-============spacing==========-*/}
                            <div className="pd_top_90" />
                            {/*-============spacing==========-*/}
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="blog_single_content">
                                            <div className="single-thumbnail">
                                                <img src={`/assets/images/blog/${blogPost.img}`} className="img-fluid" alt="img" />
                                            </div>
                                            <div className="single_content_upper">
                                                <div className="post_single_content">
                                                    <div className="section_title small type_one mr_bottom_25">
                                                        <div className="title_whole">
                                                            <h3 className="title"> Important Update for California in 2026</h3>
                                                        </div>
                                                    </div>
                                                    <div className="position-relative position_p_relative mr_bottom_20"> Starting in 2026, California requires that all healthcare provider enrollment applications must be approved within 90 days. This new regulation effectively eliminates any buffer for delay or error—in one of the states with the most complex and demanding enrollment processes. Providers looking to enroll in California must exercise exceptional care in documentation and submission to comply with this accelerated timeframe.

</div>
                                                  
                                                  
                                                    <div className="clearfix" />
                                                </div>
                                           
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/*-============spacing==========-*/}
                            <div className="pd_bottom_70" />
                            {/*-============spacing==========-*/}
                        </section>

                    </>
                )}
            </Layout>
        </>
    )
}

export default BlogDetails