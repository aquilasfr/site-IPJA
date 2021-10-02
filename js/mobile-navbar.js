document.addEventListener('DOMContentLoaded', () => {
  const navBarToggleIconsEl = document.querySelectorAll('.navbar-toogle')
  navBarToggleIconsEl.forEach(el => {
    el.addEventListener('click', () => {
        const mobileSidebarEl = document.querySelector('.section-wrapper__nav__list')

        mobileSidebarEl.classList.toggle('sidebar-active')
    })
  })
})