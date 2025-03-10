import { Link } from 'react-router-dom'

const DocumentList = ({ documents }) => {
  if (!documents) {
    return null
  }

  return (
    <ul>
      {documents.map(document => 
        <li key={document.id}>
          <Link to={`/documents/${document.id}`}>{document.name}</Link>
        </li>
      )}
    </ul>
  )
}

export default DocumentList