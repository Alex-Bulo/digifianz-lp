window.addEventListener('load', function(){
    const hamburgerMenu = document.querySelector('.menu-icn')
    const closeMenu = document.querySelector('.icn-close')
    const menuContainer = document.querySelector('.navbar-container')
    const menu = document.querySelector('.menu-items')
    const menuLinks = document.querySelectorAll('.menu-link')

    menu.addEventListener('click', (e)=>{
        e.stopPropagation()
    })

    menuLinks.forEach(link => {
        link.addEventListener('click', ()=>{
            console.log('yes');
            menuContainer.classList.remove('slideIn')
            menuContainer.classList.add('slideOut')
        })  
    })
    hamburgerMenu.addEventListener('click', ()=>{
        menuContainer.classList.remove('slideOut')
        menuContainer.classList.add('slideIn')
    })
    
    closeMenu.addEventListener('click', ()=>{
        menuContainer.classList.remove('slideIn')
        menuContainer.classList.add('slideOut')
    })
    
    menuContainer.addEventListener('click', ()=>{
        menuContainer.classList.remove('slideIn')
        menuContainer.classList.add('slideOut')
    })

    const inputs = document.querySelectorAll('input')

    inputs.forEach(input => {
        input.addEventListener('focus', (e)=>{
            const prevLabel = e.target.previousElementSibling;
            
            if (!input.classList.contains('moveLabel')){
                prevLabel.classList.add('moveLabel')
            }
        })

        input.addEventListener('focusout',(e)=>{
            const prevLabel = e.target.previousElementSibling;
            
            if (input.value === ''){
                prevLabel.classList.remove('moveLabel')
                
            }
        })

    })

    


})