// This function should add the text-red-500 the h1 element

const oneClass = 'bg-red-500'

const number = 11
const baseClass = 'text-'

// Como o compilador do TailwindCSS lê o arquivo para entender as classes
// utilizadas e não exatamente executa nada, para ele o arquivo não tem
// nenhuma classe válida.
const classToBeAdded = `${baseClass}${number > 10 ? '9xl' : '4xl'}`
const h1 = document.querySelector('h1')

const anotherClassToBeAdded = number === 11 ? 'text-9xl' : 'text-5xl'

h1.classList.add(classToBeAdded)
h1.classList.add(anotherClassToBeAdded)
