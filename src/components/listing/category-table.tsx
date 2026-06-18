import { useNavigate } from "react-router";
import { useEventContext } from "../../context/func-event/event-context";
import DataTable, { type Column } from "../data-table";
import { useDataContext } from "../../context/data/data-context";
import { type BranchTypes, type CategoryTypes } from "../../types";
import { useEffect } from "react";
import { Chip, Stack, Tooltip, Typography } from "@mui/material";
import { GetCategoriesApi } from "../../api/category-api";

export default function CategoryTable() {
  const { restaurantId, setCategories, categories } = useDataContext();
  const { handleCategoryDelete } = useEventContext();

  useEffect(() => {
    if (!restaurantId) return;
    const fetchCategories = async () => {
      const data = await GetCategoriesApi(restaurantId);
      setCategories(data.data);
      console.log(categories);
    };
    fetchCategories();
  }, [restaurantId]);

  const navigate = useNavigate();

  const columns: Column<CategoryTypes>[] = [
    { header: "Kategori Adı", render: (c) => c.name },
    {
      header: "Kullanılan Şubeler",
      render: (c) => (
        <Stack direction="row" spacing={1}>
          {c.branches?.length > 1 ? (
            <Tooltip
              title={c.branches?.map((b: BranchTypes, k: number) => (
                <Typography
                  key={k}
                  sx={{ fontFamily: "Nunito Sans", fontSize: "12px" }}
                >
                  {b.name}
                </Typography>
              ))}
              arrow
            >
              <Typography
                sx={{
                  fontFamily: "Nunito Sans",
                  borderRadius: "8px",
                  backgroundColor: "#22c55e29",
                  color: "#166534",
                  width: "65px",
                  height: "25px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "600",
                  fontSize: "12px",
                }}
              >
                {c.branches?.length} şube
              </Typography>
            </Tooltip>
          ) : (
            c.branches?.map((b: BranchTypes, k: number) => (
              <Tooltip title={b.name} arrow>
                <Chip
                  sx={{
                    fontFamily: "Nunito Sans",
                    borderRadius: "8px",
                    backgroundColor: "#22c55e29",
                    color: "#166534",
                  }}
                  key={k}
                  label={b.name}
                />
              </Tooltip>
            ))
          )}
        </Stack>
      ),
    },
    {
      header: "Oluşturulma Tarihi",
      render: (c) => (
        <>
          <Typography sx={{ fontSize: "14px", fontFamily: "Nunito Sans" }}>
            {new Date(c.createdAt!).toLocaleDateString("tr-TR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#637681" }}>
            {new Date(c.createdAt!).toLocaleTimeString("tr-TR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Typography>
        </>
      ),
    },
    {
      header: "Güncelleme Tarihi",
      render: (c) => (
        <>
          <Typography sx={{ fontSize: "14px", fontFamily: "Nunito Sans" }}>
            {new Date(c.updatedAt!).toLocaleDateString("tr-TR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#637681" }}>
            {new Date(c.updatedAt!).toLocaleTimeString("tr-TR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Typography>
        </>
      ),
    },
    {
      header: "Durum",
      render: (c) =>
        c.status === "ACTIVE" ? (
          <Chip
            label="Aktif"
            sx={{
              backgroundColor: "#22c55e29",
              color: "#166534",
              borderRadius: "8px",
            }}
          />
        ) : (
          <Chip
            label="Pasif"
            sx={{
              backgroundColor: "#ef444429",
              color: "#991b1b",
              borderRadius: "8px",
            }}
          />
        ),
    },
  ];

  return (
    <DataTable
      columns={columns}
      data={categories}
      onEdit={(c) => navigate(`/dashboard/categories/edit/${c._id}`)}
      onDelete={handleCategoryDelete}
    />
  );
}
