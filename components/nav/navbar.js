import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from './navbar.module.css';

const NavBar = (props) => {
    const { username } = props;

    const [showDropdown, setShowDropdown] = useState(false);

    const router = useRouter();

    const handleOnClickHome = (e) => {
        e.preventDefault();
        router.push('/');
    }

    const handleOnClickMyList = (e) => {
        e.preventDefault();
        router.push('/browse/my-list');
    }

    const handleShowDropdown = (e) => {
        e.preventDefault();
        setShowDropdown(!showDropdown);
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <Link className={styles.logoLink} href="/">
                    <a>
                        <div className={styles.logoWrapper}>
                            <Image src='/static/mockflix.png' alt='Mockflix custom logo' width='150px' height='34px' />
                        </div>
                    </a>
                </Link>
            
                <ul className={styles.navItems}>
                    <li className={styles.navItem} onClick={handleOnClickHome}>Home</li>
                    <li className={styles.navItem2} onClick={handleOnClickMyList}>My List</li>
                </ul>
                

                <nav className={styles.navContainer}>
                    <div>
                        <button className={styles.usernameBtn} onClick={handleShowDropdown}>
                            <p className={styles.username}>{username}</p>
                            {showDropdown && (
                                <Image src='/static/expand_less.svg' alt='expand less logo' width='24px' height='24px' />
                            )}
                            {!showDropdown && (
                                <Image src='/static/expand_more.svg' alt='expand more logo' width='24px' height='24px' />
                            )}
                        </button>
                        {showDropdown && (
                            <div className={styles.navDropdown}>
                                <div>
                                    <Link href='/login'>
                                        <a className={styles.linkName}>Sign Out</a>
                                    </Link>
                                    <div className={styles.lineWrapper}></div>
                                </div>
                            </div>
                        )}
                    </div>
                </nav>
            </div>
        </div>
    );
}

export default NavBar;