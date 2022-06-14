const fs = require('fs');

const dadosDoArquivo = ` Jey Godoy \n Atv. Estartando Devs \n 14/06/2022`

const writeFileAsync = (fileName, content) =>{
    fs.writeFile(`${fileName}.txt`, content, err => {
        if(err){
            throw new err
        }
    })
}

const writeFileSync = (fileName, content) =>{
    fs.writeFileSync(`${fileName}.txt`, content, err => {
        if(err){
            throw new err
        }
    })
}

for(i=1; i<= 5; i++){
    writeFileAsync(`${i}_txt_async`, dadosDoArquivo)
    writeFileSync(`${i}_txt_sync`, dadosDoArquivo)
}