import React, {useEffect, useState} from 'react'

const UseEffectGithubUsers = () => {
    useEffect(()=>{loadUserData();})
    var [results,setResult] = useState([]);

    var loadUserData = async() =>{
    var response = await fetch('https://api.github.com/users')
    var data = await response.json()
    setResult(data);
    }
  return (
    <div>
      <table border="1">
        <thead>
            <tr>
                <th>User Id</th>
                <th>User Name</th>
                <th>User Image</th>
                <th>User Profile</th>
            </tr>
        </thead>
        <tbody>
            {
                results.map((user) => (
                    <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.login}</td>
                        <td><img src={user.avatar_url} alt={user.login} width="50" /></td>
                        <td><a href={user.html_url} target="_blank" rel="noopener noreferrer">Profile</a></td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default UseEffectGithubUsers;
