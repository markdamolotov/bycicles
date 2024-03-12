import JustValidate from 'just-validate'

const form = document.getElementById('form')
const formInputTel = document.getElementById('tel')

const formValidate = new JustValidate(form)

formValidate.addField(formInputTel, [
  {
    validator: (value) => {
      const phone = formInputTel.inputmask.unmaskedvalue()
      return Boolean(Number(phone) && phone.length > 0)
    },
    errorMessage: 'Введите телефон',
  },
  {
    validator: (value) => {
      const phone = formInputTel.inputmask.unmaskedvalue()
      return Boolean(Number(phone) && phone.length === 10)
    },
    errorMessage: 'Введите телефон полностью',
  },
])