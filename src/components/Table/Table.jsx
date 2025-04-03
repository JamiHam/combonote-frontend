import { useState } from 'react'
import Header from './Header'
import Content from './Content'

const Table = ({columns, rows}) => {
  console.log(columns)
  console.log(rows)

  return (
    <div>
      <table>
        <Header columns={columns} />
        <Content columns={columns} rows={rows} />
      </table>
    </div>
  )
}

export default Table