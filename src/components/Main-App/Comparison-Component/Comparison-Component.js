import axios from "axios";

export default function Comparison() {
  console.log('getting data')
  getData()
  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>Comparison</h2>
    </main>
  );
}

const Url = 'https://tle.ivanstanojevic.me/api/tle/47966/propagate?date=2021-04-20T16:28:40+00:00'

let getData = () => {
  console.log('getting data')
  axios.get(Url).then(response => {
    console.log(response)
  }).catch(
    err =>{
      console.log(err)
    }
  )
}
