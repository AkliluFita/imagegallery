import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const rows = [
  { name: "Frozen ", Calories: 159, Fat: 6.0, Carbs: 24, Protein: 34 },
  { name: " xvbx", Calories: 159, Fat: 7.0, Carbs: 24, Protein: 34 },
  { name: " sdfsdf", Calories: 159, Fat: 6.0, Carbs: 24, Protein: 34 },
  { name: "ghjfhj ", Calories: 159, Fat: 6.0, Carbs: 24, Protein: 34 },
  { name: " ljdsgfs", Calories: 159, Fat: 6.0, Carbs: 24, Protein: 34 },
  { name: " skir", Calories: 159, Fat: 6.0, Carbs: 24, Protein: 34 },
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 550 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.Calories}</TableCell>
              <TableCell align="right">{row.Fat}</TableCell>
              <TableCell align="right">{row.Carbs}</TableCell>
              <TableCell align="right">{row.Protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
