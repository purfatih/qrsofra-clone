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
  Typography,
  Stack,
  Tooltip,
  Box,
  Avatar,
} from "@mui/material";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { useEffect, useState } from "react";
import React from "react";
import { Link } from "react-router";
import { GetExtraProductsApi, GetProductsApi } from "../../api/products-api";
import type { ExtraProductTypes, ProductTypes } from "../../types";
import ExtraProductDialog from "../extraproduct-dialog";
import ExtraProductEditDialog from "../extraproduct-update-dialog";
import { useEventContext } from "../../context/func-event/event-context";
import { useStateContext } from "../../context/state/state-context";
import { useDataContext } from "../../context/data/data-context";

export default function ProductTable() {
  const {
    restaurantId,
    products,
    setProducts,
    extraProducts,
    setExtraProducts,
  } = useDataContext();
  const { handleProductDelete, handleExtraProductDelete } = useEventContext();
  const {
    setOpenEditExtraProductDialog,
    openExtraProductDialog,
    openEditExtraProductDialog,
  } = useStateContext();
  const [open, setOpen] = React.useState(false);
  const [selectedProducts, setSelectedProducts] = useState<string | null>(null);
  const handleClickOpen = (id: string) => {
    setSelectedProducts(id);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProducts(null);
  };
  useEffect(() => {
    if (!restaurantId) return;
    const fetchProducts = async () => {
      const data = await GetProductsApi(restaurantId);
      setProducts(data.data);
    };
    fetchProducts();
  }, [restaurantId]);
  const [value, setValue] = React.useState("1");
  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  useEffect(() => {
    if (!restaurantId) return;
    const FetchExtraProducts = async () => {
      const data = await GetExtraProductsApi(restaurantId);
      setExtraProducts(data);
    };
    FetchExtraProducts();
  }, [restaurantId, openEditExtraProductDialog]);
  return (
    <>
      <TableContainer
        component={Paper}
        sx={{
          borderRadius: "16px",
          height: "508px",
          overflowX: "hidden",
        }}
      >
        <TabContext value={value}>
          <TabList
            onChange={handleChange}
            aria-label="lab API tabs example"
            sx={{
              "& .MuiTab-root": {
                fontWeight: "700",
                fontSize: "14px",
              },
            }}
          >
            <Tab
              label={
                <Stack
                  sx={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "700",
                      fontFamily: "Nunito Sans",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    Ürünler
                    <Typography
                      sx={{
                        fontSize: "12px",
                        minWidth: "20px",
                        height: "20px",
                        backgroundColor: "#22C55E",
                        borderRadius: "50%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#fff",
                        fontWeight: "700",
                        padding: "4px",
                      }}
                    >
                      {products?.length}
                    </Typography>
                  </Typography>
                </Stack>
              }
              value="1"
              sx={{
                textTransform: "none",
              }}
            />
            <Tab
              label={
                <Stack
                  sx={{
                    flexDirection: "row",
                    alignItems: "center",
                    gap: "4px",
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: "14px",
                      fontWeight: "700",
                      fontFamily: "Nunito Sans",
                      display: "flex",
                      alignItems: "center",
                      gap: "4px",
                    }}
                  >
                    Yan Ürünler
                    <Typography
                      sx={{
                        fontSize: "12px",
                        minWidth: "20px",
                        height: "20px",
                        backgroundColor: "#FFF4E5",
                        borderRadius: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#B76E00",
                        fontWeight: "700",
                        padding: "4px",
                      }}
                    >
                      {extraProducts?.length}
                    </Typography>
                  </Typography>
                </Stack>
              }
              value="2"
              sx={{
                textTransform: "none",
              }}
            />
          </TabList>
          <Table
            sx={{
              "& .MuiTableCell-root": { padding: "16px 32px", width: "100%" },
            }}
          >
            <TabPanel value="1" sx={{ padding: 0 }}>
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
                {products?.map((product: ProductTypes, index: number) => (
                  <TableRow
                    key={product?._id || index}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#919EAB14",
                      },
                    }}
                  >
                    <TableCell>
                      <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                          alignItems: "center",
                        }}
                      >
                        {product?.images?.length > 0 ? (
                          <Box
                            component="img"
                            src={product?.images?.[0]}
                            sx={{
                              width: 60,
                              height: 60,
                              borderRadius: "8px",
                              overflow: "hidden",
                              flexShrink: 0,
                              backgroundColor: "#F4F6F8",
                              objectFit: "cover",
                            }}
                          />
                        ) : (
                          <Box
                            sx={{
                              width: 60,
                              height: 60,
                              borderRadius: "8px",
                              overflow: "hidden",
                              flexShrink: 0,
                              backgroundColor: "#F4F6F8",
                            }}
                          >
                            <Avatar
                              sx={{
                                width: 60,
                                height: 60,
                                borderRadius: "8px",
                              }}
                            >
                              {product?.name?.charAt(0)?.toUpperCase()}
                            </Avatar>
                          </Box>
                        )}
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: "400",
                            fontFamily: "Nunito Sans",
                            width: "250px",
                            lineBreak: "anywhere",
                          }}
                        >
                          {product?.name}
                        </Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>
                      <Tooltip
                        title={
                          <Stack direction="column">
                            {product?.categories?.map((c) => (
                              <span key={c._id}>{c.name}</span>
                            ))}
                          </Stack>
                        }
                      >
                        {product?.categories?.length === 1 ? (
                          <Chip
                            label={product?.categories[0]?.name}
                            variant="filled"
                            sx={{
                              backgroundColor: "#22c55e29",
                              color: "#166534",
                              fontWeight: "700",
                              fontSize: "12px",
                              borderRadius: "8px",
                            }}
                          />
                        ) : (
                          <Chip
                            label={`${product?.categories?.length} kategori`}
                            variant="filled"
                            sx={{
                              backgroundColor: "#22c55e29",
                              color: "#166534",
                              fontWeight: "700",
                              fontSize: "12px",
                              borderRadius: "8px",
                            }}
                          />
                        )}
                      </Tooltip>
                    </TableCell>
                    <TableCell>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          fontFamily: "Nunito Sans",
                        }}
                      >
                        {new Date(product?.createdAt).toLocaleDateString(
                          "tr-TR",
                          {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          },
                        )}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          fontFamily: "Nunito Sans",
                          color: "#637681",
                        }}
                      >
                        {new Date(product?.createdAt).toLocaleTimeString(
                          "tr-TR",
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          },
                        )}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          fontFamily: "Nunito Sans",
                        }}
                      >
                        {new Date(product?.updatedAt).toLocaleDateString(
                          "tr-TR",
                          {
                            day: "2-digit",
                            month: "2-digit",
                            year: "numeric",
                          },
                        )}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          fontFamily: "Nunito Sans",
                          color: "#637681",
                        }}
                      >
                        {new Date(product?.updatedAt).toLocaleTimeString(
                          "tr-TR",
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                          },
                        )}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          fontFamily: "Nunito Sans",
                        }}
                      >
                        {product?.price?.toLocaleString("tr-TR", {
                          style: "currency",
                          currency: "TRY",
                        })}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      {product?.status === "ACTIVE" ? (
                        <Chip
                          label="Aktif"
                          variant="filled"
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

                    <TableCell>
                      <Stack
                        sx={{
                          flexDirection: "row",
                          alignItems: "flex-end",
                          justifyContent: "flex-end",
                          gap: "8px",
                        }}
                      >
                        <Link to={`/dashboard/products/edit/${product?._id}`}>
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
                          >
                            <EditIcon
                              sx={{
                                color: "#637381",
                              }}
                            />
                          </ButtonBase>
                        </Link>
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
                          onClick={() => handleClickOpen(product?._id ?? "")}
                        >
                          <DeleteIcon
                            sx={{
                              color: "#FF5630",
                            }}
                          />
                        </ButtonBase>
                      </Stack>
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
                  <DialogTitle id="alert-dialog-title">Ürünü Sil</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Ürünü silmek istediğinizden emin misiniz?
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
                        await handleProductDelete(selectedProducts!);
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
            </TabPanel>
            <TabPanel value="2" sx={{ padding: 0 }}>
              <TableHead
                sx={{
                  backgroundColor: "#F4F6F8",
                }}
              >
                <TableRow>
                  <TableCell>Ürün Adı</TableCell>
                  <TableCell>Oluşturulma Tarihi</TableCell>
                  <TableCell>Güncellenme Tarihi</TableCell>
                  <TableCell>Fiyat</TableCell>
                  <TableCell>Durum</TableCell>
                  <TableCell></TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {extraProducts?.map((ep: ExtraProductTypes, index: number) => (
                  <TableRow
                    key={ep?._id || index}
                    sx={{
                      "&:hover": {
                        backgroundColor: "#919EAB14",
                      },
                    }}
                  >
                    <TableCell>
                      <Stack
                        direction="row"
                        spacing={2}
                        sx={{
                          alignItems: "center",
                        }}
                      >
                        <Typography
                          sx={{
                            fontSize: "14px",
                            fontWeight: "400",
                            fontFamily: "Nunito Sans",
                            width: "350px",
                            lineBreak: "anywhere",
                          }}
                        >
                          {ep?.name}
                        </Typography>
                      </Stack>
                    </TableCell>

                    <TableCell>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          fontFamily: "Nunito Sans",
                        }}
                      >
                        {new Date(ep?.createdAt).toLocaleDateString("tr-TR", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })}
                      </Typography>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          fontFamily: "Nunito Sans",
                          color: "#637681",
                        }}
                      >
                        {new Date(ep?.createdAt).toLocaleTimeString("tr-TR", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          fontFamily: "Nunito Sans",
                        }}
                      >
                        {new Date(ep?.updatedAt).toLocaleDateString("tr-TR", {
                          day: "2-digit",
                          month: "2-digit",
                          year: "numeric",
                        })}
                      </Typography>

                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          fontFamily: "Nunito Sans",
                          color: "#637681",
                        }}
                      >
                        {new Date(ep?.updatedAt).toLocaleTimeString("tr-TR", {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      <Typography
                        sx={{
                          fontSize: "14px",
                          fontWeight: "400",
                          fontFamily: "Nunito Sans",
                        }}
                      >
                        {ep?.price?.toLocaleString("tr-TR", {
                          style: "currency",
                          currency: "TRY",
                        })}
                      </Typography>
                    </TableCell>
                    <TableCell>
                      {ep?.status === "ACTIVE" ? (
                        <Chip
                          label="Aktif"
                          variant="filled"
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

                    <TableCell>
                      <Stack
                        sx={{
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
                          onClick={() => {
                            setOpenEditExtraProductDialog((prev) => !prev);
                            setSelectedProducts(ep._id);
                          }}
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
                          onClick={() => handleClickOpen(ep?._id ?? "")}
                        >
                          <DeleteIcon
                            sx={{
                              color: "#FF5630",
                            }}
                          />
                        </ButtonBase>
                      </Stack>
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
                  <DialogTitle id="alert-dialog-title">
                    Yan ürünü sil
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Yan ürünü silmek istediğinizden emin misiniz?
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
                        await handleExtraProductDelete(selectedProducts!);
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
            </TabPanel>
          </Table>
        </TabContext>
        {openEditExtraProductDialog && (
          <ExtraProductEditDialog selectedProducts={selectedProducts} />
        )}
        {openExtraProductDialog && <ExtraProductDialog />}
      </TableContainer>
    </>
  );
}
