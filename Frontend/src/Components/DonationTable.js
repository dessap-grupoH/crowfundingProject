import React, { useState } from 'react';
import { useTranslation } from "react-i18next"
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow } from '@material-ui/core';
import "./DonationTable.css";
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

  const bgStyle = { background: "#8a8c9b" };

  return (
    <Paper className="paperTable" style={bgStyle}>
      <TableContainer style={{ borderRadius: "20px" }}>
        <Table stickyHeader aria-label="sticky table" style={bgStyle}>
          <TableHead className="tableHead">
            <TableRow>
              <TableCell style={bgStyle}>
                {t("donation-table.headers.project")}
              </TableCell>
              <TableCell style={bgStyle}>
                {t("donation-table.headers.donation-date")}
              </TableCell>
              <TableCell align="right" style={bgStyle}>
                {t("donation-table.headers.amount")}
              </TableCell>
              <TableCell align="right" style={bgStyle}>
                {t("donation-table.headers.given-points")}
              </TableCell>
              <TableCell style={bgStyle}>
                {t("donation-table.headers.comment")}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={bgStyle}>
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