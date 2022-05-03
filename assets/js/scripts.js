//External imports
const url = 'https://thatcopy.pw/catapi/rest/';

//Internal imports
const catBtn = document.getElementById('change-cat')


//Consulta API = FETCH
const apiGetCats = async () => {
    try {
        const data = await fetch(url);
        const response = await data.json();
        return response.webpurl

    } catch (error) {
        console.log(error.menssage)
    }
}

//atribuir imagem -> api
const loadlImg = async () =>{
    const catImg = document.getElementById('cat');
    catImg.src = await apiGetCats()
}

//Atribuindo a função ao evento
catBtn.addEventListener('click' , loadlImg);

//carregar ao abrir a pagina
loadlImg()