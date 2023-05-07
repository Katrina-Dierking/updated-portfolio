import React from 'react'
import { projects } from '../../assets/proData'

function Pagination() {
    const page = 1; 
    const contentPerPage = 2; 
    const lastIndex = page * contentPerPage; 
    const firstIndex = lastIndex - contentPerPage; 

    projects.slice(firstIndex, lastIndex)
    
  return (
    <div>Pagination</div>
  )
}

export default Pagination