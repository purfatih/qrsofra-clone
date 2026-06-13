import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  ButtonBase,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Chip,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import { GetBranchesApi } from "../../api/branches-api";
import { useGlobalContext } from "../../context/Context";
import React from "react";
import { useNavigate } from "react-router";

export default function BranchTable() {
  const navigate = useNavigate();
  const { restaurantId, branches, handleBranchDelete, setBranches } =
    useGlobalContext();
  const [open, setOpen] = React.useState(false);
  const [selectedBranchId, setSelectedBranchId] = useState<string | null>(null);

  const handleClickOpen = (id: string) => {
    setSelectedBranchId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedBranchId(null);
  };
  useEffect(() => {
    if (!restaurantId) return;
    console.log("BranchTable restaurantId:", restaurantId);
    const fetchBranches = async () => {
      const data = await GetBranchesApi(restaurantId);
      console.log("Gelen branchler:", data); // ne geliyor?
      setBranches(data);
    };
    fetchBranches();
  }, [restaurantId]);

  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius: "16px",
        height: "508px",
        width: "100%",
      }}
    >
      <Table sx={{ "& .MuiTableCell-root": { padding: "16px 32px" } }}>
        <TableHead
          sx={{
            backgroundColor: "#F4F6F8",
          }}
        >
          <TableRow>
            <TableCell>Ürün Adı</TableCell>
            <TableCell>Kategori</TableCell>
            <TableCell>Oluşturulma Tarihi</TableCell>
            <TableCell>Güncellenme Tarihi</TableCell>
            <TableCell>Fiyat</TableCell>
            <TableCell>Durum</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {branches?.map((branch) => (
            <TableRow
              key={branch._id}
              sx={{
                "&:hover": {
                  backgroundColor: "#919EAB14",
                },
              }}
            >
              <TableCell>{branch.name}</TableCell>
              <TableCell>Kategori</TableCell>
              <TableCell>{branch.createdAt}</TableCell>
              <TableCell>{branch.updatedAt}</TableCell>
              <TableCell>123</TableCell>
              <TableCell>
                {branch.status === "ACTIVE" ? (
                  <Chip
                    label="Aktif"
                    sx={{
                      backgroundColor: "#22c55e29",
                      color: "#166534",
                      fontWeight: "700",
                      borderRadius: "8px",
                    }}
                  />
                ) : (
                  <Chip
                    label="Pasif"
                    sx={{
                      backgroundColor: "#ef444429",
                      color: "#991b1b",
                      fontWeight: "700",
                      borderRadius: "8px",
                    }}
                  />
                )}
              </TableCell>

              <TableCell
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "flex-end",
                  justifyContent: "flex-end",
                  gap: "8px",
                }}
              >
                <ButtonBase
                  sx={{
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "32px",
                    height: "32px",
                    "&:hover": { backgroundColor: "#F4F6F8" },
                  }}
                  onClick={() =>
                    navigate(`/dashboard/branches/edit/${branch._id}`)
                  }
                >
                  <EditIcon
                    sx={{
                      color: "#637381",
                    }}
                  />
                </ButtonBase>
                <ButtonBase
                  sx={{
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "32px",
                    height: "32px",
                    "&:hover": { backgroundColor: "#FF563014" },
                  }}
                  onClick={() => handleClickOpen(branch._id)}
                >
                  <DeleteIcon
                    sx={{
                      color: "#FF5630",
                    }}
                  />
                </ButtonBase>
              </TableCell>
            </TableRow>
          ))}
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            role="alertdialog"
            sx={{
              "& .MuiPaper-root": {
                width: "444px",
                height: "174px",
                borderRadius: "16px",
              },
            }}
          >
            <DialogTitle id="alert-dialog-title">Şubeyi Sil</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Şubeyi silmek istediğinizden emin misiniz?
              </DialogContentText>
            </DialogContent>
            <DialogActions
              sx={{
                padding: "0 24px 24px 24px",
              }}
            >
              <ButtonBase
                sx={{
                  borderRadius: "8px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "65px",
                  height: "36px",
                  backgroundColor: "#FF5630",
                  fontWeight: "700",
                  color: "white",
                  fontFamily: "Nunito Sans",
                  cursor: "pointer",
                }}
                onClick={async (e) => {
                  const button = e.currentTarget;
                  button.disabled = true;
                  await handleBranchDelete(selectedBranchId!);
                  handleClose();
                }}
                autoFocus
              >
                Sil
              </ButtonBase>
              <ButtonBase
                sx={{
                  border: "1px solid #919EAB",
                  display: "flex",
                  justifyContent: "center",
                  borderRadius: "8px",
                  alignItems: "center",
                  width: "65px",
                  height: "36px",
                  fontWeight: "700",
                  fontFamily: "Nunito Sans",
                  "&:hover": { backgroundColor: "#F4F6F8" },
                }}
                onClick={handleClose}
              >
                Hayır
              </ButtonBase>
            </DialogActions>
          </Dialog>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
