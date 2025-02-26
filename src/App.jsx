import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilValue } from 'recoil'
import { meSelector } from './atoms'

function App() {
  return (
    <>
    <RecoilRoot>
      <Main/>
    </RecoilRoot>
    </>
  )
}
function Main(){
  const [network,jobs, messages,notifications] = useRecoilValue(meSelector);
  return (
    <>
    <button>Home</button>
      <button>My Network({network})</button>
      <button>Jobs({jobs})</button>
      <button>Messages({messages})</button>
      <button>Notifications({notifications})</button>
      <button>Me</button>
    </>
  )
}
export default App
