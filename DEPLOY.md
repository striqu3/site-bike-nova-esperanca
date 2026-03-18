# 🚀 Guia de Deploy - Bike Nova Esperança

## Como fazer o Deploy no Cloudflare Pages

### Opção 1: Upload Direto (Mais Fácil)

1. Acesse [Cloudflare Pages](https://pages.cloudflare.com/)
2. Clique em **"Create a project"** → **"Upload assets"**
3. Arraste a pasta `bike-nova-production/` para a área de upload
4. Clique em **"Deploy site"**
5. Pronto! Seu site estará online em poucos segundos

### Opção 2: GitHub (Recomendado para atualizações futuras)

1. Faça upload dos arquivos para um repositório GitHub
2. Conecte o repositório ao Cloudflare Pages
3. A cada push, o site será automaticamente atualizado

## Como fazer o Deploy no Netlify

1. Acesse [Netlify](https://www.netlify.com/)
2. Clique em **"Add new site"** → **"Deploy manually"**
3. Arraste a pasta `bike-nova-production/` para a área de upload
4. Pronto! Seu site estará online

## Estrutura de Arquivos

```
bike-nova-production/
├── index.html              # Página principal
├── assets/
│   ├── css/
│   │   └── style.css       # Estilos do site
│   ├── js/
│   │   └── script.js       # Funcionalidades JavaScript
│   └── images/
│       ├── logo.webp       # Logo da bicicletaria
│       ├── hero-bg.jpg     # Imagem do hero
│       ├── mountain-bike.jpg
│       ├── urban-bike.jpg
│       ├── parts.jpg
│       └── workshop.jpg
└── README.md               # Este arquivo
```

## Como Atualizar o Site

### Atualizar Conteúdo

1. Abra o arquivo `index.html` em um editor de texto
2. Procure pela seção que deseja atualizar
3. Faça as alterações
4. Salve o arquivo
5. Re-faça o upload para Cloudflare Pages ou Netlify

### Atualizar Imagens

1. Coloque as novas imagens na pasta `assets/images/`
2. Atualize as referências no `index.html`:
   - `src="assets/images/nome-da-imagem.jpg"`

### Atualizar Estilos (CSS)

1. Edite o arquivo `assets/css/style.css`
2. As mudanças serão refletidas automaticamente

### Atualizar Funcionalidades (JavaScript)

1. Edite o arquivo `assets/js/script.js`
2. As mudanças serão refletidas automaticamente

## Informações Importantes

- **Tamanho do site**: ~694 KB (muito leve!)
- **Compatibilidade**: Funciona em todos os navegadores modernos
- **Mobile**: Totalmente responsivo
- **Performance**: Otimizado para velocidade

## Cores Utilizadas

- **Azul Escuro (Primário)**: #2C3E50
- **Vermelho (Destaque)**: #e74c3c
- **Preto (Textos)**: #1a1a1a
- **Cinza (Textos secundários)**: #666

## Contato para Suporte

Se tiver dúvidas sobre como atualizar o site ou fazer o deploy, entre em contato!

---

**Versão**: 1.0  
**Data**: Março 2026  
**Status**: Pronto para Deploy ✅
