# Site E-commerce


Este é um site de e-commerce desenvolvido em React, oferecendo uma experiência de compra online com catálogo de produtos, carrinho de compras e painel de controle.

## 🚀 Tecnologias Utilizadas

### Frontend
- **React** (v19.2.4): Biblioteca JavaScript para construção de interfaces de usuário.
- **React Router DOM** (v7.13.1): Para navegação e roteamento de páginas.
- **React Icons** (v5.6.0): Conjunto de ícones para React.
- **Tailwind CSS** (v4.2.2): Framework CSS utilitário para estilização rápida e responsiva.
- **CSS Modules**: Para estilização modular e isolada de componentes.

### Backend Simulado
- **JSON Server** (v3.0.0): Servidor REST simulado para dados de produtos, pedidos e carrinho.

### Desenvolvimento e Testes
- **React Scripts** (v5.0.1): Scripts de build e desenvolvimento para aplicações React.
- **Jest** e **React Testing Library**: Para testes unitários e de integração.
- **UUID** (v13.0.0): Para geração de identificadores únicos.
- **Web Vitals** (v2.1.4): Para monitoramento de performance.

### Ferramentas de Build
- **PostCSS** (v8.5.8) e **Autoprefixer** (v10.4.27): Para processamento CSS e compatibilidade de navegadores.


A aplicação estará disponível em `http://localhost:3000`.

## 🛠️ Scripts Disponíveis

- `npm start`: Inicia o servidor de desenvolvimento.
- `npm run build`: Cria uma build de produção.
- `npm test`: Executa os testes.
- `npm run eject`: Ejecta a configuração (irreversível).

## 📋 Funcionalidades

- **Catálogo de Produtos**: Visualização de produtos com cards interativos.
- **Carrinho de Compras**: Adição, remoção e gerenciamento de itens.
- **Painel de Controle (Dashboard)**: Visão geral de pedidos e produtos.
- **Formulário de Produto**: Criação e edição de produtos.
- **Contato**: Página de contato.
- **Layout Responsivo**: Design adaptável para diferentes dispositivos.

## 🏗️ Estrutura do Projeto

```
src/
├── components/
│   ├── layout/          # Componentes de layout (Navbar, Footer, Container)
│   ├── pages/           # Páginas principais (Home, Cart, Product, etc.)
│   └── ui/              # Componentes de UI reutilizáveis (Card, Skeleton)
├── services/            # Serviços para API e armazenamento local
└── assets/              # Recursos estáticos
```


## 📄 Licença

Este projeto é privado e não possui licença pública.

## 📸 Screenshots

Tela Home : Traz os cards de produtos através de silulação de API

<img width="1366" height="768" alt="tela react home" src="https://github.com/user-attachments/assets/35de584d-8403-4cbb-9b13-ef33988ca954" />

Tela de detalhamento de produto com botões para adicionar ao carrinho , continuar comprando e ir ao carrinho de compras.

<img width="1366" height="768" alt="tela react detalhe produto" src="https://github.com/user-attachments/assets/7c7594af-67d5-4bf7-9777-4475595811df" />

Tela do carrinho de compras :

<img width="1366" height="768" alt="react carrinho" src="https://github.com/user-attachments/assets/30b6c081-343e-4376-a2f6-f1bdab571a35" />

Tela de Dashboard
<img width="1366" height="768" alt="react dashboard" src="https://github.com/user-attachments/assets/6e248b13-5c63-485d-b899-67dbb5e504fc" />

Tela de Lista de produtos . Carregamento feito via LocalStorage simulando banco de dados.

<img width="1366" height="768" alt="react lista de produto" src="https://github.com/user-attachments/assets/b5030ed6-1c33-4e70-9fe8-1b14dc3f161d" />

Tela de Cadastro de produtos. Salvamento via LocalStorage simulando Banco de dados:

<img width="1366" height="768" alt="react cadastro produto" src="https://github.com/user-attachments/assets/e337fd3f-83f7-4065-87ec-98e4c4bd0ee8" />

Tela de Contato trazendo links externos:

<img width="1366" height="768" alt="react contato" src="https://github.com/user-attachments/assets/09d7d47f-5e4c-4c05-b478-08067aa98998" />

Desenvolvido com ❤️ usando React e Tailwind CSS.
