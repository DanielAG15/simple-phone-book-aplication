import React from "react";

import SearchAppBar from "../components/SearchAppBar";
import BodyPhoneBook from "../components/BodyPhoneBook";
import BodyPhoneBookController from "../controllers/BodyPhoneBook.js";
import { ToastContainer } from "react-toastify";
const App = () => {
  const {
    handleFilter,
    handleOpen,
    handleClose,
    openModal,
    handleSubmit,
    register,
    handleChange,
    contacts,
    errors,
    filtered,
  } = BodyPhoneBookController();
  return (
    <>
      <ToastContainer />
      <SearchAppBar handleFilter={handleFilter} />
      <BodyPhoneBook
        handleOpen={handleOpen}
        handleClose={handleClose}
        openModal={openModal}
        handleSubmit={handleSubmit}
        register={register}
        handleChange={handleChange}
        contacts={contacts}
        errors={errors}
        filtered={filtered}
      />
    </>
  );
};

export default App;
