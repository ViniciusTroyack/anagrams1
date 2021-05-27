const button = document.getElementById("findButton");

button.addEventListener("click", function () {
  let typedText = document.getElementById("input").value;
  
  const documento = document.getElementById("resultado");
  documento.innerHTML = " "
  const novaDivResultado = document.createElement("div");
  novaDivResultado.textContent = JSON.stringify(getAnagramsOf(typedText));
  documento.appendChild(novaDivResultado);
});

function alphabetize(a) {
  return a.toLowerCase().split("").sort().join("").trim();
}

const getAnagramsOf = (text) => {
  let palavra = alphabetize(text);
  let output = [];
  palavras.forEach(function (item) {
    if (palavra === alphabetize(item)){
     output.push(item);
  }});
  return output;
};
