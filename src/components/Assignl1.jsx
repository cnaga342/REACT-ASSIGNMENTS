import {useState,useEffect} from "react";

export const Assignment1=()=>{
    const [data,setData]=useState([]);

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res)=>res.json())
    .then((user)=>{setData(user);
    console.log(user);
  })
  },[])

return(
    <>
    <h1>hello</h1>
    {data.slice(0,10).map((i)=><h2>{i.id}. {i.title}</h2>)}
    </>
)
}