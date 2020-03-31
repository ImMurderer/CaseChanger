const input = document.querySelector("#entrada");
const buttons = document.querySelectorAll("button");
const availableCases = [
  "uppercase",
  "lowercase",
  "titlecase",
  "camelcase",
  "starcase"
];
const changeCase = function(id) {
  switch (id) {
    case "uppercase":
      input.value = input.value.toUpperCase();
      break;
    case "lowercase":
      input.value = input.value.toLowerCase();
      break;
    case "titlecase":
      input.value = input.value.replace(/\b\w/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      });
      break;
    case "camelcase":
        let text = input.value.replace(/\b\w/g, function(txt) {
            return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
          });
        text = text.split(" ").join("");
        text = text.charAt(0).toLowerCase() + text.substring(1);
        input.value = text;
      break;
    case "starcase":
        input.value = input.value.replace(/[^\s\.\,\!\?\:\@\"\'\-]/g, "*")
      break;
  }
};
buttons.forEach(i => {
  if (availableCases.indexOf(i.id) >= 0) {
    i.addEventListener("click", e => changeCase(e.target.id));
  }
});
document.querySelector("#copy").addEventListener("click", (e) => {
    input.select();
    input.setSelectionRange(0, 99999);
    document.execCommand("copy");
    alert("Copied to clipboard!");
})
