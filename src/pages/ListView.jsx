import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import { useSelector } from "react-redux";

const ListView = ({ setDetailId }) => {
  const { flights } = useSelector((store) => store.flightReducer);

  const [itemOffset, setItemOffset] = useState(0);

  const itemsPerPage = 10;

  const endOffset = itemOffset + itemsPerPage;

  const currentItems = flights.slice(itemOffset, endOffset);

  const pageCount = Math.ceil(flights.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % flights.length;

    setItemOffset(newOffset);
  };

  // console.log(flights);
  return (
    <div className="p-4">
      <table className=" table table-dark table-striped table-hover table-responsive">
        <thead>
          <tr>
            <th>id</th>
            <th>Tail Code</th>
            <th>Latitude</th>
            <th>Longitude</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((flight) => (
            <tr key={flight.id}>
              <td>{flight.id}</td>
              <td>{flight.code ? flight.code : "-"}</td>
              <td>{flight.lat ? flight.lat : "-"}</td>
              <td>{flight.lng ? flight.lng : "-"}</td>
              <td>
                <button onClick={() => setDetailId(flight.id)}>Details</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className=" d-flex justify-content-center mt-3">
        <ReactPaginate
          className="pagination"
          pageClassName="page-item"
          pageLinkClassName="page-link"
          nextLinkClassName="page-link"
          previousLinkClassName="page-link"
          breakClassName="page-link"
          previousClassName="page-item"
          nextClassName="page-item"
          activeClassName="active"
          activeLinkClassName="active-link"
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div>
    </div>
  );
};

export default ListView;
