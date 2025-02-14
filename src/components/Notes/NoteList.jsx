const NoteList = ({ notes }) => {
  if (!notes) {
    return null
  }

  return (
    <ul>
      {notes.map(note => 
        <li key={note.id}>
          {note.name}
        </li>
      )}
    </ul>
  )
}

export default NoteList