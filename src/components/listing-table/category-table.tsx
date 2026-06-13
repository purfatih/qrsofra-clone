import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Chip,
  ButtonBase,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Tooltip,
  Stack,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../../context/Context";
import { GetCategoriesApi } from "../../api/category-api";
export default function CategoryTable() {
  const [open, setOpen] = useState(false);
  const [selectedCategoryId, setSelectedCategoryId] = useState<string | null>(
    null,
  );
  const { categories, restaurantId, setCategories, handleCategoryDelete } =
    useGlobalContext();
  const navigate = useNavigate();
  const handleClickOpen = (id: string) => {
    setSelectedCategoryId(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedCategoryId(null);
  };
  useEffect(() => {
    if (!restaurantId) return;
    const fetchCategories = async () => {
      const data = await GetCategoriesApi(restaurantId);
      setCategories(data.data);
      console.log(categories);
    };
    fetchCategories();
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
            <TableCell>Kategori Adı</TableCell>
            <TableCell>Kullanılan Şubeler</TableCell>
            <TableCell>Oluşturulma Tarihi</TableCell>
            <TableCell>Güncellenme Tarihi</TableCell>
            <TableCell>Durum</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {categories.map((category) => (
            <TableRow
              key={category._id}
              sx={{
                "&:hover": {
                  backgroundColor: "#919EAB14",
                },
              }}
            >
              <TableCell>{category.name}</TableCell>
              <TableCell>
                <Tooltip
                  title={
                    <Stack direction="column">
                      <strong>Şubeler: </strong>
                      <br />
                      {category?.branches?.map((b) => (
                        <span key={b._id}>{b.name}</span>
                      ))}
                    </Stack>
                  }
                >
                  <Chip
                    label={`${category.branchIds?.length} şube`}
                    variant="filled"
                    sx={{
                      backgroundColor: "#22c55e29",
                      color: "#166534",
                      fontWeight: "700",
                      fontSize: "12px",
                      borderRadius: "8px",
                    }}
                  />
                </Tooltip>
              </TableCell>
              <TableCell>{category.createdAt}</TableCell>
              <TableCell>{category.updatedAt}</TableCell>
              <TableCell>
                {category.status === "ACTIVE" ? (
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
                    navigate(`/dashboard/categories/edit/${category._id}`)
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
                  onClick={() => handleClickOpen(category._id)}
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
            <DialogTitle id="alert-dialog-title">Kategoriyi Sil</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Kategoriyi silmek istediğinizden emin misiniz?
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
                  await handleCategoryDelete(selectedCategoryId!);
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
