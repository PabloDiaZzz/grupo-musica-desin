import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './style.css'

const form = document.querySelector('#form-contacto')
const exito = document.querySelector('#contacto-exito')
const modal = document.querySelector('#modalContacto')

if (form && modal) {
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (!form.checkValidity()) {
      event.stopPropagation()
      form.classList.add('was-validated')
      return
    }
    form.classList.add('d-none')
    exito.classList.remove('d-none')
  })

  modal.addEventListener('hidden.bs.modal', () => {
    form.reset()
    form.classList.remove('was-validated', 'd-none')
    exito.classList.add('d-none')
  })
}

const paginacion = document.querySelector('#paginacion-gira')

if (paginacion) {
  const filas = document.querySelectorAll('#tabla-gira tbody tr')
  const items = paginacion.querySelectorAll('.page-item')
  const anterior = items[0]
  const siguiente = items[items.length - 1]
  const numeros = [...items].slice(1, -1)
  let actual = 1

  const mostrar = (pagina) => {
    actual = pagina
    filas.forEach((fila) => {
      fila.classList.toggle('d-none', Number(fila.dataset.pagina) !== pagina)
    })
    numeros.forEach((item, i) => {
      const activo = i + 1 === pagina
      item.classList.toggle('active', activo)
      if (activo) item.setAttribute('aria-current', 'page')
      else item.removeAttribute('aria-current')
    })
    anterior.classList.toggle('disabled', pagina === 1)
    siguiente.classList.toggle('disabled', pagina === numeros.length)
  }

  paginacion.addEventListener('click', (event) => {
    const enlace = event.target.closest('.page-link')
    if (!enlace) return
    event.preventDefault()
    if (enlace.parentElement.classList.contains('disabled')) return
    const destino = enlace.dataset.pagina
    if (destino === 'anterior') mostrar(actual - 1)
    else if (destino === 'siguiente') mostrar(actual + 1)
    else mostrar(Number(destino))
  })

  mostrar(1)
}
