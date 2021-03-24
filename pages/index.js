import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>ttt Round 1 Assignment</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the assignment of Shekhar Anand
        </h1>
        <div>
        <form method="POST">
            <h3>Enter comma seperated numbers</h3>
                <input type ="text" name="string" required/>
            <button type ="submit">Submit</button>
        </form>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
