import { InputAdornment } from "@mui/material";
import { useState } from "react";
import SearchTwoToneIcon from "@mui/icons-material/SearchTwoTone";

import { StyledOutlinedInput } from "src/common/styled-components/inputs";

export default function AllRecipesSearch() {
  const [search, setSearch] = useState<string>("");

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
