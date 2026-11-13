# MatchessApp

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

## Stack

- Monorepo con [Nx](https://nx.dev)
- Backend: NestJS (`apps/api`)
- Frontend: Angular (`apps/web`)
- Código compartido: `libs/shared`

## Requisitos

- Node.js (usa la versión que te pida Angular 22; revisa con `node -v`)
- npm

## Instalación

```bash
git clone https://github.com/IvanCalderonRauda/MatChess.git
cd NOMBRE-DEL-REPO
npm install
```

## Comandos

| Comando | Descripción |
|---|---|
| `npm run start:api` | Levanta la API en modo desarrollo |
| `npm run build:api` | Compila la API |
| `npm run test:api` | Corre las pruebas de la API |
| `npm run start:web` | Levanta el frontend Angular |
| `npm run build:web` | Compila el frontend |
| `npm run test:web` | Corre las pruebas del frontend |

Por defecto la API queda en `http://localhost:3000/api` y el frontend en `http://localhost:4200`.

## Estructura

```
apps/
  api/        # Backend NestJS
  api-e2e/    # Pruebas e2e de la API
  web/        # Frontend Angular
libs/
  shared/     # Código compartido entre front y back
```

