let inicio = 0;
init(inicio)

const add = (el) => el.currentTarget.classList.add('active');
const remove = (elements) => elements.forEach(element => element.classList.remove('active'));

document.querySelectorAll('.menu li')
.forEach((element) => element.addEventListener('click', (e) =>{
    const elementActive = document.querySelectorAll('.menu li.active')
    remove(elementActive); 
    add(e);
    inicio = 1;
    init(inicio);
}))

function init(inicio){
    if(inicio === 0){
        carregarDados(0,0);
    }
    else{
        function itemMenu(){
            let elementActive = document.querySelector('.menu li.active')
            return elementActive.getAttribute('number');
        }; 
        function itemCaixa(){ 
            let isBox = document.querySelector('.side-right--types .box.active')
            let bo;
            switch(isBox.id){
                case 'overview':
                    bo = 0;
                    break
                case 'internal':
                    bo = 1;
                    break
                case 'surface':
                    bo = 2;
                    break
            } 
            return bo
        };  
      carregarDados(itemMenu(), itemCaixa());
    }
}

function carregarDados(item, box){
    const namePlanet =  `${data[item].name}`;
    const rotationPlanet = `${data[item].generalData.rotationTime}`;
    const revolutionPlanet =  `${data[item].generalData.revolutionTime}`;
    const radiusPlanet = `${data[item].generalData.radius}`;
    const averagePlanet = `${data[item].generalData.averageTemp}`;
    const source = `${data[item].source}`;
    const descriptionPlanet =  `${data[item].type[box].description}`
    const imagePlanet =  `${data[item].type[box].urls}`
    
    document.querySelector('.root').innerHTML = `
    <div class="container">
        <div class="side-left">
            <img src="${imagePlanet}" alt="">
        </div>
        <div class="side-right">
            <div class="side-rigth-text">
                <h1 class="name-planet">${namePlanet}</h1>
                <p class="description-planet">${descriptionPlanet}</p>
                <span>Fonte: <a href="${source}" target="_blank" class="wiki">Wikipedia</a></span>
            </div>
            <div class="side-right--types">
                <div class="box" id="overview">VISÃO GERAL</div>
                <div class="box" id="internal">ESTRUTURA</div>
                <div class="box" id="surface">GEOLOGIA</div>
            </div>
        </div>
        <div class="side-down">
            <div class="box">
                <h4 class="rotation">TEMPO DE ROTAÇÃO</h4>
                <p class="rotation-days">${rotationPlanet}</p>
            </div>
            <div class="box">
                <h4 class="revolution-time">TEMPO DE REVOLUÇÃO</h4>
                <p class="revolution-days">${revolutionPlanet}</p>
            </div>
            <div class="box">
                <h4 class="radius">RAIO</h4>
                <p class="radius-km">${radiusPlanet}</p>
            </div>
            <div class="box">
                <h4 class="average">TEMPERATURA MÉDIA.</h4>
                <p class="average-temp">${averagePlanet}</p>
            </div>
        </div>
    </div>`
    document.querySelectorAll('.side-right--types .box')
    .forEach((boxes) => boxes.addEventListener("click", (b) => {
        let boxActive = document.querySelectorAll('.side-right--types .box.active')
        remove(boxActive)
        add(b)
        init(1)
    }))
    document.querySelectorAll('.side-right--types .box')[box].classList.add('active')
}