"use client";

import { Box, Typography, Button } from "@mui/material";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        textAlign: "center",
        p: 3,
      }}
    >
      <Typography variant="h1" sx={{ fontSize: "6rem", fontWeight: 700, mb: 2 }}>
        404
      </Typography>
      <Typography variant="h5" sx={{ mb: 3, color: "text.secondary" }}>
        Page Not Found
      </Typography>
      <Typography variant="body1" sx={{ mb: 4, color: "text.secondary" }}>
        The page you&apos;re looking for doesn&apos;t exist.
      </Typography>
      <Button
        component={Link}
        href="/"
        variant="contained"
        size="large"
      >
        Go Home
      </Button>
    </Box>
  );
}



