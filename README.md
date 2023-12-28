<div align="center">
<h1 align="center">
<img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" width="100" />
<br>MUSICPLAYER</h1>
<h3>◦ Simple music player</h3>

<p align="center">
<img src="https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=flat&logo=JavaScript&logoColor=black" alt="JavaScript" />
<img src="https://img.shields.io/badge/HTML5-E34F26.svg?style=flat&logo=HTML5&logoColor=white" alt="HTML5" />
<img src="https://img.shields.io/badge/Sass-CC6699.svg?style=flat&logo=Sass&logoColor=white" alt="Sass" />
<img src="https://img.shields.io/badge/Vite-646CFF.svg?style=flat&logo=Vite&logoColor=white" alt="Vite" />

<img src="https://img.shields.io/badge/React-61DAFB.svg?style=flat&logo=React&logoColor=black" alt="React" />
<img src="https://img.shields.io/badge/ESLint-4B32C3.svg?style=flat&logo=ESLint&logoColor=white" alt="ESLint" />
<img src="https://img.shields.io/badge/Prisma-2D3748.svg?style=flat&logo=Prisma&logoColor=white" alt="Prisma" />
<img src="https://img.shields.io/badge/JSON-000000.svg?style=flat&logo=JSON&logoColor=white" alt="JSON" />
</p>
<img src="https://img.shields.io/github/license/RomainDoyen/musicplayer?style=flat&color=5D6D7E" alt="GitHub license" />
<img src="https://img.shields.io/github/last-commit/RomainDoyen/musicplayer?style=flat&color=5D6D7E" alt="git-last-commit" />
<img src="https://img.shields.io/github/commit-activity/m/RomainDoyen/musicplayer?style=flat&color=5D6D7E" alt="GitHub commit activity" />
<img src="https://img.shields.io/github/languages/top/RomainDoyen/musicplayer?style=flat&color=5D6D7E" alt="GitHub top language" />
</div>

---

## 📖 Table of Contents
- [📖 Table of Contents](#-table-of-contents)
- [📍 Overview](#-overview)
- [📦 Features](#-features)
- [📂 Repository Structure](#-repository-structure)
- [📋 Requirements](#-requirements)
- [🚀 Getting Started](#-getting-started)
  - [🔧 Installation](#-installation)
  - [🤖 Running musicplayer](#-running-musicplayer)
  - [Prisma init](#prisma-init)
  - [Prisma migrate](#prisma-migrate)
  - [Prisma generate](#prisma-generate)
  - [Prisma seed](#prisma-seed)

---


## 📍 Overview



---

## 📦 Features



---


## 📂 Repository Structure

```sh
└── musicplayer/
    ├── .eslintrc.cjs
    ├── index.html
    ├── package-lock.json
    ├── package.json
    ├── prisma/
    │   ├── migrations/
    │   │   ├── 20231228062623_initial_migration/
    │   │   ├── 20231228062928_initial_migration/
    │   │   ├── 20231228063736_initial_migration/
    │   │   └── migration_lock.toml
    │   ├── schema.prisma
    │   └── seed.js
    ├── public/
    ├── src/
    │   ├── App.jsx
    │   ├── components/
    │   │   └── MusicPlayer.jsx
    │   ├── main.jsx
    │   ├── pages/
    │   │   └── Home.jsx
    │   └── styles/
    │       ├── _settings.scss
    │       ├── components/
    │       └── index.scss
    └── vite.config.js

```

---

## 📋 Requirements

---

## 🚀 Getting Started

### 🔧 Installation

1. Clone the musicplayer repository:
```sh
git clone https://github.com/RomainDoyen/musicplayer.git
```

2. Change to the project directory:
```sh
cd musicplayer
```

3. Copy the `.env.example` file to `.env`:
```sh
cp .env.example .env
```

4. Install the dependencies:
```sh
npm install
```

### 🤖 Running musicplayer

```sh
nmp run dev
```

### Prisma init
    
```sh
npx prisma init
```
### Prisma migrate

```sh
npx prisma migrate dev --name init
```
### Prisma generate

```sh
npx prisma generate
```
### Prisma seed 
    
```sh
    npx prisma db seed --preview-feature
```

---

[**Return**](#Top)

---
