# Estrutura Automática de Projetos Node.js com Liquid

Este repositório contém um script em Node.js (`setup.js`) que automatiza a criação de um projeto Node.js. Ele cria a estrutura básica de diretórios e arquivos, instala dependências e configura tudo para você começar rapidamente.

## 🚀 Funcionalidades
- Criação automática de pastas e arquivos.
- Configuração inicial do `npm`.
- Instalação do `express` e `liquidjs` como dependências.
- Instalação do `nodemon` para desenvolvimento.
- Configuração de scripts no `package.json` (`start` e `dev`).

---

## 📋 Pré-requisitos

Antes de usar o script, você precisa:

1. **Node.js e npm**: Certifique-se de que o Node.js está instalado. [Baixe aqui](https://nodejs.org/).
   - Verifique com:
     ```bash
     node -v
     npm -v
     ```

2. **Git**: Para clonar este repositório, você deve ter o Git instalado. [Baixe aqui](https://git-scm.com/).

---

## 📂 Estrutura Criada pelo Script

Após executar o `setup.js`, o projeto terá a seguinte estrutura:

meu-projeto/ 
│ ├── package.json # Configurações do projeto 
├── package-lock.json # Dependências geradas 
├── node_modules/ # Dependências instaladas 
├── index.js # Ponto de entrada do servidor 
├── public/ # Arquivos estáticos 
│ ├── css/style.css # Estilo inicial 
│ ├── js/main.js # Script inicial 
│ ├── assets/ # Recursos (imagens, fontes, etc.) 
│ └── index.html # Página HTML inicial 
├── views/ # Templates Liquid 
│ └── home.liquid # Página inicial renderizada 
├── routes/ # Rotas (opcional) 
│ └── api.js # Arquivo para rotas de API 
└── README.md # Este arquivo


---

## 🛠️ Como Usar o Script

### 1. Clone este repositório

No terminal, execute:
```bash
git clone https://github.com/BrunoAFonseca/estrutura_automatica.git
cd estrutura_automatica

2. Copie o Script para a Pasta do Novo Projeto
Crie uma pasta para o novo projeto e copie o arquivo setup.js para lá:

mkdir meu-projeto
cp setup.js meu-projeto
cd meu-projeto

3. Execute o Script
No diretório do novo projeto, execute:

node setup.js

O script irá:

- Criar a estrutura de pastas e arquivos.
- Inicializar o npm.
- Instalar as dependências express, liquidjs e nodemon.
- Configurar os scripts start e dev no package.json.

🏃 Como Rodar o Projeto
1. Para iniciar o servidor normalmente:

npm start

2. Para iniciar em modo de desenvolvimento com reinício automático:


npm run dev

3. Abra o navegador e acesse:


http://localhost:3000

⚙️ Customização
- Templates: Personalize os arquivos em views/ para mudar o conteúdo das páginas.
- Estilos: Edite os arquivos em public/css/ para alterar o design.
- Rotas: Adicione novas rotas no arquivo routes/api.js ou diretamente no index.js.