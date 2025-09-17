import React from 'react'

const Dashboard = ({user}) => {
  return (
    <div>
      <h1>Welcome to dashboard</h1>
      <h2>Name:{user.fname}</h2>
      <h2>Email:{user.email}</h2>
    </div>
  )
}

export default Dashboard
