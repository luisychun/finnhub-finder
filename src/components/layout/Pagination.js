import React from 'react'

const PaginationPage = ({postsPerPage, totalPosts, paginate}) => {
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
              <a className="page-link" style={{ cursor: 'pointer', color: '#212529' }} onClick={() => paginate(number)}>{number}</a>
            </li>
          ))}
        </ul>
      </nav>      
    </div>
  )
}

export default PaginationPage;
