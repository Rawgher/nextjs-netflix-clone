import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner/banner'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix Clone</title>
        <meta name="description" content="Home page for Netflix clone project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Netflix</h1>

      {/* <NavBar /> */}
      
      <Banner title='See' subTitle='Series Finale' imgUrl='/static/placeholder-img.jpg' />

      {/* <Card /> */}

      
    </div>
  )
}
