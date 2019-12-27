import React from 'react';
import Footer from '../components/footer';
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
    return(
        <Layout>
            <Head title="contact" />
                <h1>Contact</h1>
                <p>ContactPage --is <a href="https://twitter.com/@andrew_j_mead" target="_blank">@andrew_j_mead</a>this??</p>
            <Footer />
        </Layout>
    )
}

export default ContactPage;