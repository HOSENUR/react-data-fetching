import './App.css'
import useSWR from 'swr'
import axios from 'axios'
const fetcher = (...args) => console.log(args)
function App() {
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const axiosFetcher = url => axios.get(url).then(res => res.data)


  const { data, error } = useSWR("https://random-data-api.com/api/v2/users", fetcher)
  console.log(data)
  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  // render data
  return <div>hello {data.first_name}!</div>
}

export default App
