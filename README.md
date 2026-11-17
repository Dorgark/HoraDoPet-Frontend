# 🐾 Hora do Pet — Sistema Web de Agendamento Veterinário (MVP)

Aplicação web Full-Stack desenvolvida para otimizar o agendamento de consultas, estética e exames em clínicas veterinárias e petshops, eliminando filas e reduzindo o estresse dos pets e tutores.

## 📋 Status do Projeto

* **Fase Atual:** Consolidação Arquitetural, Modelagem de Dados e Implementação do Front-end (Landing Page e Fundação).
* **Próxima Sprint:** Início em **19/11/2026** (Integração completa com API REST e banco de dados PostgreSQL).

## 🛠️ Stack Tecnológica

* **Front-end:** React.js (Vite), Tailwind CSS v4, React Router DOM, Axios e Lucide Icons.
* **Back-end:** Node.js com Express (Arquitetura RESTful + Autenticação JWT).
* **Banco de Dados:** PostgreSQL (Modelagem relacional).
* **Design & Prototipação:** Figma (Tipografia *Bragan* + *Inter*).

## 🗄️ Modelagem de Dados (PostgreSQL)

O banco de dados foi estruturado em quatro entidades principais para garantir integridade referencial e evitar conflitos de horários (*double-booking*):

* **`tutores`:** `id` (PK), `nome`, `email` (UNIQUE), `telefone`, `senha_hash`, `criado_em`.
* **`pets`:** `id` (PK), `tutor_id` (FK → `tutores.id`), `nome`, `especie`, `raca`, `porte` (`P`, `M`, `G`), `observacoes`.
* **`servicos`:** `id` (PK), `nome`, `descricao`, `duracao_min`, `preco`, `ativo`.
* **`agendamentos`:** `id` (PK), `tutor_id` (FK), `pet_id` (FK), `servico_id` (FK), `data_hora_inicio`, `data_hora_fim`, `status` (`PENDENTE`, `CONFIRMADO`, `CONCLUIDO`, `CANCELADO`).

## 🔌 Principais Rotas da API (`/api/v1`)

| Método | Rota | Descrição |
| :--- | :--- | :--- |
| `POST` | `/auth/register` | Cadastro de novo tutor |
| `POST` | `/auth/login` | Autenticação e geração de token JWT |
| `GET` / `POST` | `/pets` | Listagem e cadastro de pets do tutor autenticado |
| `GET` | `/servicos` | Catálogo de serviços ativos com duração e preço |
| `GET` | `/agendamentos/disponibilidade` | Consulta de horários livres por data e serviço |
| `POST` | `/agendamentos` | Criação de agendamento com validação de conflito |
| `PATCH` | `/agendamentos/:id/status` | Atualização de status do atendimento |

## 📁 Estrutura do Front-end

```text
├── public/
│   ├── fonts/              # Fonte customizada Bragan (bragan.otf)
│   └── images/             # Assets visuais da Landing Page
└── src/
    ├── components/         # Componentes reutilizáveis (Navbar, etc.)
    ├── mocks/              # Payloads JSON simulados para desenvolvimento desacoplado
    ├── pages/              # Telas da aplicação (Home, Login, Dashboard, MeusPets, Agendar)
    ├── services/           # Configuração do cliente HTTP (Axios)
    ├── App.jsx             # Roteamento principal
    └── index.css           # Configuração do Tailwind CSS v4 e tema (@theme)
```

## 🚀 Como Executar o Front-end Localmente

1. **Clone o repositório:**
   ```bash
   git clone <URL-DO-REPOSITORIO>
   cd <PASTA-DO-PROJETO>
   ```

2. **Instale as dependências:**
   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento:**
   ```bash
   npm run dev
   ```

4. Acesse no navegador o endereço exibido no terminal (geralmente `http://localhost:5173`).

## 👩‍💻 Autoria

* **Maria Giulia Souza Martins** — Matrícula: `01822824`