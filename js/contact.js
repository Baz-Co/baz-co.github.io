const logo = document.querySelector('.logo')
const nav = document.querySelector('#site-nav')
const topOfNav = nav.offsetTop
const externalLinks = document.querySelector('#external-links')
const main = document.querySelector('main')

function handleScroll(e) {
  const scrollY = window.scrollY
  // console.log({scrollY})
  if (scrollY >= topOfNav) {
    console.log(nav.offsetHeight)
    main.style.paddingTop = nav.offsetHeight + 'px'
    document.body.classList.add('fixed-nav')
  } else {
    main.style.paddingTop = 0
    document.body.classList.remove('fixed-nav')
  }
}

window.addEventListener('scroll', handleScroll)
