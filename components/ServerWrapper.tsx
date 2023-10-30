"use server"

const fetchServer = async ()=>{
    console.log("hello world!")
  const data =  await  fetch("https://jsonplaceholder.typicode.com/users")
  const res = await data.json();
  console.log(res)

}

export default fetchServer;