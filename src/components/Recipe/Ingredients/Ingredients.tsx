import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import { TableAvatar } from "src/common/styled-components/avatars";
import { DataGrid, GridColDef, GridAlignment } from "@mui/x-data-grid";
import { Ingredient } from "./types";
import { ExpandMore } from "@mui/icons-material";

type Props = {
  ingredients: Ingredient[];
};

const supermarkets = ["tesco", "sainsburys", "asda", "aldi", "ms"];

export default function Ingredients({ ingredients }: Props) {
  const columns: GridColDef[] = [
    { field: "label", headerName: "Ingredients", flex: 5 },
    ...supermarkets.map((supermarket) => ({
      field: supermarket,
      headerName: supermarket,
      flex: 1,
      sortable: false,
      renderHeader: () => (
        <TableAvatar>
          <img
            src={`/static/images/placeholders/logo/${supermarket}.png`}
            alt={supermarket}
          />
        </TableAvatar>
      ),
      align: "center" as GridAlignment,
      headerAlign: "center" as GridAlignment,
    })),
  ];

  const rows = ingredients.map((ingredient) => ({
    id: ingredient.id,
    label: ingredient.label,
    tesco: "47p",
    sainsburys: "£1.20",
    asda: "£1.10",
    aldi: "29p",
    ms: "£2.40",
  }));

  return (
    <Accordion>
      <AccordionSummary expandIcon={<ExpandMore />}>
        <Typography variant="h6">Ingredients</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box sx={{ height: 500, width: "100%" }}>
          <DataGrid
            columns={columns}
            rows={rows}
            disableSelectionOnClick
            hideFooter
            disableColumnMenu
            disableColumnSelector
            showCellRightBorder={false}
            sx={{
              "& .MuiDataGrid-columnSeparator": {
                display: "none",
              },
            }}
          />
        </Box>
      </AccordionDetails>
    </Accordion>
  );
}
