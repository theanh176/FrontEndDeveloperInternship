import React from 'react'
import { useEffect } from 'react'
import { getCustomerAPI } from '../api/customer'
import App from '../App'

const Home = () => {
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = getCustomerAPI();
  }

  return (
    <div>
      <div className="container">
        <div className="main">
          <App/>
        </div>
      </div>
    </div>
  )
}

export default Home