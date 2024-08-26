function sendMail() {
  // Capture form data
  let name = document.getElementById("wpforms-186-field_0").value;
  let email = document.getElementById("wpforms-186-field_7").value;
  let phone = document.getElementById("wpforms-186-field_8").value;
  let description = document.getElementById("wpforms-186-field_5").value;
  let message = document.getElementById("wpforms-186-field_2").value;

  // Prepare parameters
  let params = {
    name: name,
    email: email,
    phone: phone,
    subject: "This is my subject",
    message: message,
    description: description,
    from_email: email,
  };

  // Send email
  emailjs
    .send("service_ni9gews", "template_pf433zu", params)
    .then((e) => alert("Email sent successfully!"))
    .catch((e) => console.log("Failed to send email", e));
}
