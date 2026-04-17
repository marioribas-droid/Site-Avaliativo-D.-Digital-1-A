// --- DATA DEFENITION (Gestão de Dados) ---
const importanceData = [
    { title: "Polinização", text: "80% das plantas dependem das abelhas para reprodução." },
    { title: "Biodiversidade", text: "Ajudam na manutenção de florestas e habitats naturais." },
    { title: "Economia", text: "A produção de alimentos movimenta bilhões graças a elas." }
];

const speciesData = [
    { name: "Abelha Europeia", desc: "A mais conhecida produtora de mel.", img: "🐝" },
    { name: "Abelha Jataí", desc: "Nativa do Brasil, sem ferrão e muito dócil.", img: "🍯" },
    { name: "Mamangava", desc: "Grandes e excelentes polinizadoras de maracujá.", img: "🌸" }
];

const faqData = [
    { q: "Como posso ajudar em casa?", a: "Plante flores nativas e evite o uso de agrotóxicos no seu jardim." },
    { q: "Por que elas estão sumindo?", a: "Devido ao desmatamento, mudanças climáticas e pesticidas." }
];

// --- RENDER FUNCTIONS ---
function init() {
    renderImportance();
    renderCarousel();
    renderAccordion();
    setupScrollReveal();
}

function renderImportance() {
    const grid = document.getElementById('importance-grid');
    grid.innerHTML = importanceData.map(item => `
        <article class="card">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        </article>
    `).join('');
}

function renderCarousel() {
    const carousel = document.getElementById('bee-carousel');
    carousel.innerHTML = speciesData.map(item => `
        <div class="carousel-item">
            <div style="font-size: 4rem">${item.img}</div>
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
        </div>// --- DATA DEFENITION (Gestão de Dados) ---
const importanceData = [
    { title: "Polinização", text: "80% das plantas dependem das abelhas para reprodução." },
    { title: "Biodiversidade", text: "Ajudam na manutenção de florestas e habitats naturais." },
    { title: "Economia", text: "A produção de alimentos movimenta bilhões graças a elas." }
];

const speciesData = [
    { name: "Abelha Europeia", desc: "A mais conhecida produtora de mel.", img: "🐝" },
    { name: "Abelha Jataí", desc: "Nativa do Brasil, sem ferrão e muito dócil.", img: "🍯" },
    { name: "Mamangava", desc: "Grandes e excelentes polinizadoras de maracujá.", img: "🌸" }
];

const faqData = [
    { q: "Como posso ajudar em casa?", a: "Plante flores nativas e evite o uso de agrotóxicos no seu jardim." },
    { q: "Por que elas estão sumindo?", a: "Devido ao desmatamento, mudanças climáticas e pesticidas." }
];

// --- RENDER FUNCTIONS ---
function init() {
    renderImportance();
    renderCarousel();
    renderAccordion();
    setupScrollReveal();
}

function renderImportance() {
    const grid = document.getElementById('importance-grid');
    grid.innerHTML = importanceData.map(item => `
        <article class="card">
            <h3>${item.title}</h3>
            <p>${item.text}</p>
        </article>
    `).join('');
}

function renderCarousel() {
    const carousel = document.getElementById('bee-carousel');
    carousel.innerHTML = speciesData.map(item => `
        <div class="carousel-item">
            <div style="font-size: 4rem">${item.img}</div>
            <h3>${item.name}</h3>
            <p>${item.desc}</p>
        </div>
    `).join('');
}

function renderAccordion() {
    const acc = document.getElementById('faq-accordion');
    acc.innerHTML = faqData.map((item, index) => `
        <div class="accordion-item">
            <button class="accordion-header" onclick="toggleAccordion(${index})" aria-expanded="false">
                ${item.q}
            </button>
            <div class="accordion-content" id="content-${index}">
                <p>${item.a}</p>
            </div>
        </div>
    `).join('');
}

// --- INTERACTIVITY & ACCESSIBILITY ---

// Controle de Fonte
let currentFontSize = 16;
function changeFontSize(action) {
    const body = document.body;
    if (action === 'increase') currentFontSize += 2;
    else if (action === 'decrease') currentFontSize -= 2;
    body.style.fontSize = currentFontSize + 'px';
}

// Alto Contraste
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// Acordeão
function toggleAccordion(index) {
    const contents = document.querySelectorAll('.accordion-content');
    const headers = document.querySelectorAll('.accordion-header');
    
    contents[index].classList.toggle('active');
    const isActive = contents[index].classList.contains('active');
    headers[index].setAttribute('aria-expanded', isActive);
}

// Carrossel Logic
let currentIndex = 0;
document.getElementById('nextBtn')?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % speciesData.length;
    updateCarousel();
});

document.getElementById('prevBtn')?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + speciesData.length) % speciesData.length;
    updateCarousel();
});

function updateCarousel() {
    const track = document.getElementById('bee-carousel');
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Scroll Reveal Observer
function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
}

window.onload = init;
    `).join('');
}

function renderAccordion() {
    const acc = document.getElementById('faq-accordion');
    acc.innerHTML = faqData.map((item, index) => `
        <div class="accordion-item">
            <button class="accordion-header" onclick="toggleAccordion(${index})" aria-expanded="false">
                ${item.q}
            </button>
            <div class="accordion-content" id="content-${index}">
                <p>${item.a}</p>
            </div>
        </div>
    `).join('');
}

// --- INTERACTIVITY & ACCESSIBILITY ---

// Controle de Fonte
let currentFontSize = 16;
function changeFontSize(action) {
    const body = document.body;
    if (action === 'increase') currentFontSize += 2;
    else if (action === 'decrease') currentFontSize -= 2;
    body.style.fontSize = currentFontSize + 'px';
}

// Alto Contraste
function toggleContrast() {
    document.body.classList.toggle('high-contrast');
}

// Acordeão
function toggleAccordion(index) {
    const contents = document.querySelectorAll('.accordion-content');
    const headers = document.querySelectorAll('.accordion-header');
    
    contents[index].classList.toggle('active');
    const isActive = contents[index].classList.contains('active');
    headers[index].setAttribute('aria-expanded', isActive);
}

// Carrossel Logic
let currentIndex = 0;
document.getElementById('nextBtn')?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % speciesData.length;
    updateCarousel();
});

document.getElementById('prevBtn')?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + speciesData.length) % speciesData.length;
    updateCarousel();
});

function updateCarousel() {
    const track = document.getElementById('bee-carousel');
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Scroll Reveal Observer
function setupScrollReveal() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.scroll-reveal').forEach(el => observer.observe(el));
}

window.onload = init;
