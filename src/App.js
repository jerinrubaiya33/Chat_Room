// import React, { useState , useRef} from 'react';
// import './App.css';
// import { useCollectionData } from 'react-firebase-hooks/firestore';
// import { initializeApp } from 'firebase/app';
// import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
// import { getFirestore, collection, query, orderBy, limit, addDoc, serverTimestamp } from 'firebase/firestore';
// import { useAuthState } from 'react-firebase-hooks/auth';

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBKrWPn2y1vSW2R_atStHyJkmewTTSPj7U",
//   authDomain: "superchat-55b98.firebaseapp.com",
//   projectId: "superchat-55b98",
//   storageBucket: "superchat-55b98.appspot.com",
//   messagingSenderId: "478102290523",
//   appId: "1:478102290523:web:7e1d9815e0dd49aabcbf7e",
//   measurementId: "G-WKXWWEV6ZW"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const firestore = getFirestore(app);

// function App() {
//   const [user] = useAuthState(auth);

//   return (
//     <div className="App">
//       <header>
//         <h1>ChatRoom</h1>
//         {user ? <SignOut /> : null}
//       </header>

//       <section>
//         {user ? <ChatRoom /> : <SignIn />}
//       </section>
//     </div>
//   );
// }

// function SignIn() {
//   const signInWithGoogle = () => {
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth, provider);
//   };

//   return (
//     <button onClick={signInWithGoogle}>Sign in with Google</button>
//   );
// }

// function SignOut() {
//   return (
//     <button onClick={() => signOut(auth)}>Sign Out</button>
//   );
// }

// function ChatRoom() {
//   const dummy = useRef()
//   // const app = initializeApp(firebaseConfig);
//   // const db = getFirestore(app, 'localhost:3000'); // Connect to the emulator
  
//   const messagesRef = collection(firestore, 'messages');
//   const q = query(messagesRef, orderBy('createdAt'), limit(500));

//   const [messages] = useCollectionData(q, { idField: 'id' });
//   const [formValue, setFormValue] = useState('');

//   const sendMessage = async (e) => {
//     e.preventDefault();
//     const { uid, photoURL } = auth.currentUser;

//     await addDoc(messagesRef, {
//       text: formValue,
//       createdAt: serverTimestamp(),
//       uid,
//       photoURL
//     });

//     setFormValue('');
//     dummy.current.scrollIntoView({ behavior: 'smooth'});
//   };

//   return (
//     <>
//       {/* <div>
//         {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
//       </div> */}
//       <main>
//       {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
//         <div ref={dummy}></div>
//       </main>

//       <form onSubmit={sendMessage}>
//         <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
//         <button type="submit">Send😉</button>
//       </form>
//     </>
//   );
// }

// function ChatMessage(props) {
//   const { text, uid, photoURL } = props.message;
//   const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

//   return (
//     <div className={`message ${messageClass}`}>
//       {/* <img src={photoURL} alt="User Avatar" /> */}
//       <img src={photoURL || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgrcpx1iUSGV4_xaFM6dUu_ijdndCWVm5Nxw&s'} />

//       <p>{text}</p>
//     </div>
//   );
// }

// export default App;

// import React, { useState, useRef } from 'react';
// import './App.css';
// import { useCollectionData } from 'react-firebase-hooks/firestore';
// import { initializeApp } from 'firebase/app';
// import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, signInAnonymously } from 'firebase/auth';
// import { getFirestore, collection, query, orderBy, limit, addDoc, serverTimestamp } from 'firebase/firestore';
// import { useAuthState } from 'react-firebase-hooks/auth';

// // Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBKrWPn2y1vSW2R_atStHyJkmewTTSPj7U",
//   authDomain: "superchat-55b98.firebaseapp.com",
//   projectId: "superchat-55b98",
//   storageBucket: "superchat-55b98.appspot.com",
//   messagingSenderId: "478102290523",
//   appId: "1:478102290523:web:7e1d9815e0dd49aabcbf7e",
//   measurementId: "G-WKXWWEV6ZW"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);
// const firestore = getFirestore(app);

// function App() {
//   const [user] = useAuthState(auth);

//   return (
//     <div className="App">
//       <header>
//         <h1>ChatRoom</h1>
//         {user ? <SignOut /> : null}
//       </header>

//       <section>
//         {user ? <ChatRoom /> : <SignIn />}
//       </section>
//     </div>
//   );
// }

// function SignIn() {
//   const signInWithGoogle = () => {
//     const provider = new GoogleAuthProvider();
//     signInWithPopup(auth, provider);
//   };

//   const signInAnonymouslyHandler = () => {
//     signInAnonymously(auth).catch((error) => {
//       console.error("Error during anonymous sign-in:", error);
//     });
//   };

//   return (
//     <>
//       <button onClick={signInWithGoogle}>Sign in with Google</button>
//       <button onClick={signInAnonymouslyHandler}>Continue as Guest</button>
//     </>
//   );
// }

// function SignOut() {
//   return (
//     <button onClick={() => signOut(auth)}>Sign Out</button>
//   );
// }

// function ChatRoom() {
//   const dummy = useRef();
//   const messagesRef = collection(firestore, 'messages');
//   const q = query(messagesRef, orderBy('createdAt'), limit(500));

//   const [messages] = useCollectionData(q, { idField: 'id' });
//   const [formValue, setFormValue] = useState('');

//   const sendMessage = async (e) => {
//     e.preventDefault();
//     const { uid, photoURL } = auth.currentUser;

//     await addDoc(messagesRef, {
//       text: formValue,
//       createdAt: serverTimestamp(),
//       uid,
//       photoURL
//     });

//     setFormValue('');
//     dummy.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <>
//       <main>
//         {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
//         <div ref={dummy}></div>
//       </main>

//       <form onSubmit={sendMessage}>
//         <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
//         <button type="submit">Send😉</button>
//       </form>
//     </>
//   );
// }

// function ChatMessage(props) {
//   const { text, uid, photoURL } = props.message;
//   const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

//   return (
//     <div className={`message ${messageClass}`}>
//       <img src={photoURL || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgrcpx1iUSGV4_xaFM6dUu_ijdndCWVm5Nxw&s'} alt="User Avatar" />
//       <p>{text}</p>
//     </div>
//   );
// }

// export default App;










import React, { useState, useRef, useEffect } from 'react';
import './App.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup, signInAnonymously, signOut } from 'firebase/auth';
import { getFirestore, collection, query, orderBy, limit, addDoc, serverTimestamp, onSnapshot } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBKrWPn2y1vSW2R_atStHyJkmewTTSPj7U",
  authDomain: "superchat-55b98.firebaseapp.com",
  projectId: "superchat-55b98",
  storageBucket: "superchat-55b98.appspot.com",
  messagingSenderId: "478102290523",
  appId: "1:478102290523:web:7e1d9815e0dd49aabcbf7e",
  measurementId: "G-WKXWWEV6ZW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>ChatRoom</h1>
        {user ? <SignOut /> : null}
      </header>

      <section>
        {user ? <ChatRoom /> : <SignIn />}
      </section>
    </div>
  );
}

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
  };

  const signInAnonymouslyHandler = () => {
    signInAnonymously(auth).catch((error) => {
      console.error("Error during anonymous sign-in:", error);
    });
  };

  return (
    <>
      <button onClick={signInWithGoogle}>Sign in with Google</button>
      <button onClick={signInAnonymouslyHandler}>Continue as Guest</button>
    </>
  );
}

function SignOut() {
  return (
    <button onClick={() => signOut(auth)}>Sign Out</button>
  );
}

function ChatRoom() {
  const dummy = useRef();
  const messagesRef = collection(firestore, 'messages');
  const q = query(messagesRef, orderBy('createdAt'), limit(500));

  const [messages, setMessages] = useState([]);
  const [formValue, setFormValue] = useState('');

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messages = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setMessages(messages);
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    });

    return () => unsubscribe();
  }, []);

  const sendMessage = async (e) => {
    e.preventDefault();
    const { uid, photoURL } = auth.currentUser;

    await addDoc(messagesRef, {
      text: formValue,
      createdAt: serverTimestamp(),
      uid,
      photoURL
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <main>
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
        <div ref={dummy}></div>
      </main>

      <form onSubmit={sendMessage}>
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} />
        <button type="submit">Send😉</button>
      </form>
    </>
  );
}

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgrcpx1iUSGV4_xaFM6dUu_ijdndCWVm5Nxw&s'} alt="User Avatar" />
      <p>{text}</p>
    </div>
  );
}

export default App;
