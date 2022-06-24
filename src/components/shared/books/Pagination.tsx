import ReactPaginate from 'react-paginate';
import {useState} from "react";

function Pagination() {
    const [pageCount, setPageCount] = useState(1); 
    const [currentPage, setcurrentPage] = useState(0);

    const handlePageChange = (selectedObject: any) => {
		setcurrentPage(selectedObject.selected);
	};
  return (
   <>
       {/*  <ReactPaginate
					pageCount={pageCount}
					marginPagesDisplayed={2}
					onPageChange={handlePageChange}
					containerClassName={'container'}
					previousLinkClassName={'page'}
					breakClassName={'page'}
					nextLinkClassName={'page'}
					pageClassName={'page'}
					activeClassName={'active'}
				/> */}
   </>
  )
}

export default Pagination