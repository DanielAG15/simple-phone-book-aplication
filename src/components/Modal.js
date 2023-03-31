import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ErrorMessage } from "@hookform/error-message";
import "../styles/modal.css";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal(props) {
  const {
    openModal,
    handleClose,
    register,
    handleSubmit,
    handleChange,
    errors,
  } = props;
  return (
    <div>
      <Modal
        open={openModal}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Agregar Contacto
          </Typography>

          <form onSubmit={handleSubmit(handleChange)}>
            <TextField
              id="name"
              label="Nombre"
              variant="outlined"
              sx={{ marginTop: 2 }}
              {...register("name", {
                required: "Por favor digite el nombre",
                pattern: {
                  value: /^[a-zA-Z\s]*$/,
                  message: "Ingrese un nombre válido",
                },
              })}
            />
            <ErrorMessage errors={errors} name="name" as="p" />

            <TextField
              id="lastName"
              label="Apellido"
              variant="outlined"
              sx={{ marginTop: 2 }}
              {...register("lastName", {
                required: "Por favor digite el apellido",
                pattern: {
                  value: /^[a-zA-Z\s]*$/,
                  message: "Ingrese un apellido válido",
                },
              })}
            />
            <ErrorMessage errors={errors} name="lastName" as="p" />
            <TextField
              id="phone"
              label="Telefono"
              variant="outlined"
              sx={{ marginTop: 2 }}
              {...register("phone", {
                required: "Por favor digite el número",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Ingrese un número de teléfono válido",
                },
              })}
            />
            <ErrorMessage errors={errors} name="phone" as="p" />
            <Button variant="contained" sx={{ marginTop: 2 }} type="submit">
              Agregar Contacto
            </Button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
