import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import Paper from "@mui/material/Paper";
import Checkbox from "@mui/material/Checkbox";

function EnhancedTableHead(props) {
  const { onSelectAllClick, numSelected, rowCount } = props;

  return (
    <TableHead>
      <TableRow>
        <TableCell padding="checkbox">
          <Checkbox
            color="secondary"
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              "aria-label": "select all times",
            }}
          />
        </TableCell>
        <TableCell align="left" padding="normal">
          Select All Times
        </TableCell>
      </TableRow>
    </TableHead>
  );
}

export default function ChooseDates_AllEvents(props) {
  const [selected, setSelected] = useState([]);

  const allTimes = [
    "10:00 - 12:00",
    "13:00 - 15:00",
    "16:00 - 18:00",
    "19:00 - 21:00",
  ];

  useEffect(() => {
    // console.log(`Selected days: ${selected}`);
    props.setTimes(selected);
  }, [selected]);

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      console.log("handleSelectAllClick");
      const newSelecteds = allTimes.map((n) => n);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, day) => {
    const selectedIndex = selected.indexOf(day);
    console.log(`selectedIndex: ${selectedIndex}`);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, day);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }
    setSelected(newSelected);
  };

  const isSelected = (day) => selected.indexOf(day) !== -1;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper sx={{ width: "100%", mb: 2 }}>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="tableTitle"
            size={"small"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              onSelectAllClick={handleSelectAllClick}
              rowCount={allTimes.length}
            />
            <TableBody>
              {allTimes.map((day, index) => {
                const isItemSelected = isSelected(day);
                const labelId = `enhanced-table-checkbox-${index}`;

                return (
                  <TableRow
                    id={index}
                    hover
                    onClick={(event) => handleClick(event, day)}
                    role="checkbox"
                    aria-checked={isItemSelected}
                    tabIndex={-1}
                    key={day}
                    selected={isItemSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        color="secondary"
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": labelId,
                        }}
                      />
                    </TableCell>
                    <TableCell align="Left">{day}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
}
