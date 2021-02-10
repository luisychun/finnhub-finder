import React from 'react'

const PaginationPage = ({ postsPerPage, totalPosts, paginate, activePost }) => {
  const pageNumbers = []
  const getActivePost = (number) => {
    let page = 0
    if (activePost >= 10) {
      page = activePost.toString()
    } else {
      page = activePost.toString()[0]
    }

    if (number == page) {
      return `active-post`
    }
  }

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  return (
    <div>
      <nav>
        <ul className="pagination">
          {pageNumbers.map((number) => (
            <li key={number} className="page-item">
              <a
                className={`page-link ${getActivePost(number)}`}
                style={{ cursor: 'pointer', color: '#212529' }}
                onClick={() => paginate(number)}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

export default PaginationPage
