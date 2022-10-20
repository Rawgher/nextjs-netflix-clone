import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Login.module.css";

const Login = () => {

    const handleLoginWithEmail = (e) => {
        e.preventdefault();
        console.log('clicked')
    }

    const handleOnChangeEmail = () => {
        console.log('clicked')
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>Mockflix Login</title>
                <meta name="description" content="Login page" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header className={styles.header}>
                <div className={styles.headerWrapper}>
                    <Link className={styles.logoLink} href="/">
                        <a>
                            <div className={styles.logoWrapper}>
                                <Image src='/static/mockflix.png' alt='Mockflix custom logo' width='150px' height='34px' />
                            </div>
                        </a>
                    </Link>
                </div>
            </header>

            <main className={styles.main}>
                <div className={styles.mainWrapper}>
                    <h1 className={styles.signinHeader}>Sign In</h1>

                    <input
                        type="text"
                        placeholder="Email address"
                        className={styles.emailInput}
                        onChange={handleOnChangeEmail}
                    />

                    {/* <p className={styles.userMsg}>Enter valid email</p> */}

                    <button onClick={handleLoginWithEmail} className={styles.loginBtn}>
                        Sign In
                    </button>
                </div>
            </main>
        </div>
    )
}

export default Login;