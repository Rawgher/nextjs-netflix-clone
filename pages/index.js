import Head from 'next/head'
import Image from 'next/image'
import Banner from '../components/banner/banner'
import NavBar from '../components/nav/navbar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mockflix Clone</title>
        <meta name="description" content="Home page for Netflix clone project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar username='test@test.com'  />
      
      <Banner title='See' subTitle='Series Finale' imgUrl='/static/placeholder-img.jpg' />

      {/* <Card /> */}

      
    </div>
  )
}
