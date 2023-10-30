const ServerCompo = async () => {
    return (
        <div>
            This is server components
        </div>
    )
}
export default ServerCompo

export async function fetchData() {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
    return await data.json()
  
  }