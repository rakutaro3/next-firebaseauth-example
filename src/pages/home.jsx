import { useEffect, useState } from 'react'
import firebase from '../libs/firebase'
import styles from '../../styles/Home.module.css'
import { useRouter } from 'next/router'

import { SignOutButton } from '../components/SignOutButton'

const Home = () => {
  const router = useRouter()

  const [ isLoading, setIsLoading ] = useState(true)

  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      console.log('signed in')
      if (!user) {
        console.log('signed out')
        router.replace('/')
      } else {
        setIsLoading(false)
      }
    })
  }, [])

  return (
    <div className={styles.container}>
      { isLoading 
        ? <h1>Loading</h1>
        : <div>
            <main className={styles.main}>
              <h1 className={styles.title}>Private Page</h1>
            </main>

            <p className={styles.description}>
              This is private page. For member only.
            </p>

            <div className={styles.grid}>
              <SignOutButton />
            </div>
          </div>
      }
    </div>
  )
}

export default Home