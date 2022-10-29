import './App.css'
import useSWR from 'swr'
const fetcher = (...args) => console.log(args)
function App() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error } = useSWR("https://random-data-api.com/api/v2/users", fetcher)
  console.log(data)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  // render data
  return <div>hello {data.first_name}!</div>
}

export default App
