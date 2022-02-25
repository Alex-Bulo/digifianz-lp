function slidingIn(el){
    el.classList.remove('slideOut')
    el.classList.add('slideIn')
}
function slidingOut(el){
    el.classList.remove('slideIn')
    el.classList.add('slideOut')
}

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
            slidingOut(menuContainer)
        })  
    })
    hamburgerMenu.addEventListener('click', ()=>{
        slidingIn(menuContainer)
    })
    
    closeMenu.addEventListener('click', ()=>{
        slidingOut(menuContainer)
    })
    
    menuContainer.addEventListener('click', ()=>{
        slidingOut(menuContainer)
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

    const menuBtn = document.querySelector('.menu-btn')
    const modalClose = document.querySelector('.modal-close')
    const modal = document.querySelector('#modal-form-container')
    const modalForm = document.querySelector('#modal-form')

    menuBtn.addEventListener('click', ()=>{
        modal.style.display = 'flex'
    })
    
    modalClose.addEventListener('click', ()=>{
        modal.style.display = 'none'
    })
    modal.addEventListener('click', ()=>{
        modal.style.display = 'none'
    })
    modalForm.addEventListener('click', (e)=>{
        e.stopPropagation()
    })


    const formBtns = document.querySelectorAll('.form-container button')
    const modalCV = document.querySelector('#modal-cv')
    const yesBtn = document.querySelector('.yes-btn')
    const noBtn = document.querySelector('.no-btn')

    formBtns.forEach(formBtn => {
        formBtn.addEventListener('click', (e)=>{
            e.preventDefault()
            modalCV.style.display = 'flex'
        })
    })
    modalCV.addEventListener('click',()=>{
        modalCV.style.display = 'none'
    })
    noBtn.addEventListener('click',()=>{
        modalCV.style.display = 'none'
    })
    

    yesBtn.addEventListener('click',()=>{
        fetch('https://digifianz-challenge.herokuapp.com/cv')
        .then( res => res.blob() )
        .then( blob => {
          const file = window.URL.createObjectURL(blob);
          window.open(file, '_blank').focus();
        });

        modalCV.style.display = 'none'
    })

    const buttons = document.querySelectorAll('button')
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', ()=>{
            button.style.backgroundColor = '#B75FBF'
        })
        button.addEventListener('mouseleave', ()=>{
            button.style.backgroundColor = ''
        })
    })

})