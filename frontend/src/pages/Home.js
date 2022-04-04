import Popular from "../components/Popular";
import Veggie from "../components/Veggie";
import Login from "./Login";
import userLogin from "./Login"

import React from 'react'

function Home() {

   

  return (
    <div>
        {/* <Login /> */}
        <Veggie />
        <Popular/>
    </div>
  )
}

export default Home