import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

export default function CategoryTable() {
  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: "16px",
        height: "508px",
      }}
    >
      <Table>
        <TableHead
          sx={{
            backgroundColor: "#F4F6F8",
          }}
        >
          <TableRow>
            <TableCell>Kategori Adı</TableCell>
            <TableCell>Kullanılan Şubeler</TableCell>
            <TableCell>Oluşturulma Tarihi</TableCell>
            <TableCell>Güncellenme Tarihi</TableCell>
            <TableCell>Durum</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          <TableRow>
            <TableCell>Ahmet</TableCell>
            <TableCell>tarih</TableCell>
            <TableCell>10.06.2026</TableCell>
            <TableCell>Aktif</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
