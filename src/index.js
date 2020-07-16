import React from 'react'

import { StatusBar } from 'expo-status-bar';
import Logo from './components/Logo'
import Photo from './components/Photo';


const Main = () => {
  return (
    <>
      <StatusBar style="auto" />
      <Logo />
      <Photo
        count={10}
        file={require("../assets/img1.png")}
      />

      <Photo
        count={3}
        file={require("../assets/img2.png")}
      />

    </>
  )
}


export default Main