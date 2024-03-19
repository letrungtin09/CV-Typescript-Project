import { deleteData } from "../models/cvModel";

(async function deleteCV() {
  let queryString = window.location.search;
  let getId = new URLSearchParams(queryString);

  let idPD = getId.get("id");
  try {
    const deleteUser = deleteData("http://localhost:3000/user", idPD);
    deleteUser.then((res) => {
      window.location.href = "index.html";
    });
  } catch (error) {
    console.error(error);
  }
})();
