let filename = document.getElementById('file-chooser').value;
//usado para llamar al input file
document.getElementById('btn-loadfile').addEventListener("click", function () {
    document.getElementById('file-chooser').click();
});

document.getElementById('file-chooser').addEventListener('change', function (e) {
    //clearNLElems();
    //use the file here
    //console.log(document.getElementById('file-chooser').value)
    var fileContent = document.getElementsByClassName('file-content')[0];
    var files = e.target.files;
    var f = files[0];
    var reader = new FileReader();
    console.log("file = " + f)
    filename = f.path;
    console.log("filename = " + filename)
    reader.onload = function (e) {
        //console.log(e.target.result);
        fileContent.value = e.target.result + ''
        //countLines()
    };
    reader.readAsBinaryString(f);
});


//usada para guardar los cambios al archivo
document.getElementById('btn-savefile').addEventListener('click', function () {
    console.log(filename)
    if (filename) {
        
        var fileContent = document.getElementsByClassName('file-content')[0].value;
        //console.log(fileContent)
        fs.writeFile(filename, fileContent, (err) => {
            if (err) {
                throw err;
            }
        })
        alert("guardado")
    } else {
        document.getElementById('file-chooser').click();
    }
})

