const request = (obj) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener("load", () => {
      if (xhr.status >= 200 && xhr.status <= 300) {
        resolve(xhr.response);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

document.addEventListener("click", (event) => {
  event.preventDefault();
  const el = event.target;
  const tagName = el.tagName.toLowerCase();
  console.log(tagName);

  if (tagName == "a") {
    carregarPagina(el);
  }
});

function carregarPagina(el) {
  const href = el.getAttribute("href");
  request({
    method: "GET",
    url: href,
  })
    .then((res) => {
      carregarConteudo(res);
    })
    .catch((e) => {
      alert(e);
    });
}

function carregarConteudo(res) {
  console.log(res);
  const resultado = document.querySelector(".resultado");
  resultado.innerHTML = res;
}
