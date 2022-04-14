/* 
container.innerHTML+= `
                
          
`; 
   const container = document.querySelector('.root');
        const namePlanet =  `${data[item].name}`;
        const rotationPlanet = `${data[item].generalData.rotationTime}`;
        const revolutionPlanet =  `${data[item].generalData.revolutionTime}`;
        const radiusPlanet = `${data[item].generalData.radius}`;
        const averagePlanet = `${data[item].generalData.averageTemp}`;
        const source = `${data[item].source}`;
        const descriptionPlanet   =  `${data[item].type[box].description}`
        const imagePlanet =  `${data[item].type[box].urls}`           
            
<div class="container">
    <div class="side-left">
        <img src="" alt="">
    </div>
    <div class="side-right">
        <div class="side-rigth-text">
            <h1 class="name-planet"></h1>
            <p class="description-planet"></p>
            <span>Fonte: <a href="" target="_blank" class="wiki">Wikipedia</a></span>
        </div>
        <div class="side-right--types">
            <div class="box active" id="overview">VISÃO GERAL</div>
            <div class="box" id="internal" >ESTRUTURA</div>
            <div class="box" id="surface">GEOLOGIA</div>
        </div>
    </div>
    <div class="side-down">
        <div class="box">
            <h4 class="rotation">TEMPO DE ROTAÇÃO</h4>
            <p class="rotation-days"></p>
        </div>
        <div class="box">
            <h4 class="revolution-time">TEMPO DE REVOLUÇÃO</h4>
            <p class="revolution-days"></p>
        </div>
        <div class="box">
            <h4 class="radius">RAIO</h4>
            <p class="radius-km"></p>
        </div>
        <div class="box">
            <h4 class="average">TEMPERATURA MÉDIA.</h4>
            <p class="average-temp"></p>
        </div>
    </div>
</div>
`
            
            
            
            */