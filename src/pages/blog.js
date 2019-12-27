import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import blogStyles from './blog.module.scss'
import Head from '../components/head'

const BlogPage = () => {
    const data = useStaticQuery(graphql`
        query {
          allContentfulBlogPost( sort: { fields: publishedDate, order:DESC }) {
              edges {
                node {
                  title
                  slug
                  publishedDate(formatString:"MMMM do, YYYY")
                }
              }
            }
          }
        `)

    console.log( data );
    return (
        <Layout>
          <Head title="Blog" />
            <h1> BlogPage...is this??</h1>
            <p>gql에서 query를 날리고 그것을 사용할 수 있다 md.확장명이 markdown으로 사용</p>
            <ol className={blogStyles.posts}>
                { data.allContentfulBlogPost.edges.map((edge) => {
                    return (
                        <li className={blogStyles.post}>
                            <Link to={`/blog/${edge.node.slug}`}>
                                <h2>{ edge.node.title } </h2>
                                <p>{ edge.node.publishedDate } </p>
                            </Link>  
                      </li>
                    )
                })}
            </ol>
        </Layout>

    )
}
export default BlogPage;