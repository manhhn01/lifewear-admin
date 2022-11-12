import React from "react";

import {
  Checkbox,
  TableCell,
  TableHead as MuiTableHead,
  TableRow,
} from "@mui/material";

import { TableProps } from "../";

export interface TableHeaderProps<T>
  extends Pick<TableProps<T>, "headers" | "checkbox" | "actions"> {}

const TableHead = <T = any,>({
  headers,
  checkbox,
  actions,
}: TableHeaderProps<T>) => {
  return (
    <MuiTableHead>
      <TableRow>
        {!!checkbox && (
          <TableCell padding="checkbox">
            <Checkbox />
          </TableCell>
        )}
        {headers.map((header, index) => (
          <TableCell
            key={index}
            id={`${String(header.name)}-header`}
            align={header.align}
            style={{ width: header.width || "auto" }}
          >
            {header.label}
          </TableCell>
        ))}
        {actions && <TableCell />}
      </TableRow>
    </MuiTableHead>
  );
};

export default TableHead;
