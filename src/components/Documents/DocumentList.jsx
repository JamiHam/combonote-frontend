import { Link } from 'react-router-dom'

const DocumentList = ({ documents }) => {
  if (!documents) {
    return null
  }

  return (
    <ul>
      {documents.map(({ id, name }) => 
        <li key={id}>
          <Link to={`/documents/${id}`}>{name}</Link>
        </li>
      )}
    </ul>
  )
}

export default DocumentList