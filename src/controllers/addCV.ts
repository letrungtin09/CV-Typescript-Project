import { postData } from "../models/cvModel";
import { User } from "../module/cvModule";
import { validateFormAdd } from "../module/validationAdd";

(async function addCV() {
  try {
    let getForm = document.querySelector("#myForm")! as HTMLFormElement;
    getForm.addEventListener("submit", (e) => {
      e.preventDefault();
      let getName = document.getElementById("fullName")! as HTMLInputElement;
      let getCareer = document.getElementById("career")! as HTMLInputElement;
      let getPhone = document.getElementById(
        "phoneNumber"
      )! as HTMLInputElement;
      let getEmail = document.getElementById("email")! as HTMLInputElement;
      let getWeb = document.getElementById("website")! as HTMLInputElement;
      let getAddress = document.getElementById("address")! as HTMLInputElement;
      let getImg = document.getElementById("urlImg")! as HTMLInputElement;
      let urlImg = getImg.value.split("\\").pop();

      let newUser = new User(
        getName.value,
        urlImg!,
        getCareer.value,
        getPhone.value,
        getEmail.value,
        getWeb.value,
        getAddress.value
      );
      if (validateFormAdd()) {
        e.preventDefault();
        let addData = postData("http://localhost:3000/user", newUser);
        addData.then((res) => {
          window.location.href = "index.html";
        });
      }
    });
  } catch (err) {
    console.log(err);
  }
})();
