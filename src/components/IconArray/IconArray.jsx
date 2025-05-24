import React from "react";
import { FaHome, FaMapMarkerAlt, FaRupeeSign, FaShieldAlt } from "react-icons/fa";
import { Grid, Typography, Box, useMediaQuery, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import styled from "@emotion/styled";

const IconCard = styled(motion.div)`
  padding: 2rem;
  border-radius: 16px;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
  backdrop-filter: blur(8px);
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-8px);
    box-shadow: 0 12px 40px rgba(31, 38, 135, 0.25);
  }
`;

const VideoCard = styled(motion.div)`
  border-radius: 24px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);

  & video {
    width: 100%;
    height: auto;
    object-fit: cover;
    display: block;
  }
`;

const IconArray = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const iconItems = [
    { icon: <FaHome />, text: "Verified Properties" },
    { icon: <FaMapMarkerAlt />, text: "Prime Locations" },
    { icon: <FaRupeeSign />, text: "Affordable Prices" },
    { icon: <FaShieldAlt />, text: "Safety & Security" }
  ];

  return (
    <>
      {/* ICON GRID */}
      <Box
        sx={{
          py: 8,

        }}
      >
        <Grid
          container
          justifyContent="center"
          spacing={4}
          sx={{ px: isMobile ? 2 : 4, maxWidth: 1280, mx: "auto" }}
        >
          {iconItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <IconCard
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
              >
                <Box
                  sx={{
                    fontSize: "2.5rem",
                    mb: 2,
                    display: "inline-flex",
                    color: "#f97316" // Tailwind orange-500 equivalent
                  }}
                >
                  {item.icon}
                </Box>

                <Typography
                  variant="h6"
                  sx={{
                    fontWeight: 600,
                    background: "linear-gradient(45deg, #1e293b, #334155)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent"
                  }}
                >
                  {item.text}
                </Typography>
              </IconCard>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* VIDEO GRID */}

    </>
  );
};

export default IconArray;
