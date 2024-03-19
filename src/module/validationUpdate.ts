function validateFormUpdate() {
  let getName = document.querySelector("#fullName") as HTMLInputElement;
  let getCareer = document.querySelector("#career") as HTMLInputElement;
  let getPhoneNumber = document.querySelector(
    "#phoneNumber"
  ) as HTMLInputElement;
  let getAddress = document.querySelector("#address") as HTMLInputElement;
  let getWebsite = document.querySelector("#website") as HTMLInputElement;
  let getEmail = document.querySelector("#email") as HTMLInputElement;

  let showErr1 = document.querySelector("#error1") as HTMLElement;
  let showErr3 = document.querySelector("#error3") as HTMLElement;
  let showErr4 = document.querySelector("#error4") as HTMLElement;
  let showErr5 = document.querySelector("#error5") as HTMLElement;
  let showErr6 = document.querySelector("#error6") as HTMLElement;
  let showErr7 = document.querySelector("#error7") as HTMLElement;

  let err1: string = "";
  let err3: string = "";
  let err4: string = "";
  let err5: string = "";
  let err6: string = "";
  let err7: string = "";
  let check = true;

  // Kiểm tra lỗi nhập họ và tên
  if (getName.value.length == 0) {
    getName.classList.remove("showTrue");
    getName.classList.add("showFalse");
    err1 = "Nhập vào họ và tên !";
    check = false;
    getName.focus();
  } else if (getName.value.length < 5 || getName.value.length > 30) {
    getName.classList.remove("showTrue");
    getName.classList.add("showFalse");
    err1 = "Nhập họ và tên tối thiểu 5 ký tự và tối đa 30 ký tự !";
    check = false;
    getName.focus();
  } else if (isNaN(+getName.value) == false) {
    getName.classList.remove("showTrue");
    getName.classList.add("showFalse");
    err1 = "Nhập họ và tên bằng ký tự chữ !";
    check = false;
    getName.focus();
  } else {
    getName.classList.add("showTrue");
    getName.classList.remove("showFalse");
    showErr1.innerHTML = "";
  }
  if (err1 != "") {
    showErr1.innerHTML = err1;
  }

  // Kiểm lỗi nhập chuyên ngành
  if (getCareer.value.length == 0) {
    getCareer.classList.remove("showTrue");
    getCareer.classList.add("showFalse");
    err3 = "Nhập vào chuyên ngành học !";
    check = false;
    getCareer.focus();
  } else if (getCareer.value.length < 5 || getCareer.value.length > 30) {
    getCareer.classList.remove("showTrue");
    getCareer.classList.add("showFalse");
    err3 = "Nhập chuyên ngành học tối thiểu 5 ký tự và tối đa 35 ký tự !";
    check = false;
    getCareer.focus();
  } else if (isNaN(+getCareer.value) == false) {
    getCareer.classList.remove("showTrue");
    getCareer.classList.add("showFalse");
    err3 = "Nhập chuyên ngành học bằng ký tự chữ !";
    check = false;
    getCareer.focus();
  } else {
    getCareer.classList.add("showTrue");
    getCareer.classList.remove("showFalse");
    showErr3.innerHTML = "";
  }
  if (err3 != "") {
    showErr3.innerHTML = err3;
  }

  // Kiểm lỗi nhập số điện thoại
  let regexPhoneNumber = /0[1-9][0-9]{8}/;
  if (getPhoneNumber.value.length == 0) {
    getPhoneNumber.classList.remove("showTrue");
    getPhoneNumber.classList.add("showFalse");
    err4 = "Nhập vào số điện thoại !";
    check = false;
    getPhoneNumber.focus();
  } else if (regexPhoneNumber.test(getPhoneNumber.value) == false) {
    getPhoneNumber.classList.remove("showTrue");
    getPhoneNumber.classList.add("showFalse");
    err4 = "Nhập số điện thoại đúng định dạng (VD: 0359842413) !";
    check = false;
    getPhoneNumber.focus();
  } else if (getPhoneNumber.value.length != 10) {
    getPhoneNumber.classList.remove("showTrue");
    getPhoneNumber.classList.add("showFalse");
    err4 = "Nhập số điện thoại đúng 10 ký tự !";
    check = false;
    getPhoneNumber.focus();
  } else {
    getPhoneNumber.classList.add("showTrue");
    getPhoneNumber.classList.remove("showFalse");
    showErr4.innerHTML = "";
  }
  if (err4 != "") {
    showErr4.innerHTML = err4;
  }

  // Kiểm tra lỗi nhập email
  let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  if (getEmail.value.length == 0) {
    getEmail.classList.remove("showTrue");
    getEmail.classList.add("showFalse");
    err5 += "Nhập vào email !";
    check = false;
    getEmail.focus();
    showErr5.innerHTML = err5;
  } else if (regexEmail.test(getEmail.value) == false) {
    getEmail.classList.remove("showTrue");
    getEmail.classList.add("showFalse");
    err5 += "Vui lòng nhập đúng định dạng email (VD: example@gmail.com) !";
    check = false;
    getEmail.focus();
    showErr5.innerHTML = err5;
  } else {
    getEmail.classList.add("showTrue");
    getEmail.classList.remove("showFalse");
    showErr5.innerHTML = "";
  }

  // Kiểm lỗi nhập website
  let regexWebsite = /\w\w\w\.[a-z]+[0-9]*\.(com)/;
  if (getWebsite.value.length == 0) {
    getWebsite.classList.remove("showTrue");
    getWebsite.classList.add("showFalse");
    err6 += "Nhập vào email !";
    check = false;
    getWebsite.focus();
    showErr6.innerHTML = err6;
  } else if (regexWebsite.test(getWebsite.value) == false) {
    getWebsite.classList.remove("showTrue");
    getWebsite.classList.add("showFalse");
    err6 += "Vui lòng nhập đúng định dạng website (VD: www.example.com) !";
    check = false;
    getWebsite.focus();
    showErr6.innerHTML = err6;
  } else {
    getWebsite.classList.add("showTrue");
    getWebsite.classList.remove("showFalse");
    showErr6.innerHTML = "";
  }

  // Kiểm tra lỗi nhập địa chỉ
  if (getAddress.value.length == 0) {
    getAddress.classList.remove("showTrue");
    getAddress.classList.add("showFalse");
    err7 = "Nhập vào địa chỉ !";
    check = false;
    getAddress.focus();
  } else if (getAddress.value.length < 5 || getAddress.value.length > 30) {
    getAddress.classList.remove("showTrue");
    getAddress.classList.add("showFalse");
    err7 = "Nhập địa chỉ tối thiểu 5 ký tự và tối đa 50 ký tự !";
    check = false;
    getAddress.focus();
  } else if (isNaN(+getAddress.value) == false) {
    getAddress.classList.remove("showTrue");
    getAddress.classList.add("showFalse");
    err7 = "Nhập địa chỉ bằng ký tự chữ !";
    check = false;
    getAddress.focus();
  } else {
    getAddress.classList.add("showTrue");
    getAddress.classList.remove("showFalse");
    showErr7.innerHTML = "";
  }
  if (err7 != "") {
    showErr7.innerHTML = err7;
  }

  return check;
}

export { validateFormUpdate };
