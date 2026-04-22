# 🛒 E-commerce React

Aplicação web de e-commerce desenvolvida com foco em experiência do usuário, arquitetura de componentes e simulação de fluxo real de compras.

🔗 **Live Demo:**
[https://eccomerce-react-zeta.vercel.app/](https://eccomerce-react-zeta.vercel.app/)

---

## 🚀 Demonstração

### 🏠 Navegação e listagem de produtos

![Home](./public/screenshots/home.png)

### 🔍 Busca de produtos

![Busca](./public/screenshots/search.gif)

### 🛒 Carrinho de compras em funcionamento

![Carrinho](./public/screenshots/cart.gif)

---

## ✨ Principais funcionalidades

* Listagem dinâmica de produtos
* Busca em tempo real
* Carrinho de compras com atualização automática
* Persistência de dados com LocalStorage
* Interface responsiva
* Componentização reutilizável

---

## 🧠 Decisões técnicas

Este projeto foi estruturado priorizando organização, escalabilidade e boas práticas:

* Separação por responsabilidades (`components`, `pages`, `services`)
* Simulação de backend utilizando LocalStorage
* Controle de estado com React Hooks (`useState`, `useEffect`)
* Componentes desacoplados e reutilizáveis
* Estrutura preparada para futura integração com API

---

## 🏗️ Arquitetura do projeto

```
src/
├── components/     # Componentes reutilizáveis (UI)
├── pages/          # Páginas da aplicação
├── services/       # Regras de negócio e persistência
├── assets/         # Imagens e arquivos estáticos
├── App.jsx
└── main.jsx
```

---

## ⚙️ Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/andrecosmos/eccomerce-react.git

# Acesse a pasta
cd eccomerce-react

# Instale as dependências
npm install

# Execute o projeto
npm run dev
```

---

## 🌐 Deploy

Deploy realizado utilizando a plataforma Vercel:

[https://eccomerce-react-zeta.vercel.app/](https://eccomerce-react-zeta.vercel.app/)

---

## 📈 Possíveis evoluções

* Integração com API REST (Spring Boot, Node.js, etc.)
* Sistema de autenticação (JWT)
* Integração com gateway de pagamento
* Filtros avançados e ordenação
* Dashboard administrativo
* Context API ou Redux para estado global

---

## 🎯 Objetivo

Este projeto foi desenvolvido como parte de portfólio com foco em demonstrar:

* Domínio de React
* Organização de código em aplicações reais
* Simulação de regras de negócio
* Capacidade de estruturar projetos escaláveis

---

## 👨‍💻 Autor

**André Cosmos**

* GitHub: [https://github.com/andrecosmos](https://github.com/andrecosmos)

---

## 📄 Licença

Este projeto está sob a licença MIT.

---

## 📸 Como adicionar os screenshots

Crie a seguinte estrutura no projeto:

```
/public/screenshots/
  home.png
  search.gif
  cart.gif
```

Sugestões:

* `home.png`: tela inicial com produtos
* `search.gif`: digitando na busca
* `cart.gif`: adicionando item ao carrinho

Ferramentas recomendadas para GIF:

* ScreenToGif (Windows)
* OBS Studio

Dica: mantenha os GIFs curtos (5–10 segundos) para não pesar o README.

---

## 🏷️ (Opcional) Badges

Adicione no topo do README para dar mais impacto:

```
![React](https://img.shields.io/badge/React-18-blue)
![Status](https://img.shields.io/badge/status-active-success)
```
