import React from 'react'

export const PaginationPage = ({postsPerPage, totalPosts, paginate}) => {
  const pageNumbers = []  

  for(let i=1; i<=Math.ceil(totalPosts / postsPerPage); i++) {    
    pageNumbers.push(i)
  }

  return (
    <div>
      <nav>
        <ul className="pagination">
          {pageNumbers.map(number => (
            <li key={number} className="page-item">
              <a className="page-link" onClick={() => paginate(number)}>{number}</a>
            </li>
          ))}
        </ul>
      </nav>      
    </div>
  )
}

export default PaginationPage;
