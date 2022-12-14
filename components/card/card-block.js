import Card from "./card";
import styles from "./card-block.module.css";

const CardBlock = (props) => {

    const { title, videos = [], size } = props;

    return (
        <section className={styles.container}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.cardWrapper}>
                {videos.map((video, idx) => {
                    return <Card id={idx} imgUrl={video.imgUrl} size={size} key={idx} />
                })}
            </div>
        </section>
    );
};

export default CardBlock;