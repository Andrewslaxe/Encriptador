const dictionary = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" }
let textarea = document.getElementById("myTextarea")
let container = document.getElementById("container")
const resultPhrase = document.querySelector(".encryptedText")
const size = textarea.clientHeight
const width = window.innerWidth
const body = document.querySelector("body")

const resize = () => {
  if (width < 1024) {
    textarea = document.getElementById("myTextarea")
    if (size < textarea.scrollHeight) {
      textarea.style.height = "auto"
      textarea.style.height = textarea.scrollHeight + "px"
      container.style.height = container.style.height + textarea.style.height + "px"
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
  message === '' ? showHtml(message) : hideHtml(message)
}

const decryptAction = (phrase) => {
  const message = decrypt(phrase, dictionary)
  message === '' ? showHtml(message) : hideHtml(message)
}

const hideHtml = (message) => {
  document.querySelector(".notext").style.display = "none"
  document.querySelector(".inputRequest").style.display = "none"
  document.querySelector(".encryptedText").style.display = "block"
  document.querySelector(".copy").style.display = "block"
  document.querySelector(".encryptedText").innerHTML = message
  document.querySelector('.message img').style.display = "none"
  document.querySelector('.message').style["justify-content"] = "space-between"
}

const showHtml = () => {
  document.querySelector(".notext").style.display = "block"
  document.querySelector(".inputRequest").style.display = "block"
  document.querySelector(".encryptedText").style.display = "none"
  document.querySelector(".copy").style.display = "none"
}