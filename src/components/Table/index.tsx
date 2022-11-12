import React, {
  ReactNode,
  useMemo,
} from "react";

import {
  Box,
  Checkbox,
  CircularProgress,
  Table as MuiTable,
  TableBody,
  TableCell,
  TableContainer,
  TableContainerProps,
  TableRow,
} from "@mui/material";

import { theme } from "../../themes";
import { PartialRecord } from "../../types/utils";
import { CellImage } from "./styled";
import TableHead from "./TableHead";

const imageFields: string[] = ["cover"];
const priceFields: string[] = ["price", "sale_price"];

export interface TableHeadConfig<T> {
  name: keyof T;
  label: string;
  width?: string;
  align?: "center" | "left" | "right";
}

export interface TableProps<T> {
  headers: TableHeadConfig<T>[];
  rows?: PartialRecord<keyof T, any>[];
  checkbox?: boolean;
  loading?: boolean;
  actions?: ReactNode;
  sx?: TableContainerProps["sx"];
}

const Table = <T = any,>({
  headers,
  rows,
  checkbox,
  loading,
  actions,
  sx,
}: TableProps<T>) => {
  const currencyFormatter = useMemo(() => {
    return new Intl.NumberFormat("vi-VN", {
      style: "currency",
      currency: "VND",
    });
  }, []);

  return (
    <TableContainer sx={sx}>
      <MuiTable>
        <TableHead headers={headers} checkbox={checkbox} actions={!!actions} />
        {!loading && (
          <TableBody>
            {rows?.map((row, index) => (
              <TableRow
                hover
                key={index}
                // onClick={(event) => handleClick(event, row.name)}
                // selected={isItemSelected}
              >
                {!!checkbox && (
                  <TableCell padding="checkbox">
                    <Checkbox color="primary" />
                  </TableCell>
                )}
                {headers.map(({ name }, index) => (
                  <TableCell key={index} component="th" scope="row">
                    {imageFields.includes(String(name)) ? (
                      <CellImage src={`${row[name]}?tr=w-200,h-200`} />
                    ) : priceFields.includes(String(name)) ? (
                      currencyFormatter.format(row[name] || 0)
                    ) : (
                      row[name] || ""
                    )}
                  </TableCell>
                ))}
                <TableCell sx={{ textAlign: "right" }}>
                  {actions || <></>}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        )}
      </MuiTable>
      {loading && (
        <Box display="flex" justifyContent="center" alignItems="center" py={6}>
          <CircularProgress disableShrink />
        </Box>
      )}
    </TableContainer>
  );
};

export default Table;
