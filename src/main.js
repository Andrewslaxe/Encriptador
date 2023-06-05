const dictionary = { a: "ai", e: "enter", i: "imes", o: "ober", u: "ufat" }
const regex = /^[a-z\s]+$/

const textarea = document.querySelector("textarea")
const notification = document.querySelector("dialog")

const resize = () => {
  if (window.innerWidth > 1024) return
  textarea.style.height = "auto"
  textarea.style.height = (textarea.scrollHeight) + "px"
}

const encryptAction = () => {
  const message = textarea.value.split("")
  if (!validatePhrase(textarea.value)) return
  const encryptedMessage = encrypt(message)
  showMessage(encryptedMessage)
}

const decryptAction = () => {
  const message = textarea.value
  if (!validatePhrase(textarea.value)) return
  const decryptedMessage = decrypt(message)
  showMessage(decryptedMessage)
}

const validatePhrase = (message) => {
  if (!regex.test(message)) {
    showDialog()
    return false
  }
  return true
}

const encrypt = (message) => {
  for (let letter in message) {
    message[letter] = dictionary[message[letter]] || message[letter]
  }
  return message.join("")
}

const decrypt = (message) => {
  for (let letter of Object.keys(dictionary)) {
    message = message.replaceAll(dictionary[letter], letter)
  }
  return message
}

const showMessage = (message) => {
  document.querySelector("#result__text").innerHTML = message
  document.querySelector("#copy__button").style.display = "block"
  document.querySelector("#clear__button").style.display = "block"
  document.querySelector("#not__found").style.display = "none"
  document.querySelector("#request__input").style.display = "none"
  document.querySelector(".figure").style.display = "none"

}

notification.addEventListener("click", e => {
  const dialogDimens = notification.getBoundingClientRect()
  const isClickInside = (
    dialogDimens.top <= e.clientY &&
    e.clientY <= dialogDimens.top + dialogDimens.height &&
    dialogDimens.left <= e.clientX &&
    e.clientX <= dialogDimens.left + dialogDimens.width
  )
  if (!isClickInside) hideDialog()
})

const showDialog = () => {
  notification.showModal()
}

const hideDialog = () => {
  notification.addEventListener("animationend", closeDialog)
  notification.classList.add('close')
}

const closeDialog = () => {
  notification.close()
  notification.classList.remove("close")
  notification.removeEventListener("animationend", closeDialog)
}

const copyToClipboard = () => {
  let copyButton = document.querySelector("#copy__button")
  copyButton.innerHTML = "Copiado! &#10004"
  copyButton.style.backgroundColor = "#e7ecfe"
  navigator.clipboard.writeText(document.querySelector("#result__text").innerHTML)
  setTimeout(() => {
    copyButton.innerHTML = "Copiar"
    copyButton.style.backgroundColor = "#fff"
  }, 5000)
}

const clearContent = () => {
  textarea.value = ""
  document.querySelector("#result__text").innerHTML = ""
  document.querySelector("#copy__button").style.display = "none"
  document.querySelector("#clear__button").style.display = "none"
  document.querySelector("#not__found").style.display = "block"
  document.querySelector("#request__input").style.display = "block"
  if (window.innerWidth < 1024) return
  document.querySelector(".figure").style.display = "block"
}