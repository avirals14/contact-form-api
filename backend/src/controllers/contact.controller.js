import ContactModel from "../models/Contact.model.js";

export const submitForm = async (req, res) => {
  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    const contact = await ContactModel.create({ name, email, message });

    return res.status(201).json({
      success: true,
      message: "Contact form submitted successfully",
      contactId: contact._id,
    });
  } catch (error) {
    console.error("Submit Form Error : ", error);
    return res.status(500).json({
      success: false,
      message: "Failed to submit contact form",
    });
  }
};

export const getAllContacts = async (req, res) => {
  try {
    const contacts = await ContactModel.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      message: "Fetched all contacts successfully",
      count: contacts.length,
      contacts,
    });
  } catch (error) {
    console.error("getAllContacts error : ", error);
    return res.status(500).json({
      success: false,
      message: "Failed to fetch All Contacts",
    });
  }
};