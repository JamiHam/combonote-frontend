import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import noteService from '../../services/notes'
import NoteList from './NoteList'

const Notes = () => {
  const user = useSelector(state => state.user)
  const [notes, setNotes] = useState(null)

  useEffect(() => {
    if (!user) return

    const getNotes = async () => {
      const response = await noteService.getNotesFromUser(user.username, user.token)
      setNotes(response)
    }
    getNotes()
  }, [user])

  return (
    <NoteList notes={notes} />
  )
}

export default Notes