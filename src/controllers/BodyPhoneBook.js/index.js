// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

const BodyPhoneBookController = (props) => {
  const [openModal, setOpenModal] = useState(false);
  const handleOpen = () => setOpenModal(true);
  const handleClose = () => setOpenModal(false);
  const [contacts, setContacts] = useState([]);
  const [textSearch, setTextSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    if (textSearch.length >= 3) {
      setFiltered(
        contacts.filter(
          (contact) =>
            (contact.name + " " + contact.lastName)
              .toLowerCase()
              .includes(textSearch.toLowerCase()) ||
            contact.phone.toLowerCase().includes(textSearch.toLowerCase())
        )
      );
    } else if (textSearch.length <= 3) {
      setFiltered([]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [textSearch]);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ defaultValues: { name: "", lastName: "", phone: "" } });

  const handleChange = (data) => {
    contacts.push(data);
    setContacts(contacts);
    reset();
  };

  const handleFilter = (e) => {
    setTextSearch(e.target.value);
  };

  return {
    openModal,
    handleOpen,
    handleClose,
    handleChange,
    register,
    handleSubmit,
    contacts,
    reset,
    errors,
    setTextSearch,
    handleFilter,
    filtered,
  };
};
export default BodyPhoneBookController;
