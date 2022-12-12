import { InputAdornment } from "@mui/material";
import React, { useState } from "react";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";

import { StyledOutlinedInput } from "src/common/styled-components/inputs";

type Props = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

export default function AllRecipesSearch({ search, setSearch }: Props) {
  return (
    <StyledOutlinedInput
      type="text"
      placeholder="Search recipes here..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      fullWidth
      startAdornment={
        <InputAdornment position="start">
          <SearchTwoToneIcon />
        </InputAdornment>
      }
    />
  );
}
