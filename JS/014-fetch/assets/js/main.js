const request = obj => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(obj.method, obj.url, true);
    xhr.send();

    xhr.addEventListener('load', () => {
      if(xhr.status >= 200 && xhr.status < 300) {
        resolve(xhr.responseText);
      } else {
        reject(xhr.statusText);
      }
    });
  });
};

document.addEventListener('click', e => {
  const el = e.target;
  const tag = el.tagName.toLowerCase();
  const attribute = el.getAttribute('href')

  if (tag === 'a') {
    e.preventDefault();
    carregaPagina(attribute);
  }
});

function carregaPagina(href) {

  fetch(href).then((pageResponse)=>{
    if(pageResponse.status !== 200) throw new Error("Página não encontrada!")
    return pageResponse.text()
  }).then((HTMLresponse)=>{
    carregaResultado(HTMLresponse)
  }).catch(e=>{
    alert(e)
  })
  
}

function carregaResultado(response) {
  const resultado = document.querySelector('.resultado');
  resultado.innerHTML = response;
}

fetch('pagina1.html').then((res)=>{
  console.log(res.status)
  return res.text()
}).then((res)=>{
  console.log(res)
})