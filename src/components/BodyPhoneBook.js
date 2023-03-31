import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import Modal from "../components/Modal";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#1976d2",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const BodyPhoneBook = (props) => {
  const {
    handleOpen,
    handleClose,
    openModal,
    handleSubmit,
    register,
    handleChange,
    contacts,
    errors,
    filtered,
  } = props;

  return (
    <Box sx={{ width: "100%" }} mt={4}>
      <Grid
        container
        rowSpacing={1}
        columnSpacing={{ xs: 1, sm: 2, md: 3 }}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={2}>
          <Item>Nombre</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>Apellido</Item>
        </Grid>
        <Grid item xs={2}>
          <Item>Telefono</Item>
        </Grid>
      </Grid>
      <Grid>
        {filtered.length > 0
          ? filtered.map((item) => (
              <Grid
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 15 }}
                direction="row"
                container
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={2}>
                  <h5>{item.name}</h5>
                </Grid>
                <Grid item xs={2}>
                  <h5>{item.lastName}</h5>
                </Grid>
                <Grid item xs={2}>
                  <h5>{item.phone}</h5>
                </Grid>
              </Grid>
            ))
          : contacts.map((item) => (
              <Grid
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 15 }}
                direction="row"
                container
                justifyContent="center"
                alignItems="center"
              >
                <Grid item xs={2}>
                  <h5>{item.name}</h5>
                </Grid>
                <Grid item xs={2}>
                  <h5>{item.lastName}</h5>
                </Grid>
                <Grid item xs={2}>
                  <h5>{item.phone}</h5>
                </Grid>
              </Grid>
            ))}
      </Grid>
      <Modal
        handleClose={handleClose}
        openModal={openModal}
        handleSubmit={handleSubmit}
        register={register}
        handleChange={handleChange}
        errors={errors}
      />
      <Grid xs={12} container justifyContent="center" mt={6}>
        <Button variant="contained" onClick={handleOpen}>
          Agregar Contacto
        </Button>
      </Grid>
    </Box>
  );
};

export default BodyPhoneBook;
