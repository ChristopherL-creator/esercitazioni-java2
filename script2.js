//  creare pag web con titolo "simple else example" in cui 
//  utente sceglierà tra 4 opzioni, e ogni scelt aprodurrà 
//  diverso; con switch; 

const request = prompt('choose option'); 

switch (request){ 
    case 'option1': 
        alert('option1'); 
        break;
    case 'option2': 
        alert('option2'); 
        break
    case 'option3': 
        alert('option3'); 
        break
    case 'option4': 
        alert('option4'); 
        break
    default: 
        alert('invalid input'); 
        break
}
