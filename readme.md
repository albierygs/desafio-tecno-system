# Tecno System - Sistema de Reserva de Restaurante

Este projeto é um desafio técnico para o processo seletivo da empresa júnior TecnoSystem. O objetivo é desenvolver um sistema de reserva para um restaurante fictício chamado "Essenza". Ele consiste em um front-end estático com um formulário de reserva e uma API back-end em Node.js que gerencia as reservas, armazena os dados em um banco de dados in-memory (SQLite) e envia e-mails de confirmação.

## Tecnologias Utilizadas

### Front-end

- **HTML:** Estrutura da página.
- **CSS:** Estilização da interface.
- **JavaScript:** Lógica de validação do formulário e comunicação com a API.

### Back-end (API)

- **Node.js:** Ambiente de execução.
- **Express.js:** Framework web para criar a API.
- **SQLite3:** Banco de dados in-memory para armazenamento temporário das reservas.
- **Nodemailer:** Biblioteca para envio de e-mails de confirmação.
- **Dotenv:** Para gerenciar variáveis de ambiente (credenciais de e-mail).
- **CORS:** Para permitir requisições do front-end.

## Funcionalidades

- **Front-end:**

  - Página de visualização do restaurante com texto de apresentação.
  - Formulário de reserva com campos para nome, sobrenome, e-mail e celular.
  - Formatação automática do número de celular.
  - Validação básica de e-mail e celular.
  - Envio dos dados para a API e exibição de alertas de sucesso ou erro.

- **Back-end (API):**
  - Rota `/api/reserve` para receber solicitações de reserva.
  - Middleware para verificar se o e-mail já existe no banco de dados, retornando um erro 409 se for o caso.
  - Armazenamento dos dados de reserva no banco de dados SQLite.
  - Envio de e-mail de confirmação para o cliente.

## Estrutura do Projeto

desafio-tecno-system/
├── api/
│ ├── .gitignore
│ ├── app.js
│ ├── package.json
│ ├── package-lock.json
│ ├── reserveController.js
│ ├── reserveMiddleware.js
│ └── utils.js
├── assets/
│ ├── background.png
│ └── opacity.png
├── index.html
├── index.js
└── style.css

## Instalação e Execução

### Pré-requisitos

- Node.js instalado (versão 10 ou superior)

### 1. Configurar o back-end (API)

1.  Navegue até o diretório `api`:

    ```bash
    cd api
    ```

2.  Instale as dependências:

    ```bash
    npm install
    ```

3.  Crie um arquivo de variáveis de ambiente chamado `.env` na pasta `api`. Este arquivo é necessário para configurar as credenciais do serviço de e-mail. Adicione as seguintes variáveis, substituindo os valores pelos seus:

    ```
    EMAIL_ACCOUNT=seu_email@gmail.com
    EMAIL_PASSWORD=sua_senha_ou_senha_de_app
    ```

4.  Inicie a API:
    ```bash
    npm start
    ```
    A API estará rodando em `http://localhost:3000`.

### 2. Configurar o front-end

Não é necessário instalar dependências para o front-end, pois todos os arquivos são estáticos.

1.  Abra o arquivo `index.html` em seu navegador web para visualizar a interface do usuário.
2.  Preencha o formulário e faça uma reserva. O front-end se comunicará com a API que você iniciou na etapa anterior.
