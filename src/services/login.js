const url = 'http://localhost:3001/api/login'

const login = async (username, password) => {
  const response = await fetch(url, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      username,
      password
    })
  })

  return response.json()
}

export default { login }