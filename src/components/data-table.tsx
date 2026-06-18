import {
  ButtonBase,
  Dialog,
  DialogActions,
  DialogTitle,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";
export type Column<T> = {
  header: string;
  render: (item: T) => React.ReactNode;
};

function DataTable<T extends { _id?: string }>({
  columns,
  data,
  onEdit,
  onDelete,
}: {
  columns: Column<T>[];
  data: T[];
  onEdit?: (item: T) => void;
  onDelete?: (id: string) => Promise<void>;
}) {
  const [open, setOpen] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: "16px",
        height: "508px",
        overflowX: "hidden",
      }}
    >
      <Table sx={{ "& .MuiTableCell-root": { padding: "16px 32px" } }}>
        <TableHead sx={{ backgroundColor: "#F4F6F8" }}>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col.header}>{col.header}</TableCell>
            ))}
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data?.map((item) => (
            <TableRow key={item._id}>
              {columns.map((col) => (
                <TableCell key={col.header}>{col.render(item)}</TableCell>
              ))}
              <TableCell>
                <Stack
                  direction="row"
                  sx={{ justifyContent: "flex-end", gap: 2 }}
                >
                  {onEdit && (
                    <ButtonBase onClick={() => onEdit(item)}>
                      <EditIcon sx={{ color: "#637381" }} />
                    </ButtonBase>
                  )}
                  {onDelete && (
                    <ButtonBase
                      onClick={() => {
                        setSelectedId(item._id!);
                        setOpen(true);
                      }}
                    >
                      <DeleteIcon sx={{ color: "#FF5630" }} />
                    </ButtonBase>
                  )}
                </Stack>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Silmek istediğinizden emin misiniz?</DialogTitle>
        <DialogActions>
          <ButtonBase
            onClick={async (e) => {
              e.currentTarget.disabled = true;
              await onDelete?.(selectedId!);
              setOpen(false);
            }}
          >
            Sil
          </ButtonBase>
          <ButtonBase onClick={() => setOpen(false)}>Hayır</ButtonBase>
        </DialogActions>
      </Dialog>
    </TableContainer>
  );
}

export default DataTable;
