import { getDataId } from "../models/cvModel";

async function renderFormUpdate(id: any) {
  try {
    const res = await getDataId("http://localhost:3000/user", id);

    let getFullName = document.getElementById("fullName")! as HTMLInputElement;
    let getCareer = document.getElementById("career")! as HTMLInputElement;
    let getPhoneNumber = document.getElementById(
      "phoneNumber"
    )! as HTMLInputElement;
    let getEmail = document.getElementById("email")! as HTMLInputElement;
    let getWebsite = document.getElementById("website")! as HTMLInputElement;
    let getAddress = document.getElementById("address")! as HTMLInputElement;
    let getImgOld = document.getElementById("urlImgOld")! as HTMLInputElement;

    getFullName.value = res.data.fullName;
    getCareer.value = res.data.career;
    getPhoneNumber.value = res.data.phoneNumber;
    getEmail.value = res.data.email;
    getWebsite.value = res.data.website;
    getAddress.value = res.data.address;
    getImgOld.value = res.data.avatar;
  } catch (error) {
    console.error(error);
  }
}

export { renderFormUpdate };
