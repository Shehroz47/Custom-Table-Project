import React from "react";
import { ColumnType } from "../../common/types";
import { SortingType } from "../../common/types";

export function TableHeader({
  columns,
  sorting,
  sortingTable,
}: {
  columns: ColumnType[];
  sorting: SortingType;
  sortingTable: (newSorting: { column: string; order: string }) => void;
}) {
  return (
    <thead>
      <tr>
        {columns.map((column: ColumnType) => {
          const isDesc =
            sorting.column === column.field && sorting.order === "desc";
          const isAsc =
            sorting.column === column.field && sorting.order === "asc"; // true
          const futureSortingValue = isDesc ? "asc" : "desc";

          return (
            <th
              key={column.field}
              className="user-table-cell"
              onClick={() =>
                sortingTable({
                  column: column.field,
                  order: futureSortingValue,
                })
              }
            >
              {column.title}
              {isDesc && <span className="up-arrow">🡹</span>}
              {isAsc && <span className="down-arrow">🡻</span>}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}
