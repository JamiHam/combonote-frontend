const Header = ({columns}) => {
  return (
    <thead>
      <tr>
        {columns.map(column => (
          <th key={column.id}>{column.name}</th>
        ))}
      </tr>
    </thead>
  )
}

export default Header