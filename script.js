;(function () {
  const yearEl = document.getElementById('year')
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString()
  }
})()

document.addEventListener('DOMContentLoaded', function () {
  var links = document.querySelectorAll('.cta-grid a.card')
  links.forEach(function (link) {
    link.addEventListener('click', function (e) {
      var ok = window.confirm('Dəqiq seçdiyinizdən əminsiniz?')
      if (!ok) {
        e.preventDefault()
        e.stopPropagation()
      }
    })
  })
})
