import {
  collection,
  doc,
  getDoc,
  getDocs,
  getFirestore,
} from 'firebase/firestore'
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

export async function retrieveDataById(
  collection_name: string,
  doc_id: string
) {
  const snapshot = await getDoc(doc(firestore, collection_name, doc_id))
  const data = snapshot.data()
  return data
}
