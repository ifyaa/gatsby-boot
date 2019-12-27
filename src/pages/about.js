import React from 'react';
import { Link } from 'gatsby';
import Footer from '../components/footer'
import Head from '../components/head'

const AboutPage = () => {
    return (
        <div>
            <Header title="about" />
            <h1> AboutPage</h1>
            <p> this is AboutPage !!</p>
            <p><Link to="/contact">wont??</Link></p>
            <Footer/>
        </div>
    )
}
export default AboutPage;