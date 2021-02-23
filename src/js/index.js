
const dado = document.getElementById('lanzar');
const tablaResult = document.getElementById('results')
let contador = 1;

const dados=["/dado1.78fa86d1.png","/dado2.683e6ac9.png","/dado3.2a8bdebe.png","/dado4.0b4de1d4.png","/dado5.3fb6e328.png","/dado6.a3cab49e.png"]


dado.addEventListener('click',()=>{
    const fragment = document.createDocumentFragment();
    const colunm = document.createElement('tr');
    let rows;
    for(x =1; x<=2;x++){
        const resultNumber = lanzarDado();
        printResult(resultNumber,x);
        rows = printHistory(resultNumber);
        colunm.append(rows);    
    }

    fragment.append(colunm);
    tablaResult.appendChild(fragment);    
});

const lanzarDado = () =>(Math.floor((Math.random()*6) + 1))

const printResult = (number,x) => {
    const result = document.getElementById(`number${x.toString()}`);
    result.setAttribute('src',dados[(number-1)])
    
    result.setAttribute('src','./assets/dado1.png')
        
}

const printHistory = (content) =>{
    const results = document.createElement('td');
    results.textContent = content
    console.log(results);
    return results 

}

