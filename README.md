# Fuelly PWA

Uma Progressive Web App para gerenciamento de consumo de combustível.

## Tecnologias

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Shadcn UI
- React Query
- Zod
- Jest & Testing Library
- Storybook
- PWA (next-pwa)

## Pré-requisitos

- Node.js 18+
- npm 9+

## Instalação

```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre no diretório
cd fuelly-pwa

# Instale as dependências
npm install
```

## Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Cria a build de produção
- `npm run start` - Inicia o servidor de produção
- `npm run lint` - Executa o linter
- `npm run test` - Executa os testes
- `npm run test:watch` - Executa os testes em modo watch
- `npm run storybook` - Inicia o Storybook
- `npm run build-storybook` - Cria a build do Storybook

## Estrutura do Projeto

```
src/
├── app/              # Rotas e layouts do Next.js
├── components/       # Componentes React
│   ├── ui/          # Componentes base (Shadcn UI)
│   ├── layout/      # Componentes de layout
│   └── shared/      # Componentes compartilhados
├── features/        # Funcionalidades específicas
│   ├── auth/       # Autenticação
│   ├── profile/    # Perfil do usuário
│   └── fuel/       # Gestão de combustível
├── lib/            # Utilitários
│   ├── api/        # Configurações de API
│   ├── constants/  # Constantes
│   ├── hooks/      # Hooks customizados
│   └── utils/      # Funções utilitárias
├── store/          # Gerenciamento de estado
├── contexts/       # Contextos React
├── types/          # Tipos TypeScript
└── config/         # Configurações
```

## Convenções de Código

- Commits seguem o padrão Conventional Commits
- Código formatado com Prettier
- Lint com ESLint
- Testes são obrigatórios para novos componentes
- Documentação no Storybook para componentes reutilizáveis

## Contribuindo

1. Crie uma branch (`git checkout -b feature/nome-da-feature`)
2. Commit suas mudanças (`git commit -m 'feat: adiciona nova feature'`)
3. Push para a branch (`git push origin feature/nome-da-feature`)
4. Abra um Pull Request

## PWA

A aplicação é uma Progressive Web App, oferecendo:
- Funcionamento offline
- Instalação no dispositivo
- Notificações push
- Atualização automática

## Licença

MIT
