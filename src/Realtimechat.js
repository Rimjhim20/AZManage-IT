import React,{useState,useRef,} from 'react'
import './realtimechat.css'
import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import {auth,firebase,firestore} from './firebase';
import Pic from './assets/profile.png'
function Realtimechat() {
    const [user] = useAuthState(auth);
    return (
      <div className="chat">
        <header>
          <h4 className='m-2'>Discuss</h4>
          <SignOut />
        </header>
        <section>
          {user ? <ChatRoom /> : <SignIn />}
        </section>
      </div>
    );
  }
  function SignIn() {
    const signInWithGoogle = () => {
      const provider = new firebase.auth.GoogleAuthProvider();
      auth.signInWithPopup(provider);
    }
  
    return (
      <>
        <button className="sign-in" onClick={signInWithGoogle}>Sign in with Google</button>
        <p>Do not violate the community guidelines or you will be banned from chat!</p>
      </>
    )
  }
  function SignOut() {
    return auth.currentUser && (
      <button className="sign-out chatbtn" onClick={() => auth.signOut()}>Sign Out</button>
    )
  }
  function ChatRoom() {
    const dummy = useRef();
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25);
  
    const [messages] = useCollectionData(query, { idField: 'id' });
  
    const [formValue, setFormValue] = useState('');
  
  
    const sendMessage = async (e) => {
      e.preventDefault();
  
      const { uid, photoURL } = auth.currentUser;
  
      await messagesRef.add({
        text: formValue,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        uid,
        photoURL
      })
  
      setFormValue('');
      dummy.current.scrollIntoView({ behavior: 'smooth' });
    }
  
    return (<>
      <main>
  
        {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg} />)}
  
        <span ref={dummy}></span>
  
      </main>
  
      <form onSubmit={sendMessage} className="chatform">
  
        <input value={formValue} onChange={(e) => setFormValue(e.target.value)} placeholder="Discuss something related to project work!!" />
  
        <button type="submit" className='chatbtn' disabled={!formValue}>submit</button>
  
      </form>
    </>)
  }
  function ChatMessage(props) {
    const { text, uid, photoURL } = props.message;
    const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
    return (<>
      <div className={`message ${messageClass}`}>
        {/* <img src={photoURL || Pic} alt='pic'/> */}
         <img src={Pic} alt='pic'/>
        <p>{text}</p>
      </div>
    </>)
  }
  
  export default Realtimechat;