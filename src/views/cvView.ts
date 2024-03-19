import { getData, getDataId } from "../models/cvModel";

async function renderOptions() {
  try {
    const response = await getData("http://localhost:3000/user");
    const listData = response.data;
    for (let i = 0; i < listData.length; i++) {
      let html = `<option value="${listData[i].id}">${listData[i].fullName}</option>`;
      document
        .querySelector("#selectCV")!
        .insertAdjacentHTML("beforeend", html);
    }
  } catch (error) {
    console.error(error);
  }
}

async function renderCV() {
  // Chọn CV và show thông tin CV đã chọn
  let getSelect = document.querySelector("#selectCV")! as HTMLSelectElement;
  let getCV = document.querySelector(".infoCV")! as HTMLElement;
  let showBtnAdd = document.querySelector(".show-btnAdd")! as HTMLElement;
  getSelect.addEventListener("change", () => {
    let selectedOpt = getSelect.options[getSelect.selectedIndex];
    let getValue = parseInt(selectedOpt.value);
    if (getValue == 0) {
      getCV.style.display = "none";
      showBtnAdd.style.display = "flex";
    } else {
      document.querySelector(".infoCV__avatar")!.innerHTML = "";
      document.querySelector("#contact-element")!.innerHTML = "";
      document.querySelector("#fullname-element")!.innerHTML = "";
      document.querySelector(".infoCV__flexBtn")!.innerHTML = "";
      getDataId(`http://localhost:3000/user`, getValue).then((res) => {
        let getAvt = `<img src="./public/images/${res.data.avatar}" alt="">`;
        let getContact = `<li><a href=""><i class="fa fa-phone"></i> ${res.data.phoneNumber}</a></li>
                <li><a href=""><i class="fa fa-envelope"></i> ${res.data.email}</a></li>
                <li><a href=""><i class="fa-solid fa-globe"></i> ${res.data.website}</a></li>
                <li><a href=""><i class="fa-solid fa-house"></i> ${res.data.address}</a></li>`;
        let getName = `<h1>${res.data.fullName}</h1>
                <p>${res.data.career}</p>`;
        let getBtn = `<a class="btn-cv btn-add" href="addCV.html">Thêm CV mới</a>
        <a href="updateCV.html?id=${res.data.id}" class="btn-cv btn-edit" id="editCV" >Cập nhật CV</a>
        <!-- Button trigger modal -->
        <button type="button" class="btn-cv btn-delete" data-bs-toggle="modal" data-bs-target="#exampleModal">
          Xóa CV
        </button>

        <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">Xác nhận xóa CV</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                Bạn chắn chắc muốn xóa CV của <span class="fw-bold">"${res.data.fullName}"</span> ?
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Hủy</button>
                <button type="button" class="btn-deleteModal"><a href="deleteCV.html?id=${res.data.id}" class="btn-cvModal btn-delete" id="deleteInfo">Xóa</a></button>
              </div>
            </div>
          </div>
        </div>`;
        document
          .querySelector(".infoCV__avatar")!
          .insertAdjacentHTML("beforeend", getAvt);
        document
          .querySelector("#contact-element")!
          .insertAdjacentHTML("beforeend", getContact);
        document
          .querySelector("#fullname-element")!
          .insertAdjacentHTML("beforeend", getName);
        document
          .querySelector(".infoCV__flexBtn")!
          .insertAdjacentHTML("beforeend", getBtn);
        showBtnAdd.style.display = "none";
        getCV.style.display = "block";
      });
    }
  });
}

export { renderOptions, renderCV };
