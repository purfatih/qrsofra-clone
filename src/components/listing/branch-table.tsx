import { useNavigate } from "react-router";
import { useEventContext } from "../../context/func-event/event-context";
import DataTable, { type Column } from "../data-table";
import { useDataContext } from "../../context/data/data-context";
import { type BranchTypes } from "../../types";
import { useEffect } from "react";
import { GetBranchesApi } from "../../api/branches-api";
import { Chip, Typography } from "@mui/material";

export default function BranchTable() {
  const { restaurantId, setBranches, branches } = useDataContext();

  useEffect(() => {
    if (!restaurantId) return;
    const fetchCategories = async () => {
      const data = await GetBranchesApi(restaurantId);
      setBranches(data);
      console.log(branches);
    };
    fetchCategories();
  }, [restaurantId]);

  const { handleBranchDelete } = useEventContext();

  const navigate = useNavigate();

  const columns: Column<BranchTypes>[] = [
    { header: "Şube Adı", render: (b) => b.name },
    {
      header: "Oluşturulma Tarihi",
      render: (b) => (
        <>
          <Typography sx={{ fontSize: "14px", fontFamily: "Nunito Sans" }}>
            {new Date(b.createdAt!).toLocaleDateString("tr-TR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#637681" }}>
            {new Date(b.createdAt!).toLocaleTimeString("tr-TR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Typography>
        </>
      ),
    },
    {
      header: "Güncelleme Tarihi",
      render: (b) => (
        <>
          <Typography sx={{ fontSize: "14px", fontFamily: "Nunito Sans" }}>
            {new Date(b.updatedAt!).toLocaleDateString("tr-TR", {
              day: "2-digit",
              month: "2-digit",
              year: "numeric",
            })}
          </Typography>
          <Typography sx={{ fontSize: "14px", color: "#637681" }}>
            {new Date(b.updatedAt!).toLocaleTimeString("tr-TR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Typography>
        </>
      ),
    },
    {
      header: "Durum",
      render: (b) =>
        b.status === "ACTIVE" ? (
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
      data={branches}
      onEdit={(b) => navigate(`/dashboard/branches/edit/${b._id}`)}
      onDelete={handleBranchDelete}
    />
  );
}
