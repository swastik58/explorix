import React from "react"
import Email from "../components/Email"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Hero from "../components/Hero"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Signature from "../components/Signature"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"

const IndexPage = () => (
  <Layout>
    <Seo title="EXPLORIX" />
    <Hero />
    <Header />
    <Trips heading="Some of Our Favourite Holiday Locations" />
    <Testimonials />
    <Stats />
    <Email />
    <Footer />
    <Signature />
  </Layout>
)

export default IndexPage
