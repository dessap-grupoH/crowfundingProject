import React, { useState } from 'react';
import { useTranslation } from "react-i18next"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';

const DonationTable = ({ donations }) => {

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [t] = useTranslation("global");

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              <TableCell>
                {t("donation-table.headers.project")}
              </TableCell>
              <TableCell>
                {t("donation-table.headers.donation-date")}
              </TableCell>
              <TableCell align="right">
                {t("donation-table.headers.amount")}
              </TableCell>
              <TableCell align="right">
                {t("donation-table.headers.given-points")}
              </TableCell>
              <TableCell>
                {t("donation-table.headers.comment")}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {donations.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => 
                <TableRow hover tabIndex={-1} key={`row_id_${row.id}`}>
                    <TableCell>
                      {row.projectTo.name}
                    </TableCell>
                    <TableCell>
                      {new Date(row.date).toLocaleDateString(t("locale"))}
                    </TableCell>
                    <TableCell align="right">
                      {`$ ${row.amount.toLocaleString(t("locale"))}`}
                    </TableCell>
                    <TableCell align="right" >
                      {row.donationPoints.toLocaleString(t("locale"))}
                    </TableCell>
                    <TableCell>
                      {row.comment}
                    </TableCell>
                </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 15, 25]}
        component="div"
        count={donations.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        labelRowsPerPage={t("donation-table.footer.rows-per-page")}
        nextIconButtonText={t("donation-table.footer.next-button-text")}
        backIconButtonText={t("donation-table.footer.back-button-text")}
      />
    </Paper>
  );
  }

export default DonationTable;