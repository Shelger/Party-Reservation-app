import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import { FaSearch } from "react-icons/fa";
import { FiSend } from "react-icons/fi";

const MobileSearch = () => {
  return (
    <Paper
      component="form"
      sx={{
        p: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: 400,
        height: 65,
        border: "1px solid #ccc",
        borderRadius: 20,
      }}
    >
      <IconButton sx={{ p: "10px" }}>
        <FaSearch />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1, width: 300, height: 35, disableUnderline: true }}
        placeholder="Where to?"
      />
      <IconButton sx={{ p: "10px" }}>
        {/* type = "submit" */}
        <FiSend />
      </IconButton>
    </Paper>
  );
};

export default MobileSearch;
