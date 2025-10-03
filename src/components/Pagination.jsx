import React from 'react'

const Pagination = ({ pageNumber, paginate, next, prev, currentPage }) => {

  const totalPages = pageNumber.length;
  const maxVisible = 5; // ek sathe koyta page dekhabe

  // Range calculation
  let start = Math.floor((currentPage - 1) / maxVisible) * maxVisible + 1;
  let end = Math.min(start + maxVisible - 1, totalPages);
  return (
    <nav aria-label="Page navigation example" className="py-5">
      <ul className="inline-flex -space-x-px text-sm">
        {/* Previous Button */}
        {totalPages > 0 && (
          <li onClick={prev}>
            <button className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700">
              Previous
            </button>
          </li>
        )}

        {/* First page + ... */}
        {start > 1 && (
          <>
            <li onClick={() => paginate(1)}>
              <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 cursor-pointer">
                1
              </button>
            </li>
            <li>
              <span className="px-2">...</span>
            </li>
          </>
        )}

        {/* Visible Range */}
        {Array.from({ length: end - start + 1 }, (_, idx) => start + idx).map(
          (page) => (
            <li key={page} onClick={() => paginate(page)}>
              <button
                className={`${currentPage === page
                  ? "flex items-center justify-center px-3 h-8 leading-tight text-white bg-[#262626] border border-gray-300 cursor-pointer"
                  : "flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 cursor-pointer"
                  }`}
              >
                {page}
              </button>
            </li>
          )
        )}

        {/* Last page + ... */}
        {end < totalPages && (
          <>
            <li>
              <span className="px-2">...</span>
            </li>
            <li onClick={() => paginate(totalPages)}>
              <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 cursor-pointer">
                {totalPages}
              </button>
            </li>
          </>
        )}

        {/* Next Button */}
        {totalPages > 0 && (
          <li onClick={next}>
            <button className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700">
              Next
            </button>
          </li>
        )}
      </ul>
    </nav>
  )
}

export default Pagination