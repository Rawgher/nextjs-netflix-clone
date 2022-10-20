import Head from 'next/head'
import Banner from '../components/banner/banner'
import CardBlock from '../components/card/card-block'
import NavBar from '../components/nav/navbar'
import styles from '../styles/Home.module.css'
import { getVideos, getPopularVideos } from '../lib/videos'

export async function getServerSideProps() {
  const netflixVideos = await getVideos("netflix trailers");
  const productivityVideos = await getVideos("productivity");
  const travelVideos = await getVideos("travel");
  const popularVideos = await getPopularVideos();
  return { props: { netflixVideos, productivityVideos, travelVideos, popularVideos }};
}

export default function Home({ netflixVideos, productivityVideos, travelVideos, popularVideos }) {
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
        <CardBlock title='Netflix Trailers' videos={netflixVideos} size='large' />
        <CardBlock title='Productivity' videos={productivityVideos} size='medium' />
        <CardBlock title='Travel' videos={travelVideos} size='small' />
        <CardBlock title='Popular Videos' videos={popularVideos} size='small' />
      </div>

    </div>
  )
}
