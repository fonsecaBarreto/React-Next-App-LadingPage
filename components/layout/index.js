import Head from 'next/head' 
import Footer from './Footer'
import '../../pages/styles.css'
import './style.css'
import Header from './Header'
const Layout = props => {
  const { showHeader } = props
  return (
    <div id="main-layout" className={showHeader ? 'withHeader' :''}>

      <Head>
        <title>Mathewslins | home </title>

    
        <link rel="preconnect" href="https://fonts.gstatic.com"/>

        <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;1,900&display=swap" rel="stylesheet" rel="preload" as="style"></link>
        
        <meta name="google-site-verification" content="OzI4mRTJp64Oe46Vx8i3TTUJl0QNuqr5PnfHDAjC_wA" />

     </Head> 
      { showHeader ? <Header></Header> : undefined }
      <main id="main-content" className="bd-blue">
        { props.content }
      </main>
      <Footer ></Footer>
    </div>
  )
}


export default Layout