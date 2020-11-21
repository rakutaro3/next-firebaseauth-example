import firebase from '../libs/firebase'

export const SignOutButton = () => {
  const signOut = () => {
    firebase.auth().signOut()
      .then(res => {
        console.log('signed out')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <button onClick={signOut}>Sign Out</button>
  )
}
