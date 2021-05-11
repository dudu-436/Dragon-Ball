const url = 'http://localhost:3000/'

// selecting items
const buttonSearch = document.getElementById('botao')
const inputSearch = document.getElementById('pesquisar')
const main = document.getElementById('main')
const persoImg = document.getElementById('image')
const testediv = document.getElementById('teste')
// 

// "New Page"
const desc = document.getElementById('description')
const img  = document.getElementById('img') 
// 

async function get() {
  const getUrl = await fetch('http://localhost:3000')
  const data = await getUrl.json()
  console.log(data)
  search(data)
  convert(data)
}

function search(dado) {
  for (var i = 0; i < dado.length; i++) {
    if (dado[i].nome === inputSearch.value) {

      inputSearch.value = ''
      main.innerHTML = ''



      // const convertJson = JSON.stringify(dado[i].descrição)
      // const formatedJson = convertJson.replace('zp', '<br>')
      // desc.innerHTML = formatedJson

      convertDatas(dado[i].descrição)
      img.src = dado[i].imagem
    }
  }
}

function convertDatas(data) {
  const convert = JSON.stringify(data)
  const formatedJson = convert.replace('zp', '<br>')
  desc.innerHTML = formatedJson
}


buttonSearch.addEventListener('click', get)