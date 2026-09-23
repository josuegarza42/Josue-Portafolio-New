# Inglés y español

El portafolio conserva sus rutas originales en inglés y añade sus equivalentes bajo `/es`. Las páginas profesionales, trayectoria completa, viajes y diez artículos de detalle tienen contenido en ambos idiomas.

## Comportamiento

- EN/ES son enlaces normales, utilizables sin JavaScript. Mantienen el tipo de página y el identificador de artículo; un script pequeño conserva también el ancla de sección al cambiar de idioma.
- Los textos se resuelven en Astro antes de enviar el HTML. No se sustituye el contenido mediante traducción automática en el navegador.
- Cada página declara su `lang`, URL canónica, enlaces alternativos `hreflang` y metadatos en el idioma correspondiente.
- La URL decide el idioma. El sitio guarda esa elección en `josue.language` para compartirla con la sección personal; si el navegador bloquea el almacenamiento, las rutas y el selector siguen funcionando.
- Las páginas mantienen los IDs de experiencias, proyectos y secciones. En español, los enlaces internos apuntan a la ruta española; los enlaces externos conservan su destino original.

## Mantener contenido

`src/lib/i18n.ts` centraliza el idioma, las rutas y la localización de datos. `src/data/translations/es.json` contiene los textos de interfaz y las traducciones del perfil estructurado. Nombres propios, marcas, tecnologías, identificadores y enlaces se conservan cuando corresponda.

La colección `blog` lee `src/data/blog/`; `blogEs` lee `src/data/blog-es/`. Las dos comparten los mismos diez identificadores. Al modificar un artículo, actualizar su equivalente manteniendo fechas, cifras y alcance factual. `ProfileArticle.astro` renderiza ambas colecciones con la misma estructura.

Los periodos y fechas de emisión se presentan en español mediante el formateador de meses. El reloj y las fechas completas usan `es-MX` o `en-US`. Los nombres e identificadores usados por el mapa son independientes de las etiquetas traducidas.

## Verificación

Ejecutar `npm run check` y `npm run build`. Revisar portada, trayectoria, un detalle y viajes en ambos idiomas; cambiar EN/ES desde un artículo y una sección. Comprobar enlaces internos, metadatos, vista móvil y navegación por teclado.

El portafolio debe conservar un único acceso discreto a la sección personal, en el pie de página, sin tarjetas de autos ni entrada del garaje en su menú. El botón de regreso del garaje debe estar visible en su encabezado y conducir a la portada del idioma seleccionado.
