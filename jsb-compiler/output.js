let test = 'balls'
let testing = 'benas'
function createFragment(ctx) {
    const div = document.createElement('div')
    div.setAttribute('class', 'test')
    const fkkWFjxt = document.createElement('p')
    fkkWFjxt.innerHTML += test
    div.appendChild(fkkWFjxt)
    const NQyXuTJI = document.createElement('p')
    NQyXuTJI.innerHTML += testing
    div.appendChild(NQyXuTJI)
    div.innerHTML += 'test'

    return div
}
const ctx = { test, testing }
document.body.appendChild(createFragment(ctx))
