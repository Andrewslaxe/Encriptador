const dictionary = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" }
let textarea = document.getElementById("myTextarea")
const container = document.getElementById("container")
const resultPhrase = document.querySelector(".encryptedText")
const size = textarea.clientHeight
const width = window.innerWidth
const body = document.querySelector("body")

const resize = () => {
  if (width < 600) {
    textarea = document.getElementById("myTextarea")
    if (size < textarea.scrollHeight) {
      console.log(textarea.scrollHeight, size)
      textarea.style.height = textarea.scrollHeight + "px"
      container.style.height = textarea.scrollHeight + 191 + "px"
    }
  }
}


const encrypt = (phrase, dictionary) => {
  phrase = phrase.split('')
  for (let i in phrase) {
    phrase[i] = dictionary[phrase[i]] || phrase[i]
  }
  return phrase.join('')
}

const decrypt = (phrase, dictionary) => {
  for (let i of Object.keys(dictionary)) {
    phrase = phrase.replaceAll(dictionary[i], i)
  }
  return phrase
}

const copy = () => {
  let copyText = document.querySelector(".encryptedText").innerHTML
  navigator.clipboard.writeText(copyText)
}

const encryptAction = (phrase) => {
  const message = encrypt(phrase, dictionary)
  if (message === '') {
    document.querySelector(".notext").style.display = "block"
    document.querySelector(".inputRequest").style.display = "block"
    document.querySelector(".encryptedText").style.display = "none"
    document.querySelector(".copy").style.display = "none"
  }
  else {
    document.querySelector(".notext").style.display = "none"
    document.querySelector(".inputRequest").style.display = "none"
    document.querySelector(".encryptedText").innerHTML = message
    document.querySelector(".encryptedText").style.display = "block"
    document.querySelector(".copy").style.display = "block"
    document.querySelector('.message img').style.display = "none"
    document.querySelector('.message').style["justify-content"] = "space-between"
  }
}

const decryptAction = (phrase) => {
  const message = decrypt(phrase, dictionary)
  if (message === '') {
    document.querySelector(".notext").style.display = "block"
    document.querySelector(".inputRequest").style.display = "block"
    document.querySelector(".encryptedText").style.display = "none"
    document.querySelector(".copy").style.display = "none"
  }
  else {
    document.querySelector(".notext").style.display = "none"
    document.querySelector(".inputRequest").style.display = "none"
    document.querySelector(".encryptedText").style.display = "block"
    document.querySelector(".encryptedText").innerHTML = message
    document.querySelector(".copy").style.display = "block"
  }
}