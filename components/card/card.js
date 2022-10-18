import Image from "next/image";
import styles from './card.module.css';

const Card = (props) => {

    const { imgUrl, size } = props;

    const sizeMap = {
        large: styles.lgItem,
        medium: styles.mdItem,
        small: styles.smItem,
      };

    return(
        <div className={styles.container}>
            <div className={sizeMap[size]}>
                <Image src={imgUrl} alt='card image' layout="fill" className={styles.cardImg} />
            </div>
        </div>
    )
}

export default Card;