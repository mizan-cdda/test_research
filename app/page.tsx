import Index from "@/components"
import ServerCompo from "@/components/ServerCompo";

const Home = async () => {
  const data = await fetchData()
  return (
    <Index data={data} >
      <ServerCompo data={data} />
    </Index>

  )
}
export default Home;

export async function fetchData() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users")
  return await data.json()

} 