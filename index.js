const navigationDiv = document.querySelector('.navigation')
const topOfNavigation = navigationDiv.offsetTop
const siteNav = document.querySelector('#site-nav')
const externalLinks = document.querySelector('#external-links')
const main = document.querySelector('main')
const scrollDown = document.querySelector('#scroll-down')

function handleScroll(e) {
  const scrollY = window.scrollY

  if (scrollY === 0) {
    document.body.appendChild(scrollDown)
  } else {
    if (document.querySelector('#scroll-down')) {
      document.body.removeChild(scrollDown)
    }
  }

  if (scrollY >= topOfNavigation){
    main.style.paddingTop = siteNav.offsetHeight + 'px'
    document.body.classList.add('fixed-nav')
  } else {
    main.style.paddingTop = 0
    document.body.classList.remove('fixed-nav')
  }
}

function forceNextPage(e) {
  // TODO: don't hard code 
  window.scrollBy(0, 450);
}

window.addEventListener('scroll', handleScroll)
scrollDown.addEventListener('click', forceNextPage)
