import 'inputmask'

const tel = document.getElementById('tel')
const formInputMask = new Inputmask('+7(999) 999-99-99')

formInputMask.mask(tel)