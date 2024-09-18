import { EMAILJS_ID, EMAILJS_TEMPLATE_ID } from "./keys.js";

async function sendMail() {
  let name = document.getElementById("wpforms-186-field_0").value;
  let email = document.getElementById("wpforms-186-field_7").value;
  let phone = document.getElementById("wpforms-186-field_8").value;
  let description = document.getElementById("wpforms-186-field_5").value;
  let message = document.getElementById("wpforms-186-field_2").value;

  if (
    isEmpty(name) ||
    isEmpty(email) ||
    isEmpty(phone) ||
    isEmpty(description) ||
    isEmpty(message)
  ) {
    alert("Please enter all the fields");
    return;
  }

  let params = {
    name: name,
    email: email,
    phone: phone,
    subject: "Email request from Pawzzz.in from " + name,
    message: message,
    description: description,
    from_email: email,
  };

  try {
    await emailjs.send(EMAILJS_ID, EMAILJS_TEMPLATE_ID, params);
    console.log("Email sent successfully");
  } catch (e) {
    console.error("Failed to send email", e);
  }finally {
    alert("Email sent successfully!");
  }
}

function isEmpty(str) {
  if (str == null || str == "") {
    return true;
  }
  return false;
}