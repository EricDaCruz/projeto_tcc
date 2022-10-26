import { useEffect } from "react";
import { useState } from "react";

export function PaginationNav({ questionsPerPages, totalQuestions }) {
  const [pageNumber, setPageNumber] = useState([]);

  useEffect(() => {
    for (let i = 0; i <= Math.ceil(totalQuestions / questionsPerPages); i++) {
      setPageNumber([...pageNumber, i]);
    }
  }, []);

  return (
    <nav>
      <ul>
        {pageNumber.length > 1 && (
            pageNumber.map((number) => {
                <li key={number}>
                  <a href="!#">1</a>
                </li>;
              })
        )}
      </ul>
    </nav>
  );
}
