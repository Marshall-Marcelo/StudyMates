import React, { type HtmlHTMLAttributes } from "react";
import merge from "@/lib/merge";

interface TableProps extends HtmlHTMLAttributes<HTMLTableElement> {
  className?: string;
  headers: string[];
}

const Table = ({ className, headers }: TableProps) => {
  return (
    <table className={merge("", className)}>
      <tr>
        {headers.map((header) => {
          return <th>{header}</th>;
        })}
      </tr>
    </table>
  );
};

export default Table;
