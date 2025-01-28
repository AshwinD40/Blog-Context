  import { useContext } from "react";
import { AppContext } from "../context/AppContext";

export default function Pagination() {
  const { page, handlePageChange, totalPages } = useContext(AppContext);

  if (!totalPages) return null;

  return (
    <>
      <div className=" w-full fixed bottom-0 mt-12 border-2 py-2 bg-zinc-800 rounded-t-md">
        <div className=" max-w-[670px] mx-auto flex flex-row justify-between items-center pr-2">
          <div className=" flex flex-row gap-x-3 pl-2">
            {page > 1 && (
              <button
                onClick={() => handlePageChange(page - 1)}
                className="border-2 font-bold py-1 px-4 rounded-md bg-blue-500 border-white"
              >
                Previous
              </button>
            )}
            {page < totalPages && (
              <button
                onClick={() => handlePageChange(page + 1)}
                className="border-2 py-1 font-bold px-3 rounded-md bg-blue-500 border-white"
              >
                Next
              </button>
            )}
          </div>
          
          <p className="text-md font-bold border-2 py-1 px-3 rounded-md bg-green-600">
            Page {page} of {totalPages}
          </p>
        </div>
      </div>
    </>
  );
}
