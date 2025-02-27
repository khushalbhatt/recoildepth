import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil'
import { meSelector, networkAtom,jobsAtom,messagesAtom,notificationsAtom,postsAtom,atomfamily1} from './atoms'

function App() {
  return (
    <>
    <RecoilRoot>
      <UsingAtoms></UsingAtoms>
    </RecoilRoot>
    </>
  )
}

function UsingAtoms(){
  const network = useRecoilValue(networkAtom);
  const jobs = useRecoilValue(jobsAtom);
  const messages = useRecoilValue(messagesAtom);
  const notifications = useRecoilValue(notificationsAtom);
  const me = useRecoilValue(meSelector);
  const [posts,setPosts] = useRecoilState(postsAtom);

  // useEffect(() => {
  //   const fetchPosts = async () => {
  //     const res = await axios.get("https://jsonplaceholder.typicode.com/posts");
  //     console.log(res.data);
  //     setPosts(res.data);
  //   };
  //   fetchPosts();
  // },[]);

  return (
    <>
      <button>Home</button>
      <button>My Network({network})</button>
      <button>Jobs({jobs})</button>
      <button>Messages({messages})</button>
      <button>Notifications({notifications})</button>
      <button>Me({me})</button>
      <br></br>
      <POSTS id={1}></POSTS>
      <POSTS id={1}></POSTS>
      <POSTS id={1}></POSTS>


      <br></br>
      <div>
        {posts.map((post,index) => {
          return <Posts key={index} id={post.id} title={post.title}></Posts>
        })}
      </div>
    </>
  )
}

function POSTS({id}){
  const currentTodo = useRecoilValue(atomfamily1(id));
  return (
    <>
      <div>{currentTodo.title}</div>
    </>
  )
}

function Posts(props){
  return (
    <>
        <div> {props.id} {props.title}</div>
    </>
  )
}

export default App
