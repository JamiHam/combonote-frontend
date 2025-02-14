const url = 'http://localhost:3001/api/notes'

const getNotesFromUser = async (username, token) => {
  const response = await fetch(`${url}/${username}`, {
    headers: {'Authorization': 'Bearer ' + token},
  })

  if (response.ok) {
    return response.json()
  }
  return null
}

export default { getNotesFromUser }