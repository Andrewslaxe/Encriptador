const dictionary = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" }

const regex = /^[a-z\s]+$/

let textarea = document.getElementById("myTextarea")
let container = document.getElementById("container")
let body = document.querySelector("body")
let main = document.querySelector("main")
let messagediv = document.querySelector(".message")
const resultPhrase = document.querySelector(".encryptedText")

const size = textarea.clientHeight
const width = window.innerWidth
const heightBody = body.clientHeight

const resize = () => {
  if (size < textarea.scrollHeight) {
    if (width < 768) {
      textarea.style.height = "auto"
      textarea.style.height = textarea.scrollHeight + 5 + "px"
      console.log(textarea.scrollHeight)
      body.style.height = "auto"
    } else if (width < 1024) {
      textarea.style.height = "auto"
      textarea.style.height = textarea.scrollHeight + "px"
    }
  }
}


const encrypt = (phrase, dictionary) => {
  if (phrase)
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
  let copyButton = document.querySelector("#copy")
  copyButton.innerHTML = "Copiado! &#10004"
  copyButton.style.backgroundColor = "#e7ecfe"
  navigator.clipboard.writeText(document.querySelector(".encryptedText").innerHTML)
  setTimeout(() => {
    copyButton.innerHTML = "Copiar"
    copyButton.style.backgroundColor = "#fff"
  }, 5000)
}

const encryptAction = (phrase) => {
  const message = encrypt(phrase, dictionary)
  message === '' ? showIcon(message) : hideIcon(message)
  fixHTMLHeight()
}

const fixHTMLHeight = () => {
  if (size < textarea.scrollHeight) {
    if (width < 1024) {
      textarea.style.height = "auto"
      textarea.style.height = textarea.scrollHeight + "px"
    }
  }
}


const decryptAction = (phrase) => {
  const message = decrypt(phrase, dictionary)
  message === '' ? showIcon() : hideIcon(message)
}

const hideIcon = (message) => {
  document.querySelector(".notext").style.display = "none"
  document.querySelector(".inputRequest").style.display = "none"
  document.querySelector(".encryptedText").style.display = "block"
  document.querySelector("#copy").style.display = "block"
  document.querySelector(".encryptedText").innerHTML = message
  document.querySelector('.message img').style.display = "none"
  document.querySelector('.message').style["justify-content"] = "space-between"
}

const showIcon = () => {
  document.querySelector(".notext").style.display = "block"
  document.querySelector(".inputRequest").style.display = "block"
  document.querySelector(".encryptedText").style.display = "none"
  document.querySelector("#copy").style.display = "none"
  if (width > 1024) {
    document.querySelector('.message img').style.display = "block"
    document.querySelector('.message').style["justify-content"] = "center"
  }
}
