// ============================================
// MENU MOBILE
// ============================================
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const nav = document.querySelector('.main-nav');

if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', () => {
        nav.classList.toggle('active');
        if (nav.classList.contains('active')) {
            nav.style.display = 'block';
            nav.style.position = 'absolute';
            nav.style.top = '80px';
            nav.style.left = '0';
            nav.style.width = '100%';
            nav.style.backgroundColor = 'rgba(3, 5, 11, 0.95)';
            nav.style.backdropFilter = 'blur(20px)';
            nav.style.padding = '24px';
            nav.style.zIndex = '99';
        } else {
            nav.style.display = '';
        }
    });
}

// ============================================
// THEME TOGGLE (DARK MODE / LIGHT MODE)
// ============================================
const themeToggle = document.getElementById('theme-toggle');
let isDark = true;

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const root = document.documentElement;
        if (isDark) {
            // Mudar para tema claro
            root.style.setProperty('--bg-dark', '#f5f5f7');
            root.style.setProperty('--surface-dark', 'rgba(255,255,255,0.8)');
            root.style.setProperty('--text-primary', '#111');
            root.style.setProperty('--text-secondary', '#444');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        } else {
            // Voltar para tema escuro
            root.style.setProperty('--bg-dark', '#03050b');
            root.style.setProperty('--surface-dark', 'rgba(18, 22, 35, 0.8)');
            root.style.setProperty('--text-primary', '#f0f0f0');
            root.style.setProperty('--text-secondary', '#a0a0c0');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        }
        isDark = !isDark;
    });
}

// ============================================
// SCROLL SUAVE PARA LINKS INTERNOS (ÂNCORAS)
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href && href !== '#' && href !== '#reviews') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({ 
                    behavior: 'smooth', 
                    block: 'start' 
                });
            }
        }
    });
});

// ============================================
// EFEITO DE BRILHO DO CURSOR (CUSTOM CURSOR)
// ============================================
const cursorGlow = document.querySelector('.cursor-glow');
if (cursorGlow) {
    document.addEventListener('mousemove', (e) => {
        cursorGlow.style.left = e.clientX + 'px';
        cursorGlow.style.top = e.clientY + 'px';
    });
}

// ============================================
// SCROLL REVEAL - ANIMAÇÃO DOS CARDS AO ROLAR A PÁGINA
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplicar animação aos cards de conceitos, diretores e membros da equipe
document.querySelectorAll('.conceito-card, .diretor-card, .team-member').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// HEADER SCROLL EFFECT - MUDA OPACIDADE AO ROLAR
// ============================================
const header = document.querySelector('header');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.background = 'rgba(3, 5, 11, 0.95)';
        header.style.backdropFilter = 'blur(12px)';
    } else {
        header.style.background = 'rgba(3, 5, 11, 0.7)';
        header.style.backdropFilter = 'blur(12px)';
    }
    
    lastScroll = currentScroll;
});

// ============================================
// BOTÃO DE VOLTAR AO TOPO
// ============================================
// Criar o botão dinamicamente
const backToTopBtn = document.createElement('button');
backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
backToTopBtn.className = 'back-to-top';
backToTopBtn.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--primary);
    color: white;
    border: none;
    cursor: pointer;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
    z-index: 999;
    box-shadow: 0 0 15px rgba(184, 12, 255, 0.4);
    font-size: 1.2rem;
`;

document.body.appendChild(backToTopBtn);

// Mostrar/esconder botão baseado no scroll
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.style.opacity = '1';
        backToTopBtn.style.visibility = 'visible';
    } else {
        backToTopBtn.style.opacity = '0';
        backToTopBtn.style.visibility = 'hidden';
    }
});

// Scroll suave ao clicar no botão
backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// ANIMAÇÃO DE HOVER NOS BOTÕES
// ============================================
const btns = document.querySelectorAll('.btn-primary, .btn-outline');
btns.forEach(btn => {
    btn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.05)';
    });
    
    btn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ============================================
// PREVENIR CLIQUE EM LINKS VAZIOS
// ============================================
document.querySelectorAll('a[href="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// ============================================
// NEWSLETTER FORM (SIMULAÇÃO)
// ============================================
const newsletterForms = document.querySelectorAll('.newsletter-form');
newsletterForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = form.querySelector('input');
        if (input && input.value.trim() !== '') {
            alert(`Obrigado por se inscrever, ${input.value}! Você receberá nossas novidades sobre adaptações cinematográficas.`);
            input.value = '';
        } else {
            alert('Por favor, insira um email válido.');
        }
    });
});

// ============================================
// COMENTÁRIOS (SIMULAÇÃO)
// ============================================
const commentForms = document.querySelectorAll('.comment-form');
commentForms.forEach(form => {
    const textarea = form.querySelector('textarea');
    const submitBtn = form.querySelector('button');
    
    if (submitBtn) {
        submitBtn.addEventListener('click', (e) => {
            e.preventDefault();
            if (textarea && textarea.value.trim() !== '') {
                alert('Comentário enviado! Ele aparecerá após aprovação da moderação.');
                textarea.value = '';
            } else if (textarea) {
                alert('Por favor, escreva um comentário antes de enviar.');
            }
        });
    }
});

// ============================================
// COMPARTILHAR ARTIGO (SIMULAÇÃO)
// ============================================
const shareBtn = document.getElementById('shareArticle');
if (shareBtn) {
    shareBtn.addEventListener('click', () => {
        alert('Compartilhe este artigo com seus amigos Adaptlovers! 📚🎬');
    });
}

// ============================================
// CURTIR ARTIGO (SIMULAÇÃO)
// ============================================
const likeBtn = document.getElementById('likeArticle');
let likesCount = 156;

if (likeBtn) {
    likeBtn.addEventListener('click', () => {
        likesCount++;
        likeBtn.innerHTML = `<i class="fas fa-heart"></i> Curtir (${likesCount})`;
        likeBtn.style.transform = 'scale(1.1)';
        setTimeout(() => {
            likeBtn.style.transform = 'scale(1)';
        }, 300);
    });
}

// ============================================
// RESPONDER COMENTÁRIOS (SIMULAÇÃO)
// ============================================
const replyBtns = document.querySelectorAll('.comment-reply');
replyBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        alert('Funcionalidade de resposta em desenvolvimento. Em breve você poderá responder diretamente aos comentários!');
    });
});

// ============================================
// BOTÃO DE PESQUISA (SIMULAÇÃO)
// ============================================
const searchBtn = document.querySelector('.search-btn');
if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const searchTerm = prompt('O que você procura? (Ex: Denis Villeneuve, Adaptalgia, Duna)');
        if (searchTerm && searchTerm.trim() !== '') {
            alert(`Buscando por "${searchTerm}" em nosso site de adaptações... Em breve teremos resultados!`);
        }
    });
}

console.log('🚀 TPOBAC - Adaptações Cinematográficas | Site carregado com sucesso!');