# CV personal — Andrés Albornoz

Sitio personal construido con React, Vite y React Router. Reúne una breve
presentación, las tecnologías que estoy aprendiendo, mis certificaciones y mis
datos de contacto.

## Contenido

- **Inicio:** presentación, resumen del perfil, tecnologías y certificados.
- **Contacto:** correo, GitHub y ubicación.
- **Portafolio:** enlace a los repositorios de GitHub.

## Desarrollo

```bash
npm install
npm run dev
```

## Scripts

| Comando           | Descripción                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Servidor de desarrollo con HMR.          |
| `npm run build`   | Compila el sitio en `dist/`.             |
| `npm run preview` | Previsualiza la compilación de producción. |
| `npm run lint`    | Revisa el código con ESLint.             |

## Despliegue

El sitio se publica en GitHub Pages mediante el workflow
`.github/workflows/deploy.yml`, que se ejecuta en cada push a `main`.

Para habilitarlo, en GitHub ve a **Settings → Pages → Source** y selecciona
**GitHub Actions**. El sitio quedará disponible en
<https://andres-albornoz.github.io/>.

## Estructura

```text
src/
  assets/          Imágenes y certificados
  core/            Header, Footer, Layout y Certificados
  hooks/           Hook useFetch
  pages/           Inicio y Contacto
  App.jsx          Rutas de la aplicación
  index.css        Estilos y tema claro/oscuro
  main.jsx         Punto de entrada
```
