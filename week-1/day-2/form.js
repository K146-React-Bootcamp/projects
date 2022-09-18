const form = document.querySelector("#contact");
if (form) {
  form.addEventListener("submit", function (event) {
    event.preventDefault();
    const contactForm = event.currentTarget
    const formData = new FormData(contactForm);
    const name = formData.get("name");
    const phone = formData.get("phone");
    const message = formData.get("message");
    console.log({ name, phone, message });
    // BE ye formu gönderdim
    // response eğer true
    const response = true;
    if (response) {
      contactForm.reset();
      alert("Talebiniz başarıyla alındı")
    }
  })
}