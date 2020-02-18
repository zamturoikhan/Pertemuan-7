const fs = require('fs')

fs.readFile('text.txt', 'utf-8', (err, content) => {
    if(err) {
        console.log('eror happened during reading the file')
        return console.log(err)
    }
fs.rename('text.txt', 'Terserah.txt', (err) => {
    if(err) console.log("gagal rename!"+err);
    
    console.log("yeay, berhasil");
})
    
})

console.log('end of the file')