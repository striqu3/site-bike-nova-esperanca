/* 
   Bike Nova Esperança - Lógica de Produção
   Gerenciamento de Conteúdo Dinâmico
   v1.2 - Adicionado serviço de Leva e Traz
*/

const WHATSAPP_NUMBER = "554133448161";

// Dados de Produtos
const produtos = [
    {
        id: 1,
        nome: "Bicicleta Mountain Bike",
        descricao: "Perfeitas para o dia a dia, lazer e trilhas leves, com ótimo custo-benefício.",
        preco: "A partir de R$ 1.290,00",
        imagem: "assets/images/mountain-bike.jpg",
        especificacoes: ["Suspensão frontal", "Pneus off-road", "Freios a disco", "Quadro resistente"]
    },
    {
        id: 2,
        nome: "Bicicleta Freerider",
        descricao: "Mais resistência e estilo para quem busca aventura e desempenho.",
        preco: "R$ 1.290,00",
        imagem: "assets/images/hero-bg.jpg",
        especificacoes: ["Design robusto", "Alta performance", "Componentes premium", "Estilo aventureiro"]
    },
    {
        id: 3,
        nome: "Bicicleta Infantil",
        descricao: "Segurança, conforto e diversão garantida para as crianças.",
        preco: "R$ 649,00",
        imagem: "assets/images/urban-bike.jpg",
        especificacoes: ["Rodinhas laterais", "Freios suaves", "Cores vibrantes", "Ergonomia infantil"]
    }
];

// Dados de Serviços
const servicos = [
    {
        id: 1,
        nome: "Revisões",
        descricao: "Manutenção completa para garantir segurança, desempenho e maior vida útil da sua bike.",
        preco: "A partir de R$ 170,00",
        imagem: "assets/images/revisoes.jpg"
    },
    {
        id: 2,
        nome: "Montagem",
        descricao: "Montagem profissional com ajuste fino e cuidado em cada detalhe.",
        preco: "A partir de R$ 110,00",
        imagem: "assets/images/montagem.jpg"
    },
    {
        id: 3,
        nome: "Pintura",
        descricao: "Renove o visual da sua bicicleta com acabamento de qualidade.",
        preco: "A partir de R$ 350,00",
        imagem: "assets/images/pintura.jpg"
    },
    {
        id: 4,
        nome: "Restaurações",
        descricao: "Restauramos bicicletas com peças originais, preservando a identidade e a qualidade do modelo.",
        preco: "Solicite seu orçamento no WhatsApp",
        imagem: "assets/images/restauracao.jpg",
        isWhatsapp: true
    },
    {
        id: 5,
        nome: "Leva e Traz",
        descricao: "Buscamos e entregamos sua bicicleta com segurança e praticidade.",
        preco: "Solicite seu orçamento no WhatsApp",
        imagem: "assets/images/leva-traz.png",
        isWhatsapp: true
    }
];

// Dados de Peças
const pecas = [
    {
        id: 1,
        nome: "Pneus e câmaras",
        descricao: "Mais segurança, aderência e conforto para qualquer tipo de terreno.",
        preco: "Consulte modelos",
        imagem: "assets/images/pneus.jpg"
    },
    {
        id: 2,
        nome: "Selins / bancos",
        descricao: "Conforto e ergonomia para pedais mais longos e agradáveis.",
        preco: "Consulte modelos",
        imagem: "assets/images/selim.jpg"
    },
    {
        id: 3,
        nome: "Freios a disco",
        descricao: "Frenagem eficiente e segura em qualquer situação.",
        preco: "Consulte modelos",
        imagem: "assets/images/freios.jpg"
    },
    {
        id: 4,
        nome: "Rodas",
        descricao: "Durabilidade e desempenho para o melhor rendimento da sua bicicleta.",
        preco: "Consulte modelos",
        imagem: "assets/images/rodas.jpg"
    },
    {
        id: 5,
        nome: "Acessórios",
        descricao: "Luzes, suportes, caramanholas e itens para deixar sua bike mais prática e funcional.",
        preco: "Consulte modelos",
        imagem: "assets/images/acessorios.jpg"
    },
    {
        id: 6,
        nome: "Outras peças",
        descricao: "Grande variedade de componentes sob consulta.",
        preco: "Consulte modelos",
        imagem: "assets/images/quadro.jpg"
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
        
        let priceHtml = `<div class="price">${servico.preco}</div>`;
        if (servico.isWhatsapp) {
            priceHtml = `<a href="https://wa.me/${WHATSAPP_NUMBER}" target="_blank" class="btn-whatsapp-small"><i class="fab fa-whatsapp"></i> Solicitar Orçamento</a>`;
        }

        card.innerHTML = `
            <div class="card-img">
                <img src="${servico.imagem}" alt="${servico.nome}">
            </div>
            <div class="card-content">
                <h3>${servico.nome}</h3>
                <p>${servico.descricao}</p>
                ${priceHtml}
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

    // Atualizar link do botão flutuante do WhatsApp
    const whatsappFloat = document.querySelector('.whatsapp-float');
    if (whatsappFloat) {
        whatsappFloat.href = `https://wa.me/${WHATSAPP_NUMBER}`;
    }

    // Smooth scroll para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 120,
                    behavior: 'smooth'
                });
            }
        });
    });
});
