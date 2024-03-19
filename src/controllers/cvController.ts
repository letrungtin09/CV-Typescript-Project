import { renderCV, renderOptions } from "../views/cvView";

async function showCV() {
  await renderOptions();
  await renderCV();
}

export { showCV };
