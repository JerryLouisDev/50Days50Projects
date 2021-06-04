const panels = document.querySelectorAll('.panel')
const info = document.querySelectorAll('.info')

console.log(panels);

panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses(),
    addInformation()
    panel.classList.add('active')
  })
})
function removeActiveClasses(){
  panels.forEach(panel => {
    panel.classList.remove('active')
  })
}
function addInformation(){
  info.forEach((information) => {
    information.style.removeProperty('display')
  })
}
