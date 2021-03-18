//import React, { useContext, useEffect } from 'react'
import React from 'react';
import CharacterInfo from '../Components/CharacterInfo/CharacterInfo'
import CharacterStats from '../Components/CharacterStats/CharacterStats';
import axios from 'axios';
// import AccountContext from "../Context/AccountContext";
import { useHistory } from "react-router-dom";

const Character = () => {

  const history = useHistory();

  const onClick = async (e) => {
    e.preventDefault();
    let token = localStorage.getItem("auth-token");
    try {
      const accountRes = await axios.post("/api/characterCreation", {}, {
        headers: { "x-auth-token": token },
      });
      console.log(accountRes);

    } catch (error) {
      console.log(error)
    }

  }

  //--------------------------------------------
  //Activate this block of code when appropriate
  //Function:  If the user is not logged in, will go
  //back to the login page.

  // const { userData } = useContext(AccountContext);
  // const history = useHistory();

  // useEffect(() => {
  //   if (!userData.account) {
  //     history.push("/login");
  //   }
  // }, [userData.account, history])

  //--------------------------------------------

  return (
    <div>
      <button onClick={onClick}>Create Character</button>
      <h3>Who are you?</h3>
      <CharacterInfo />
      <h3>Your Story</h3>
      <div className="input-group col-md-3 mb-3">
        <textarea className="form-control" aria-label="With textarea"></textarea>
        <button className="btn btn-primary" type="submit">Save Story</button>
      </div>
      <CharacterStats />
    </div>
  )
}

export default Character
