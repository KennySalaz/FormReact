
import { useState, useEffect } from 'react';
import { collection, doc, getDocs, getFirestore } from "firebase/firestore";
import firebaseApp from './firebase';
import FullPage from './Home/FullPage';


function App() {
  const db = getFirestore(firebaseApp)
  const [data, setData] = useState('');

  useEffect(() => {
    async function pepare() {
      const docRef = collection(db, "mercantil");
      const docSnap = await getDocs(docRef);
      docSnap.forEach(doc => {
        console.log(doc.data())
      })
    }

    pepare()

  }, []);

  return (
    <>
      <FullPage/>

    </>
  );
}

export default App;
