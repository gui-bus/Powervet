# <p align="center"><img src="./public/content/logos/blackLogo.webp" alt="PowerVet Logo" width="400" /></p>

<p align="center">
  <strong>Medicina Veterinária de Alta Performance: Refinada, Especializada e Centrada no Bem-Estar Felino.</strong>
</p>

<p align="center">
  <a href="https://powervet.vercel.app/"><img src="https://img.shields.io/badge/Live_Demo-PowerVet-008080?style=for-the-badge&logo=vercel" alt="Live Demo" /></a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.1.1-black?style=flat-square&logo=next.js" alt="Next.js" />
  <img src="https://img.shields.io/badge/React-19.2.3-blue?style=flat-square&logo=react" alt="React" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwind-css" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript" alt="TypeScript" />
  <img src="https://img.shields.io/badge/next--intl-i18n-red?style=flat-square" alt="next-intl" />
  <img src="https://img.shields.io/badge/Framer_Motion-12.x-black?style=flat-square&logo=framer" alt="Framer Motion" />
  <img src="https://img.shields.io/badge/Biome-Standard-60A5FA?style=flat-square&logo=biome" alt="Biome" />
</p>

---

## 📖 Panorama Geral

O **PowerVet** é uma landing page de alta fidelidade desenvolvida para uma clínica veterinária de elite, especializada exclusivamente em medicina felina. O projeto resolve a necessidade de uma presença digital que transmita autoridade médica, precisão diagnóstica e um ambiente de baixo estresse (Cat-Friendly), utilizando o que há de mais moderno no ecossistema Next.js.

### 🎯 Diferenciais Estratégicos
- **Design System Clínico:** Paleta de cores baseada em tons cirúrgicos (Teal e Hospital White) e tipografia que equilibra o técnico (`Manrope`) com o clássico (`Libre Baskerville`).
- **Experiência Multilíngue Invisível:** Internacionalização total (PT/EN) implementada com estratégia de "Zero-Prefix", onde a URL permanece limpa enquanto o conteúdo se adapta ao usuário.
- **Arquitetura de Alta Fidelidade:** Interface profissional que remove elementos "mockados" em favor de um fluxo real de triagem médica e publicações científicas.

---

## ✨ Ecossistema de Funcionalidades

### 🏥 Digital Reception (Medical Intake)
Fluxo de agendamento redefinido como uma triagem clínica:
- **Intake Form:** Separação clara entre dados do guardião e do paciente (gato).
- **Service Selection:** Interface de escolha de serviços baseada em necessidade clínica (Medicina Interna, Comportamental, Diagnóstico).
- **State Feedback:** Feedback visual instantâneo para sucesso de requisição e erros de validação.

### 📚 Medical Resource Center
Um hub de conhecimento técnico para tutores informados:
- **Clinical Papers:** Posts de blog estilizados como publicações médicas formais.
- **Formal Reading Experience:** Modais de leitura que simulam a estrutura de um artigo científico, priorizando a legibilidade e o rigor técnico.

### 🛡️ Protocolos e Segurança
- **Emergency Protocol:** Seção de destaque para emergências clínicas 24/7 com canal de resposta imediata.
- **Philosophy of Care:** Apresentação estruturada da metodologia de manuseio de baixo estresse e diagnósticos baseados em evidências.

---

## 🛠️ Deep Dive Tecnológico

### Arquitetura de Internacionalização (next-intl)
Implementação avançada de i18n no Next.js 16:
- **Prefix-free Routing:** Uso de middlewares e cookies (`NEXT_LOCALE`) para persistir o idioma sem alterar a estrutura da URL.
- **Language Selector:** Componente dinâmico com troca instantânea de contexto via `react-country-flag`.
- **JSON Driven Content:** 100% dos textos, incluindo métricas e conteúdos de posts, são gerados a partir de dicionários localizados.

### Estilização e Performance
- **Tailwind CSS v4:** Utilização da nova engine de CSS moderno, permitindo uma arquitetura de temas mais robusta e nativa.
- **OKLCH Color Space:** Definição de cores clínicas em espaço OKLCH para garantir consistência e acessibilidade em dispositivos de alta gama.
- **Motion Orchestration:** Uso de variantes do Framer Motion para animações de entrada (`fadeInUp`, `stagger`) e transições de estado ultra-fluidas.

---

## 🏗️ Estrutura Arquitetural

```text
├── messages/             # Dicionários de tradução (EN/PT)
├── public/               # Ativos estáticos organizados por categoria (Blog, Logos, Video)
├── src/
│   ├── app/              # Next.js 16 App Router (Prefix-free i18n)
│   │   ├── layout.tsx    # Injeção de Providers e Metadados
│   │   └── page.tsx      # Entry point da Landing Page
│   ├── components/
│   │   ├── layout/       # Header global e navegação
│   │   └── sections/     # Componentes modulares de cada seção clínica
│   ├── hooks/            # Motores de animação e scroll-driven UI
│   ├── i18n/             # Configuração de runtime do next-intl
│   └── lib/              # Utilitários e Variants de animação centralizadas
├── GEMINI.md             # Foundational mandates e regras de UI
└── package.json          # Modern Stack (React 19, Next 16, Tailwind 4)
```

---

## 🧪 Engenharia de Qualidade

A integridade do projeto é mantida através de ferramentas de análise estática rigorosas:
- **Biome Check:** Linting e formatação em tempo de execução para garantir código limpo e idiomático.
- **TypeScript Strict Mode:** Tipagem rigorosa em todos os componentes, especialmente em animações e payloads de tradução.
- **No-Mock Policy:** Regra de design que proíbe o uso de IDs técnicos falsos ou textos estáticos na UI, garantindo uma experiência de produto real.

Para validar o projeto:
```bash
pnpm lint
```
