import React from "react"
import { Link } from 'gatsby';
import Layout from "../components/layout"
import Head from '../components/head'


const IndexPage = () => {
    return(
        <Layout>
            <Head title="Home" />
                <h1>hello.</h1>
                <h2>this is IndexPage</h2>
                <p>Need a developer? <a href="/contact">Contact me.</a></p>
                <p>need a devloper? <Link to="/contact">Contact me.</Link></p>
        </Layout>

    )
}
export default IndexPage;
