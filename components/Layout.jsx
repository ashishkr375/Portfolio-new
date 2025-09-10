import Head from "next/head"
import Footer from "./ui/Footer"
import Navbar from "./ui/Navbar"

const Layout = ({ children }) => {
    return (
        <>
            <Head>
                <title>Ashish Kumar - Portfolio</title>
                <meta name='description' content='Ashish Kumar - Web Developer, Problem Solver, and Tech Enthusiast. Computer Science Engineering student at NIT Patna with expertise in web development and blockchain technology.' />
                <meta name='viewport' content='width=device-width, initial-scale=1' />
                <link rel='icon' href='/favicon.ico' />
            </Head>
            <Navbar />
            <div className="relative z-10">
                <main>{children}</main>
            </div>
            <Footer />
        </>
    )
}

export default Layout
