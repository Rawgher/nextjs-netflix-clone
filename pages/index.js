import Head from 'next/head'
import Banner from '../components/banner/banner'
import CardBlock from '../components/card/card-block'
import NavBar from '../components/nav/navbar'
import styles from '../styles/Home.module.css'
import { getVideos } from '../lib/videos'

export async function getServerSideProps() {
  const videos = await getVideos();
  return { props: {videos}};
}

export default function Home({ videos }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mockflix</title>
        <meta name="description" content="Home page for Netflix clone project" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar username='test@test.com'  />
      
      <Banner title='See' subTitle='Series Finale' imgUrl='/static/placeholder-img.jpg' />

      <div className={styles.sectionWrapper}>
        <CardBlock title='Netflix Trailers' videos={videos} size='large' />
        <CardBlock title='Productivity' videos={videos} size='medium' />
      </div>

    </div>
  )
}
