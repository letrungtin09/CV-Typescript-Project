import { putData } from "../models/cvModel";
import { renderFormUpdate } from "../views/updateView";
import { validateFormUpdate } from "../module/validationUpdate";

(async function updateCV() {
  let queryString = window.location.search;
  let getId = new URLSearchParams(queryString);
  let idPD = getId.get("id");
  try {
    await renderFormUpdate(idPD);
    let btnUpdate = document.querySelector("#btn-update")! as HTMLButtonElement;
    btnUpdate.addEventListener("click", (e) => {
      e.preventDefault();
      let getFullName = document.getElementById(
        "fullName"
      )! as HTMLInputElement;
      let getCareer = document.getElementById("career")! as HTMLInputElement;
      let getPhoneNumber = document.getElementById(
        "phoneNumber"
      )! as HTMLInputElement;
      let getEmail = document.getElementById("email")! as HTMLInputElement;
      let getWebsite = document.getElementById("website")! as HTMLInputElement;
      let getAddress = document.getElementById("address")! as HTMLInputElement;
      let getImg = document.getElementById("urlImg")! as HTMLInputElement;
      let getImgOld = document.getElementById("urlImgOld")! as HTMLInputElement;
      const file = getImg.files?.[0];
      let newUser = {};
      if (file != undefined) {
        let urlImg = getImg.value.split("\\").pop();
        newUser = {
          fullName: getFullName.value,
          career: getCareer.value,
          avatar: urlImg,
          phoneNumber: getPhoneNumber.value,
          email: getEmail.value,
          website: getWebsite.value,
          address: getAddress.value,
        };
      } else {
        newUser = {
          fullName: getFullName.value,
          career: getCareer.value,
          avatar: getImgOld.value,
          phoneNumber: getPhoneNumber.value,
          email: getEmail.value,
          website: getWebsite.value,
          address: getAddress.value,
        };
      }
      if (validateFormUpdate()) {
        e.preventDefault();
        let putUser = putData("http://localhost:3000/user", idPD, newUser);
        putUser.then((res) => {
          window.location.href = "index.html";
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
})();
