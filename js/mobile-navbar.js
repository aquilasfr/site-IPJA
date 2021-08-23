document.addEventListener('DOMContentLoaded', () => {
  const navBarToggleIconsE1 = document.querySelectorAll('.navbar-toogle')
  navBarToggleIconsE1.forEach(e1 => {[
      e1.addEventListener('click',() => {
          const mobileSidebarE1 = document.querySelector('.section-wrapper_nav__list')

          mobileSidebarE1.classList.toggle('sidebar-active')
      })
  ]}) 
})