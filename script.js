function handleSubmit(event) {
  event.preventDefault();

  const status = document.getElementById("form-status");
  if (!status) return;

  status.textContent =
    "This demo form does not send messages yet. You can connect it to a real service later.";
}

document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});


