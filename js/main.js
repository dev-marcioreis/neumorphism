// Gsap
gsap.registerPlugin(Flip);

const links = document.querySelectorAll('.nav-item a');
const activeNav = document.querySelector('.active-nav');

links.forEach(link => {

    link.addEventListener('click', e => {

        // Alterando cor dos links do menu
        gsap.to(links, { color: "#000" });

        if(document.activeElement === e.target) {
            gsap.to(link, { color: "hsl(228, 73%, 55%)" });
        }

        // Movendo a linha abaixo de cada item do menu
        const state = Flip.getState(activeNav);
        link.appendChild(activeNav)
        Flip.from(state, {
            duration: 1.25,
            absolute: true,
            ease: 'elastic.out(1,0.5)',
        })

    });
});


const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const openMenu = document.querySelector('.nav-links');

// Abrindo o menu
openBtn.addEventListener('click', () => {
    openMenu.classList.add('active');
    openBtn.style.display = 'none';
    closeBtn.style.display = 'block';
});

// Fechando o menu
const closeMenu = () => {
    openMenu.classList.remove('active')
    closeBtn.style.display = 'none';
    openBtn.style.display = 'block'
};

closeBtn.addEventListener('click', closeMenu)

// Fechando o menu ao clicar nos links
if(window.innerWidth < 1024) {
    document.querySelectorAll('.nav-links .nav-item').forEach(navitem => {
        navitem.addEventListener('click', () => {
            closeMenu()
        })
    })
};


// Alterando cor header ao rolar página
window.addEventListener('scroll', () => {
    document.querySelector('.header').classList.toggle('scrolling', window.scrollY)
})
