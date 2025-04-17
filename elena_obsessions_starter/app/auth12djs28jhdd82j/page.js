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

  useEffect (() => {
  }, [isSubmit])

  return (
    <div>


      <p>
        {user ? (
          <button onClick={googleSignOut}>Sign Out</button>
        ) : (
          <button onClick={googleSignIn}>Sign In</button>
        )}
      </p>
      {user && (user.uid == "1xHsl7Be3cdKmDx2raPoP3nnCQF2") && (
      <>
        <h1>Text Entry Example</h1>
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
       
       { isSubmit && (
        <image
        src='/assets/elenapic2.jpg'
        alt='Author picture'
        width={300}
        height={200}
        />
       )}
       </>

      )}
    </div>
  );
}
