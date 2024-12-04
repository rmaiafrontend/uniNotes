# UniNotes

Uma plataforma de estudo.

## 🚀 Funcionalidades

### Página Inicial

- Listagem de todas as disciplinas em cards interativos
- Visualização rápida do progresso em cada disciplina
- Informações do professor responsável
- Número de materiais disponíveis

### Detalhes da Disciplina

- Informações detalhadas sobre a disciplina
- Sistema de notas de aula
  - Adição de notas com texto
  - Upload de arquivos anexados às notas
  - Download de materiais
- Visualização cronológica das notas

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Card/           # Card genérico
│   ├── FilePreview/    # Visualização de arquivos
│   ├── FileUpload/     # Upload de arquivos
│   ├── Header/         # Cabeçalho da aplicação
│   └── SubjectCard/    # Card específico para disciplinas
│
├── pages/              # Páginas da aplicação
│   ├── Home/          # Página inicial com lista de disciplinas
│   └── SubjectDetail/ # Página de detalhes da disciplina
│
├── data/              # Dados mockados
│   └── subjects.js    # Lista de disciplinas
│
└── utils/             # Funções utilitárias
    └── helpers.js     # Formatadores e utilidades gerais
```

## 🛠️ Tecnologias Utilizadas

- React
- React Router DOM
- CSS Modules
- UUID para geração de IDs únicos

## 🎨 Design

O design da aplicação foi pensado para ser:

- Intuitivo e fácil de usar
- Moderno e agradável visualmente
- Responsivo para diferentes tamanhos de tela
- Consistente em toda a plataforma

### Componentes de Interface

- Cards com animações suaves
- Feedback visual nas interações
- Cores harmoniosas e contrastantes
- Tipografia clara e legível

## 🔄 Fluxo de Dados

1. **Lista de Disciplinas**

   - Carregamento inicial dos dados
   - Exibição em grid responsivo
   - Navegação para detalhes

2. **Notas de Aula**
   - Sistema de CRUD completo
   - Armazenamento local de arquivos
   - Organização cronológica

## 📱 Responsividade

A aplicação é totalmente responsiva:

- Layout adaptativo
- Grid system flexível
- Componentes redimensionáveis
- Experiência otimizada em dispositivos móveis

## 🚀 Como Executar

1. Clone o repositório
2. Instale as dependências:

```bash
npm install
```

3. Execute o projeto:

```bash
npm run dev
```
