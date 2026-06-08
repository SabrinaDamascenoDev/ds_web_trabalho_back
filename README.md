# 📚 Estante Virtual

Sistema web para gerenciamento de leituras, permitindo cadastrar, visualizar e acompanhar o progresso de livros.

## Funcionalidades

- Cadastro de livros
- Listagem de todos os livros
- Acompanhamento de leitura
- Cálculo automático do progresso de leitura
- Armazenamento dos dados utilizando SQLite
- API REST desenvolvida com Node.js e Express

## Tecnologias Utilizadas

### Backend

- Node.js
- Express
- SQLite
- better-sqlite3

### Frontend

- HTML5
- CSS3
- JavaScript

## Como executar o projeto

### 1. Clonar o repositório

```bash
git clone <url-do-repositorio>
```

### 2. Instalar as dependências do backend

Acesse a pasta do backend:

```bash
cd ds_web_trabalho_back
```

Instale as dependências:

```bash
npm install
```

### 3. Iniciar a API

Execute:

```bash
npm start
```

Se tudo estiver correto, aparecerá a mensagem:

```bash
API executando na porta 3000
```

A API ficará disponível em:

```text
http://localhost:3000
```

### 4. Executar o frontend

Após iniciar o backend, abra o arquivo:

```text
inicio.html
```

ou utilize a extensão **Live Server** do VS Code.

### Observação

O frontend realiza requisições para:

```text
http://localhost:3000/api/livros
```

Portanto, é necessário que o backend esteja em execução antes de utilizar a aplicação.

## Estrutura do Projeto

```text
backend/
├── models/
├── repositories/
├── services/
├── routers/
├── database.js
├── app.js
└── livros.db

frontend/
├── assets/
├── styles/
├── script/
├── inicio.html
├── cadastrar-livro.html
└── demais páginas
```
