const dictionary = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" }
let textarea = document.getElementById("myTextarea")
let container = document.getElementById("container")
const resultPhrase = document.querySelector(".encryptedText")
const size = textarea.clientHeight
const width = window.innerWidth
let body = document.querySelector("body")
const heightBody = body.clientHeight
let main = document.querySelector("main")
let messagediv = document.querySelector(".message")

const resize = () => {

  if (size < textarea.scrollHeight) {
    if (width < 768) {
      textarea.style.height = "auto"
      textarea.style.height = textarea.scrollHeight + "px"
      main.style.height = "auto"
      body.style.height = "auto"
    } else if (width < 1024) {
      textarea.style.height = "auto"
      textarea.style.height = textarea.scrollHeight + "px"
      main.style.height = "auto"
      main.style.height = `calc(${textarea.style.height} + ${messagediv.clientHeight}px + 300px)`
      body.style.height = "auto"
      const value = heightBody - 800
      body.style.height = `calc(${main.clientHeight}px + ${value}px)`
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

  if (size < textarea.scrollHeight) {
    if (width < 768) {
      textarea.style.height = "auto"
      textarea.style.height = textarea.scrollHeight + "px"
      main.style.height = "auto"
      body.style.height = "auto"
    } else if (width < 1024) {
      textarea.style.height = "auto"
      textarea.style.height = textarea.scrollHeight + "px"
      main.style.height = "auto"
      main.style.height = `calc(${textarea.style.height} + ${messagediv.clientHeight}px + 300px)`
      body.style.height = "auto"
      body.style.height = `calc(${main.clientHeight}px + 350px)`
    }
  }

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