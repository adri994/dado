import imgDices from "../assets/*.png"

const dice = document.getElementById('lanzar');
const tableResult = document.getElementById('results')

//Evento de escucha del clic
dice.addEventListener('click',()=>{
    const fragment = document.createDocumentFragment();
    const colunm = document.createElement('tr');
    let rows;
    for(let x = 1 ; x<=2;x++){
        const resultNumber = getDice();
        printResult(resultNumber,x);
        rows = printHistory(resultNumber);
        colunm.append(rows);    
    }

    fragment.append(colunm);
    tableResult.appendChild(fragment);    
});

//Obtener numero random
const getDice = () =>(Math.floor((Math.random()*6) + 1))

//Colocar imagen del dado
const printResult = (number,x) => {
    const result = document.getElementById(`number${x.toString()}`);
    result.setAttribute('src',imgDices[`dado${number.toString()}`])
           
}

//Imprimir resultado en la tabla
const printHistory = (content) =>{
    const results = document.createElement('td');
    results.textContent = content
    console.log(results);
    return results 

}

