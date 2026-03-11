import React, { useEffect, useState } from 'react'

const App = () => {

  // state to store user data coming from API
  const [user, setUser] = useState({})

  // useEffect runs when the component loads for the first time
  useEffect(() => {
    getUser()   // call the function to fetch data
  }, [])

  // async function to get data from backend API
  async function getUser() {

    // fetch data from backend
    let data = await fetch("http://localhost:3200/")

    // convert response into JSON format
    data = await data.json()

    // store API data into state
    setUser(data)
  }

  return (
    <div className="p-6 ">

      {/* heading */}
      <h1 className="text-2xl font-bold mb-4">User Data Call from backend </h1>

      {/* showing API data on screen */}
      <p><b>Name:</b>  {user.name}</p>
      <p><b>Age:</b>   {user.age}</p>
      <p><b>Email:</b> {user.email}</p>

    </div>
  )
}

export default App