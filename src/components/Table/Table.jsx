import { useState } from 'react'
import { useReactTable, createColumnHelper, getCoreRowModel, flexRender } from '@tanstack/react-table'

const Table = () => {
  const [data, setData] = useState(() => [
    {
      name: 'name 1',
      data: 'data 1'
    },
    {
      name: 'name 2',
      data: 'data 2'
    }
  ])

  const columnHelper = createColumnHelper()

  const [columns, setColumns] = useState([
    columnHelper.accessor('name', {
      header: 'Name',
    }),
    columnHelper.accessor('data', {
      header: 'Data',
    })
  ])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    meta: {
      updateData: (rowIndex, columnId, value) => {
        setData(old =>
          old.map((row, index) => {
            if (index === rowIndex) {
              return {
                ...old[rowIndex],
                [columnId]: value,
              };
            }
            return row;
          })
        );
      },
    }
  })

  const addColumn = () => {
    setColumns([
      ...columns,
      columnHelper.accessor('testColumn', {
        header: 'Test Column'
      })
    ])
  }

  return (
    <div>
      <table>
        <thead>
          {table.getHeaderGroups().map(headerGroup => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map(header => (
                <th key={header.id}>
                  {flexRender(
                    header.column.columnDef.header,
                    header.getContext()
                  )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody>
          {table.getRowModel().rows.map(row => (
            <tr key={row.id}>
              {row.getVisibleCells().map(cell => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => addColumn()}>add column</button>
    </div>
    
  )
}

export default Table