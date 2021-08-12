import React from "react";
import ContactForm from "../../components/contactForm/ContactForm";
import Filter from "../../components/filter/Filter";
import ContactList from "../../components/contactList/ContactList";

const Contacts = () => {
  return (
    <div className="container">
      <h2>Phonebook:</h2>
      <ContactForm />

      <h2>Contacts:</h2>
      <Filter />

      <ContactList />
    </div>
  );
};

export default Contacts;
