import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import documentService from '../../services/documents'
import DocumentList from './DocumentList'

const Documents = () => {
  const user = useSelector(state => state.user)
  const [documents, setDocuments] = useState(null)

  useEffect(() => {
    if (!user) return

    const getDocuments = async () => {
      const response = await documentService.getDocumentsFromUser(user.username, user.token)
      setDocuments(response)
    }
    getDocuments()
  }, [user])

  return (
    <DocumentList documents={documents} />
  )
}

export default Documents