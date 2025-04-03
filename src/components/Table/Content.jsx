const Content = ({columns, rows}) => {
  const handleCellClick = (event) => {
    console.log('row id:', event.target.attributes['rowId'].value)
    console.log('column id:', event.target.attributes['columnId'].value)
  }

  return (
    <tbody>
        {rows.map((row) => (
          <tr key={row.id}>
            {columns.map((column) => (
              <td key={column.id} rowId={row['id']} columnId={column['id']} onClick={handleCellClick}>
                {row[column.name]}
              </td>
            ))}
          </tr>
        ))}
    </tbody>
  )
}

export default Content