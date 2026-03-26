# <p align="center"><img src="./public/content/logos/whiteLogo.webp" alt="PowerVet Logo" width="200" /></p>

<img src="https://github.com/gui-bus/portfolio/blob/master/public/projects/powervet.png?raw=true" width="100%" alt="Thumbnail Powervet">

<p align="center">
  <img alt="React" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/React.svg">
  <img alt="NextJS" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/NextJS.svg">
  <img alt="Typescript" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Typescript.svg">
  <img alt="Tailwind" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/TailwindCSS.svg">
  <img alt="Framer Motion" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Framer%20Motion.svg">
  <img alt="Phosphor Icons" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Phosphor%20Icons.svg">
  <img alt="Biome" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Biome.svg">
  <img alt="Husky" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Husky.svg">
  <img alt="Conventional Commits" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Conventional%20Commits.svg">
  <img alt="Gemini" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Gemini.svg">
  <img alt="Windsurf" height="60" width="60" src="https://github.com/gui-bus/TechIcons/blob/main/Dark/Windsurf.svg">
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
