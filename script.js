const btnShorten = document.getElementById('btn-shorten')
btnShorten.addEventListener('click',short)

shortURL = document.getElementById('result');
qrImage = document.getElementById('qrImage')
let qrAPI = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data='
let imageBox = document.getElementById('imageBox')
imageBox.style.display = 'none'

async function short(){
    let url = document.getElementById('url').value
    const result = await fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
    const data = await result.json();
    console.log(data)

    if(data.ok == true){
        shortURL.value = data.result.short_link2;
        imageBox.style.display = 'block'
        qrImage.src = qrAPI + url + '&color=3498db'
    }
    else{
        alert("Sorry cant shorten the link")
    }

}


//copy function
const btnCopy = document.getElementById('btn-copy')
btnCopy.addEventListener('click',copyFn)

function copyFn(){
    const url = document.getElementById('result').value;
    copyToClipboard(url);
}
function copyToClipboard(text) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
}

