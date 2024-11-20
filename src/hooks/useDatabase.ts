import { useEffect, useState } from 'react'
import { collection, query, getDocs, where, } from 'firebase/firestore'

import { database } from '../config'

/// CONTENT == COLLECTION ("TABEL" in firestore)
const useDatabase = (content) => {
  const [data, setData] = useState(null)
  const [isLoaded, setLoaded] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      const qRef = collection(database, content)
      const q = query(
        qRef,
        where('publish', '==', true)
        //orderBy('order', 'asc')
      )
      const querySnapshot = await getDocs(q)
      const queryResults = []

      querySnapshot.forEach((doc) => {
        queryResults.push(doc.data())
      })

      setData(queryResults.sort((a, b) => a.order > b.order))
      setLoaded(true)
    }

    fetchData()
  }, [content])

  return [data, isLoaded]
}

export default useDatabase
