import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import documentService from '../../services/documents'
import { setDocument } from '../../reducers/documentReducer'

const Document = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const user = useSelector(state => state.user)
  const document = useSelector(state => state.document)

  useEffect(() => {
    const fetchDocument = async () => {
      const response = await documentService.getDocument(id, user.token)
      dispatch(setDocument(response))
    }
    fetchDocument()
  }, [])

  return (
    <div>{id}</div>
  )
}

export default Document