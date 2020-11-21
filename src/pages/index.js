import Head from 'next/head'
import styles from '../../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Public Page</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Public Page  
        </h1>

        <p className={styles.description}>
          This is public page. Anybody can access.
        </p>

        <div className={styles.grid}>
          <Link href="/sign_up">
            <a className={styles.card}>
              <h3>Sign Up</h3>
              <p>Sign up to this application.</p>
            </a>
          </Link>
          <Link href="/sign_in">
            <a className={styles.card}>
              <h3>Sign In</h3>
              <p>Sign in to this application.</p>
            </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
