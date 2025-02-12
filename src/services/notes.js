const url = 'http://localhost:3001/api/notes'

const getAll = async () => {
  const response = await fetch(url)
  return response.json()
}

export default { getAll }