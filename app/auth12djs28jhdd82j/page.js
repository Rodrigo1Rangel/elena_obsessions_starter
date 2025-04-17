"use client";

import { useUserAuth } from "./_utils/auth-context";
import { useState, useEffect } from "react";
import Image from "next/image";


export default function Page() {
  const { user, googleSignIn, googleSignOut } = useUserAuth();
  const [ inputText, setInputText] = useState("");
  const [ isSubmit, setIsSubmit ] = useState(false);

    const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmit(true);
    console.log("Submitted text:", inputText);
    // firebase manipulation
  };

    const handleInputChange = (e) => {
    setInputText(e.target.value); // Update state when typing
  };

    const playSubmissionSound = () => {
      // implement rawr sound
    }

  useEffect (() => {
  }, [isSubmit])

  return (
    <div>
      <>
      {user && (user.uid !== "1xHsl7Be3cdKmDx2raPoP3nnCQF2") && (
      <>
        <p>The gate remains locked!</p>
        <Image
        src='/assets/elenapic2.jpg'
        alt='aaaaaa'
        width={300}
        height={200}
        />        
        <p>Only ELENA has power here!</p>
      </>
      )}
      </>

      <>
        {user ? (
        <>
          <button onClick={googleSignOut}>Sign Out</button>
        </>
        ) : (
        <>
          <p>The gate is locked...</p>
          <Image
          src='/assets/elenapic2.jpg'
          alt='aaaaaa'
          width={300}
          height={200}
          />
          <button onClick={googleSignIn}>Sign In</button>
        </>
        )}
      </>

      {user && (user.uid == "1xHsl7Be3cdKmDx2raPoP3nnCQF2") && (
      <>
        <p>The gate has been unlocked!</p>
        <Image
          src='/assets/elenapic2.jpg'
          alt='Author picture'
          width={300}
          height={200}
          />
          
        <h1>Update your collection, girl!</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type and submit..."
          />
          <button type="submit">Submit</button>
        </form>
            {/* {user.displayName} */}
            {/* {user.email} */}
            {/* <img src={user.photoURL} alt={user.displayName}/> */}
       </>
      )}
    </div>
  );
}
