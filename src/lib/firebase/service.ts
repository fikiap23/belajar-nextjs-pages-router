import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
  query,
  where,
} from 'firebase/firestore'
import app from './init'
import bcrypt from 'bcrypt'

const firestore = getFirestore(app)

export async function retrieveData(collection_name: string) {
  const snapshot = await getDocs(collection(firestore, collection_name))

  const data = snapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    }
  })

  return data
}

export async function retrieveDataById(
  collection_name: string,
  doc_id: string
) {
  const snapshot = await getDoc(doc(firestore, collection_name, doc_id))
  const data = snapshot.data()
  return data
}

export async function signUp(
  userData: {
    fullname: string
    email: string
    password: string
    role?: string
  },
  callback: Function
) {
  const q = query(
    collection(firestore, 'users'),
    where('email', '==', userData.email)
  )
  const querySnapshot = await getDocs(q)
  const data = querySnapshot.docs.map((doc) => {
    return {
      id: doc.id,
      ...doc.data(),
    }
  })
  if (data.length > 0) {
    callback({ status: false, message: 'Email already exists' })
  } else {
    userData.password = await bcrypt.hash(userData.password, 10)
    userData.role = 'member'
    await addDoc(collection(firestore, 'users'), userData)
      .then(() => {
        callback({ status: true, message: 'Register Success' })
      })
      .catch((err) => {
        callback({ status: false, message: err })
      })
    callback({ status: true, message: 'Register Success' })
  }
}
