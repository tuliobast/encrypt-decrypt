// funcion para encritar el texto
function encrypt() {
  let text = document.getElementById("text-in").value;
  let vocales = /[aeiou]/g;
    const encryptionKeys = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
  };
  let result = text.replace(vocales, match => encryptionKeys[match]);
  removeBackgroundImage();
  createBtnCopy();
  return document.getElementById("text-out").innerHTML= result;
}

// funcion para desencritar el texto
function decrypt() {
  let text = document.getElementById("text-in").value;
  const desencryptionKeys = {
    'enter': 'e',
    'imes': 'i',
    'ai': 'a',
    'ober': 'o',
    'ufat' :'u'
  };
  let result = text.replace(/enter|imes|ai|ober|ufat/g, match => desencryptionKeys[match]);
  removeBackgroundImage();
  createBtnCopy();
  return document.getElementById("text-out").innerHTML= result;
}

// funcion para eliminar imegen del textarea
function removeBackgroundImage() {
  document.getElementById('text-out').style.backgroundImage = 'none';
  let removeP = document.querySelector('.no-find');
  if (removeP){
    removeP.remove()
  }  
}

// funcion para crear el boton copiar
function createBtnCopy(){ 
  removeBtnCopy(); // se llama a la funcion removeBtnCopy para no replicar el boton copiar
  let btnCopy = document.createElement('button');
  btnCopy.setAttribute('class', 'btn copy');
  btnCopy.innerText = 'Copiar';
  btnCopy.onclick = function() {
    copiar()
  };
  document.querySelector(".text-out").appendChild(btnCopy);
}

// funcion para eliminar el boton copiar
function removeBtnCopy() {
  let btnCopy = document.querySelector('.copy');
  if (btnCopy){
    btnCopy.remove()
  }
}

function copiar(){
  let text = document.getElementById("text-out").innerHTML;
  navigator.clipboard.writeText(text);
  alert('Texto copiado al portapapeles!');
}