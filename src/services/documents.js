const url = 'http://localhost:3001/api/documents'

const getDocumentsFromUser = async (username, token) => {
  const response = await fetch(`${url}/user/${username}`, {
    headers: {'Authorization': 'Bearer ' + token},
  })

  if (response.ok) {
    return response.json()
  }
  return null
}

const getDocument = async (id, token) => {
  const response = await fetch(`${url}/id/${id}`, {
    headers: {'Authorization': 'Bearer ' + token}
  })

  const document = formatTables(await response.json())

  if (response.ok) {
    return document
  }
  return null
}

const formatTables = (document) => {
  const formattedTables = []
  
  document.tables.forEach((table) => {
    const formattedTable = []

    table.rows.forEach(row => {
      const formattedRow = {}

      table.columns.forEach(column => {
          formattedRow[column.name] = null
      })

      row.data.forEach(data => {
        formattedRow[data.column.name] = data.value
      })

      formattedTable.push(formattedRow)
    })
    formattedTables.push(formattedTable)
  })

  document.tables = formattedTables

  return document
}

export default { getDocumentsFromUser, getDocument }