const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');

// Estrutura de pastas e arquivos
const folders = [
    'public/css',
    'public/js',
    'public/assets',
    'views',
    'routes'
];

const files = {
    'index.js': `
const express = require('express');
const path = require('path');
const { Liquid } = require('liquidjs');

const app = express();
const engine = new Liquid();

app.engine('liquid', engine.express());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'liquid');

// Servindo arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Rota principal
app.get('/', (req, res) => {
    res.render('home', { 
        title: 'Olá Mundo!', 
        heading: '', 
        description: 'Explore nossos produtos incríveis.' 
    });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(\`Servidor rodando em http://localhost:\${PORT}\`);
});
`,
    'public/index.html': `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Olá Mundo!</title>
  <link rel="stylesheet" href="css/style.css">
</head>
<body>
  <h1>Olá Mundo!</h1>
  <script src="js/main.js"></script>
</body>
</html>
`,
    'public/css/style.css': `body { font-family: Arial, sans-serif; text-align: center; margin: 0; padding: 0; }`,
    'public/js/main.js': `console.log('Bem-vindo à Olá Mundo!!');`,
    'views/home.liquid': `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>{{ title }}</title>
</head>
<body>
  <h1>{{ heading }}</h1>
  <p>{{ description }}</p>
</body>
</html>
`,
    'routes/api.js': `// Aqui você pode criar rotas de API`,
    'README.md': `# Olá Mundo!\nProjeto criado automaticamente com Node.js`
};

// Criar pastas
folders.forEach(folder => {
    fs.mkdirSync(path.join(__dirname, folder), { recursive: true });
});

// Criar arquivos
Object.entries(files).forEach(([file, content]) => {
    fs.writeFileSync(path.join(__dirname, file), content.trim());
});

// Inicializar npm e instalar pacotes
console.log('Inicializando npm...');
exec('npm init -y', (err) => {
    if (err) throw err;

    console.log('Instalando dependências...');
    exec('npm install express liquidjs', (err) => {
        if (err) throw err;

        console.log('Instalando dependências de desenvolvimento...');
        exec('npm install --save-dev nodemon', (err) => {
            if (err) throw err;

            // Atualizar package.json com scripts
            const packageJson = JSON.parse(fs.readFileSync('package.json'));
            packageJson.scripts = {
                start: 'node index.js',
                dev: 'nodemon index.js'
            };
            fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

            console.log('Projeto criado com sucesso! 🚀');
        });
    });
});
