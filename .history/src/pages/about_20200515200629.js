import React from 'react'
import { Link } from 'gatsby'

const AboutPage = () => (
    <Layout>
        <SEO title="Home" />
        <h1>About Page</h1>

        <ul>
            <li>
                <Link to='/'>Home</Link>
            </li>
        </ul>
    </Layout>
)

export default AboutPage
