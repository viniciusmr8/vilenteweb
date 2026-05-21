# VILENTE — Literatura & Fotografia

Portfolio artístico (fotografia + literatura) construído como SPA com Vite, React, TypeScript, Tailwind, shadcn-ui e Supabase.

## Stack

- Vite 5 + React 18 + TypeScript
- Tailwind CSS + shadcn-ui
- React Router v6 (BrowserRouter)
- Supabase (cliente JS — chave pública `anon`)
- TanStack Query, Framer Motion, Lucide

## Pré-requisitos

- Node.js 20+ e npm
- Conta Supabase com o projeto provisionado
- Conta Cloudflare (para o deploy)

## Desenvolvimento local

```sh
# 1. Instalar dependências
npm install

# 2. Copiar variáveis de ambiente
cp .env.example .env
# edite .env com as credenciais do Supabase

# 3. Subir servidor de desenvolvimento (porta 8080)
npm run dev
```

## Scripts

| Script              | O que faz                                  |
| ------------------- | ------------------------------------------ |
| `npm run dev`       | Servidor Vite em `http://localhost:8080`   |
| `npm run build`     | Build de produção em `dist/`               |
| `npm run build:dev` | Build em modo development (para debug)     |
| `npm run preview`   | Serve o `dist/` localmente para validar    |
| `npm run lint`      | ESLint                                     |

## Variáveis de ambiente

Todas têm prefixo `VITE_` porque são lidas no client.

| Variável                       | Descrição                            |
| ------------------------------ | ------------------------------------ |
| `VITE_SUPABASE_URL`            | URL do projeto Supabase              |
| `VITE_SUPABASE_PUBLISHABLE_KEY`| Chave pública (anon) do Supabase     |
| `VITE_SUPABASE_PROJECT_ID`     | ID do projeto Supabase               |

> A `anon key` é segura para uso no navegador, mas as RLS policies do Supabase precisam estar ativadas para proteger os dados.

## Deploy no Cloudflare Pages (via GitHub)

1. **Criar repositório no GitHub** e enviar o projeto:
   ```sh
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/<seu-usuario>/vilente.git
   git push -u origin main
   ```

2. **Conectar no Cloudflare Pages**:
   - Acesse: <https://dash.cloudflare.com/> → **Workers & Pages** → **Create application** → **Pages** → **Connect to Git**
   - Selecione o repositório `vilente`

3. **Configurar build**:
   | Campo                    | Valor              |
   | ------------------------ | ------------------ |
   | Framework preset         | `Vite`             |
   | Build command            | `npm run build`    |
   | Build output directory   | `dist`             |
   | Root directory           | `/` (padrão)       |
   | Node version             | `20` (ou superior) |

4. **Variáveis de ambiente** (em *Settings → Environment variables*, para Production **e** Preview):
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_PUBLISHABLE_KEY`
   - `VITE_SUPABASE_PROJECT_ID`

5. **Deploy**: o Cloudflare faz o build e publica em `https://<projeto>.pages.dev`. Cada `git push` na branch `main` gera deploy de produção; outras branches viram preview deploys.

### Fallback SPA já configurado

O arquivo [public/_redirects](public/_redirects) garante que rotas client-side (`/sobre-mim`, `/literatura/:id` etc.) caiam no `index.html` sem 404 ao recarregar.

### Cabeçalhos HTTP

Headers básicos de segurança e cache estão em [public/_headers](public/_headers).

## Domínio customizado

No painel do Pages → **Custom domains** → **Set up a custom domain**. Se o DNS já está no Cloudflare, basta apontar; senão, atualize seu registrar com os name servers indicados.

## Estrutura

```
src/
├── pages/           # Rotas (Index, About, Photography, Literature, TextDetail, Contact, NotFound)
├── components/
│   ├── portfolio/   # Componentes específicos do site
│   └── ui/          # shadcn-ui
├── hooks/           # use-toast, use-mobile, use-anti-copy
├── integrations/
│   └── supabase/    # client.ts + types.ts gerados
└── lib/             # utils
```

## Notas

- O CMS de conteúdo é o Supabase (`lbplphhwmymphxuhznwl.supabase.co` no `.env` original); para um deploy próprio crie suas tabelas ou aponte para outro projeto.
- O plugin `lovable-tagger` foi removido — este projeto é independente do Lovable.
