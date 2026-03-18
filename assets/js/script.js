/* 
   Bike Nova Esperança - Lógica de Produção
   Gerenciamento de Conteúdo Dinâmico
*/

// Dados de Produtos
const produtos = [
    {
        id: 1,
        nome: "Mountain Bike",
        descricao: "Perfeita para trilhas e terrenos acidentados com máxima performance.",
        preco: "R$ 1.200,00",
        imagem: "assets/images/mountain-bike.jpg",
        especificacoes: ["Suspensão frontal", "Pneus off-road", "Freios a disco", "Quadro de aço"]
    },
    {
        id: 2,
        nome: "Bicicleta Urbana",
        descricao: "Ideal para deslocamento na cidade com conforto e estilo.",
        preco: "R$ 800,00",
        imagem: "assets/images/urban-bike.jpg",
        especificacoes: ["Quadro leve", "Pneus urbanos", "Assento confortável", "Iluminação LED"]
    },
    {
        id: 3,
        nome: "BMX Profissional",
        descricao: "Para manobras, truques e diversas modalidades radicais.",
        preco: "R$ 600,00",
        imagem: "assets/images/hero-bg.jpg", // Usando hero como fallback ou imagem de ação
        especificacoes: ["Quadro resistente", "Rodas pequenas", "Manilhas reforçadas", "Ideal para truques"]
    }
];

// Dados de Serviços
const servicos = [
    {
        id: 1,
        nome: "Montagem de Bicicleta",
        descricao: "Montagem completa de bicicleta nova com ajustes de segurança.",
        preco: "R$ 80,00",
        imagem: "assets/images/workshop.jpg"
    },
    {
        id: 2,
        nome: "Troca de Freios",
        descricao: "Substituição de freios (disco ou V-brake) com ajuste fino.",
        preco: "R$ 120,00",
        imagem: "assets/images/parts.jpg"
    },
    {
        id: 3,
        nome: "Manutenção Geral",
        descricao: "Limpeza, lubrificação e ajuste de toda a bicicleta.",
        preco: "R$ 90,00",
        imagem: "assets/images/workshop.jpg"
    }
];

// Dados de Peças
const pecas = [
    {
        id: 1,
        nome: "Freio a Disco",
        descricao: "Freio a disco hidráulico de alta performance.",
        preco: "R$ 250,00",
        imagem: "assets/images/parts.jpg"
    },
    {
        id: 2,
        nome: "Quadro de Alumínio",
        descricao: "Quadro leve e resistente para todas as modalidades.",
        preco: "R$ 600,00",
        imagem: "assets/images/parts.jpg"
    },
    {
        id: 3,
        nome: "Pneu Off-Road",
        descricao: "Pneu com aderência máxima para trilhas.",
        preco: "R$ 150,00",
        imagem: "assets/images/mountain-bike.jpg"
    }
];

// Função para renderizar produtos
function renderProdutos() {
    const container = document.getElementById('produtos-grid');
    if (!container) return;

    produtos.forEach(produto => {
        const card = document.createElement('div');
        card.className = 'card';
        
        const specsHtml = produto.especificacoes.map(spec => `<li>${spec}</li>`).join('');
        
        card.innerHTML = `
            <div class="card-img">
                <img src="${produto.imagem}" alt="${produto.nome}">
            </div>
            <div class="card-content">
                <h3>${produto.nome}</h3>
                <p>${produto.descricao}</p>
                <ul class="specs">${specsHtml}</ul>
                <div class="price">${produto.preco}</div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Função para renderizar serviços
function renderServicos() {
    const container = document.getElementById('servicos-grid');
    if (!container) return;

    servicos.forEach(servico => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img">
                <img src="${servico.imagem}" alt="${servico.nome}">
            </div>
            <div class="card-content">
                <h3>${servico.nome}</h3>
                <p>${servico.descricao}</p>
                <div class="price">${servico.preco}</div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Função para renderizar peças
function renderPecas() {
    const container = document.getElementById('pecas-grid');
    if (!container) return;

    pecas.forEach(peca => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-img">
                <img src="${peca.imagem}" alt="${peca.nome}">
            </div>
            <div class="card-content">
                <h3>${peca.nome}</h3>
                <p>${peca.descricao}</p>
                <div class="price">${peca.preco}</div>
            </div>
        `;
        container.appendChild(card);
    });
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
    renderProdutos();
    renderServicos();
    renderPecas();

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
});
