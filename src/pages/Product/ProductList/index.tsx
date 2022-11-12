import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  Box,
  Button,
  Chip,
  Divider,
  IconButton,
  TablePagination,
} from "@mui/material";

import Table, { TableHeadConfig } from "../../../components/Table";
import {
  HEADER_HEIGHT,
  PAGESIZE_OPTIONS,
} from "../../../constants";
import PageLayout from "../../../containers/layouts/PageLayout";
import { useGetProductListQuery } from "../../../store/services/product";
import { theme } from "../../../themes";
import { Product } from "../../../types/product";

const tableHeaders: TableHeadConfig<Partial<Product>>[] = [
  {
    name: "cover",
    label: "Cover",
    width: theme.spacing(10),
  },
  {
    name: "name",
    label: "Name",
    width: theme.spacing(35),
  },
  {
    name: "price",
    label: "Price",
  },
  {
    name: "sale_price",
    label: "Sale",
  },
  {
    name: "status",
    label: "Status",
    align: "center",
  },
];

const ProductListPage = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState<number>(0);
  const [perPage, setPerPage] = useState<typeof PAGESIZE_OPTIONS[number]>(10);
  const { data: products, isFetching } = useGetProductListQuery({
    perpage: perPage,
    page: page + 1,
  });

  const handlePageChange = (_: any, newPage: number) => {
    setPage(newPage);
  };
  const handlePerPageChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setPerPage(parseInt(event.target.value));
    setPage(0);
  };

  return (
    <PageLayout
      title="Products"
      titleButton={
        <Button
          variant="contained"
          size="small"
          onClick={() => navigate("/products/create")}
        >
          Create
        </Button>
      }
    >
      <Table
        sx={{ flex: 1 }}
        loading={isFetching}
        headers={tableHeaders}
        rows={products?.data?.map((product) => ({
          ...product,
          status: (
            <Box textAlign="center">
              {product.status ? (
                <Chip
                  label="Published"
                  sx={{
                    backgroundColor: theme.palette.blue["300"],
                    color: theme.palette.common.white,
                  }}
                />
              ) : (
                <Chip
                  label="Draft"
                  sx={{
                    backgroundColor: theme.palette.grey[50],
                  }}
                />
              )}
            </Box>
          ),
        }))}
        actions={
          <Box minWidth={theme.spacing(8)}>
            <IconButton>
              <EditIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon color="error" />
            </IconButton>
          </Box>
        }
      />
      {products?.last_page && (
        <Box mt={2}>
          <TablePagination
            component="div"
            count={products?.last_page}
            page={page}
            onPageChange={handlePageChange}
            rowsPerPageOptions={PAGESIZE_OPTIONS}
            rowsPerPage={perPage}
            onRowsPerPageChange={handlePerPageChange}
          />
        </Box>
      )}
    </PageLayout>
  );
};

export default ProductListPage;
