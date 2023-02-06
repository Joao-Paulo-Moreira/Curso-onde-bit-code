function createLabel(text, htmlFor) {
  const label = document.createElement("label");
  label.htmlFor = htmlFor;
  label.innerText = text;
  return label;
}

function createInput(
  id,
  value,
  name,
  type = "text",
  placeholder = "Nome da tecnologia"
) {
  const input = document.createElement("input");
  input.id = id;
  input.value = value;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;
  return input;
}

const addTech = document.getElementById("addTech");
const form = document.getElementById("devForm");
const devs = [];
let inputRows = 0;

addTech.addEventListener("click", (ev) => {
   const stackInputs = document.getElementById("stackInputs");
   const newRow = document.createElement("li");
   const rowIndex = inputRows;
   inputRows++;
   newRow.id = `inputRow${rowIndex}`;
   newRow.className = "inputRow";

   const techNameLabel = createLabel("Nome: ", `Tech name: ${rowIndex}`);
   const techNameInput = createInput(`techName${rowIndex}`, null, "techName");

   const expLabel = createLabel("Experiênca:");
   const id1 = `exp-radio${rowIndex}.1`;
   const expRadio = createInput(id1, "0-2 anos", `techExp${rowIndex}`, "radio");
   const expLabel1 = createLabel("0-2 anos", id1);

   const id2 = `exp-radio${rowIndex}.2`;
   const expRadio2 = createInput(id2, "2-5 anos", `techExp${rowIndex}`, "radio");
   const expLabel2 = createLabel("2-5 anos", id2);

   const id3 = `exp-radio${rowIndex}.3`;
   const expRadio3 = createInput(id3, "+5 anos", `techExp${rowIndex}`, "radio");
   const expLabel3 = createLabel("+5 anos", id3);

   const removeRowBtn = document.createElement("button");
   removeRowBtn.type = "button";
   removeRowBtn.innerText = "Remover Linha";
   removeRowBtn.addEventListener("click", () => {
      stackInputs.removeChild(newRow);
   });

   newRow.append(
      techNameLabel,
      techNameInput,
      expLabel,
      expRadio,
      expLabel1,
      expRadio2,
      expLabel2,
      expRadio3,
      expLabel3,
      removeRowBtn
   );

   stackInputs.appendChild(newRow);
});

form.addEventListener("submit", (ev) => {
   ev.preventDefault();

   const fullnameInput = document.getElementById("fullName");
   const inputRows = document.querySelectorAll(".inputRow");
   const technologies = [];

   inputRows.forEach((row) => {
      const techName = document.querySelector(
      `#${row.id}input[name="techName"]`
      )/* .value */;
      const techExp = document.querySelector(
      `#${row.id}input[type="radio"]:checked`
      )/* .value */;
      technologies.push({ name: techName, exp: techExp });
   });

   const newDev = { fullname: fullnameInput, technologies };
   devs.push(newDev);
   alert("Dev cadastrado");

   /* fullnameInput.value = ""; */
   inputRows.forEach((row) => {
      row.remove;
   });

   console.log(devs);
});
