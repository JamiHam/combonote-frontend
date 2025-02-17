const DocumentList = ({ documents }) => {
  if (!documents) {
    return null
  }

  return (
    <ul>
      {documents.map(document => 
        <li key={document.id}>
          {document.name}
        </li>
      )}
    </ul>
  )
}

export default DocumentList