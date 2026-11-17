# Class of 2026

Invitación web estática para la fiesta de colación, construida con Astro.

## Desarrollo local

```bash
npm install
npm run dev
```

## Cambios habituales

- Editá `src/data/siteContent.ts` para cambiar el título, la frase o el cierre.
- Editá `src/data/events.ts` para modificar fechas, lugares y enlaces de Maps.
- Editá `src/data/graduates.ts` para agregar, quitar o corregir nombres.
- Reemplazá o agregá fotos en `images/` y actualizá la lista en `src/components/Gallery.astro`.
- Modificá los colores y tipografías desde las variables de `src/styles/global.css`.

## Producción

```bash
npm run build
```

La salida lista para publicar queda en `dist/`.

## GitHub Pages

Este proyecto está configurado para el repositorio `class-of-2026` del usuario `jazgamarra`.

La URL esperada será:

```text
https://jazgamarra.github.io/class-of-2026
```

El workflow de GitHub Actions se encuentra en `.github/workflows/deploy.yml` y se ejecuta automáticamente cada vez que se hace push a la rama `main`.

Para completar la publicación:

1. Crear el repositorio `class-of-2026` en GitHub.
2. Subir el proyecto a la rama `main`.
3. Ir a `Settings > Pages`.
4. Seleccionar `GitHub Actions` como fuente de publicación.
5. Revisar el workflow desde la pestaña `Actions`.
