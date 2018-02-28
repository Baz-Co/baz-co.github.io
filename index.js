const logo = document.querySelector('.logo')
const navigationDiv = document.querySelector('.navigation')
const topOfNavigation = navigationDiv.offsetTop
const siteNav = document.querySelector('#site-nav')
const externalLinks = document.querySelector('#external-links')
const main = document.querySelector('main')

function handleScroll(e) {
  const scrollY = window.scrollY
  // console.log({scrollY, topOfNavigation})
  if (scrollY >= topOfNavigation){
    // main.style.paddingTop = siteNav.offsetHeight + 'px'
    document.body.classList.add('fixed-nav')
  } else {
    main.style.paddingTop = 0
    document.body.classList.remove('fixed-nav')
  }
}

window.addEventListener('scroll', handleScroll)
