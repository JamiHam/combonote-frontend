import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import documentService from '../../services/documents'
import { setDocument } from '../../reducers/documentReducer'
import Table from '../Table/Table'

const Document = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const user = useSelector(state => state.user)
  //const document = useSelector(state => state.document)
  const document = {
    id: 1,
    name: 'Document 1',
    tables: [
      {
        columns: [
          {
            id: 1,
            name: 'Column 1'
          },
          {
            id: 2,
            name: 'Column 2'
          },
          {
            id: 3,
            name: 'Column 3'
          }
        ],
        rows: [
          {
            id: 1,
            'Column 1': 'Data 1',
            'Column 2': 'Data 2',
            'Column 3': null
          },
          {
            id: 2,
            'Column 1': null,
            'Column 2': 'Data 3',
            'Column 3': null
          },
        ]
      }
    ]
  }

  useEffect(() => {
    const fetchDocument = async () => {
      const response = await documentService.getDocument(id, user.token)
      dispatch(setDocument(response))
    }
    fetchDocument()
  }, [])

  if (!document) {
    return null
  }

  return (
    <Table columns={document.tables[0].columns} rows={document.tables[0].rows} />
  )
}

export default Document