import { collection, getDocs, getFirestore } from 'firebase/firestore'
import app from './init'

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
