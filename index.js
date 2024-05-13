let offset = 0;
const sliderLine = document.querySelector(".slider-line");
const btn = document.querySelector(".btn");
const details = document.querySelectorAll(".details");
const seeMore = document.querySelector(".see_more");
const modal2 = document.querySelector(".modal2");
const closeModal = document.querySelector(".x");

document.querySelector(".arrow_right").addEventListener("click", function () {
  offset += 1246;
  if (offset > 1246) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
});
document.querySelector(".arrow_left").addEventListener("click", function () {
  offset -= 1246;
  if (offset < 0) {
    offset = 1246;
  }
  sliderLine.style.left = -offset + "px";
});

btn.addEventListener("click", () => {
  window.scrollTo({
    top: 780,
    behavior: "smooth",
  });
});
details.forEach((item) => {
  item.addEventListener("click", () => {
    window.scrollTo({
      top: document.body.scrollHeight - 1,
      behavior: "smooth",
    });
    setTimeout(() => {
      const modal = document.createElement("div");
      modal.textContent =
        "Для подробной информации оставтье пожалуйста заявку.Мы обязательно свяжемся с вами!";
      modal.classList.add("modalWindow");
      document.body.append(modal);

      const closeButton = document.createElement("button");
      closeButton.textContent = "Закрыть";
      closeButton.classList.add("closeButton");
      modal.appendChild(closeButton);

      const existingBackdrop = document.querySelector(".backdrop");
      if (existingBackdrop) {
        existingBackdrop.remove();
      }

      const backdrop = document.createElement("div");
      backdrop.classList.add("backdrop");
      document.body.append(backdrop);
      document.documentElement.style.overflow = "hidden";

      backdrop.addEventListener("click", () => {
        modal.remove();
        backdrop.remove();
        document.documentElement.style.overflow = "";
      });

      closeButton.addEventListener("click", () => {
        modal.remove();
        backdrop.remove();
        document.documentElement.style.overflow = "";
      });
    }, 1000);
  });
});

seeMore.addEventListener("click", () => {
  modal2.style.display = "block";
  document.documentElement.style.overflow = "hidden";

  const existingBackdrop = document.querySelector(".backdrop");
  if (existingBackdrop) {
    existingBackdrop.remove();
  }

  const backdrop = document.createElement("div");
  backdrop.classList.add("backdrop");
  document.body.append(backdrop);
  document.documentElement.style.overflow = "hidden";

  backdrop.addEventListener("click", () => {
    modal2.style.display = "none";
    backdrop.remove();
    document.documentElement.style.overflow = "";
  });
});

closeModal.addEventListener("click", () => {
  modal2.style.display = "none";
  document.documentElement.style.overflow = "";

  const existingBackdrop = document.querySelector(".backdrop");
  if (existingBackdrop) {
    existingBackdrop.remove();
  }
});
