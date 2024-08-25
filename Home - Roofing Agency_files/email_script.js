function sendMail() {
  let params = {
    name: "Swaraj Kumar Singh",
    email: "sswaraj169@gmail.com",
    phone: "7349553027",
    subject: "this is my subject",
    message: "this is my message",
    description: "this is my description",
    from_email: "sswaraj169@gmail.com",
  };

  emailjs
    .send("service_ni9gews", "template_pf433zu", params)
    .then((e) => alert("hello"))
    .catch((e) => console.log(e));
}
