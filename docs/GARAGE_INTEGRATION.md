# Garaje dentro del portafolio

Integración local del 21 de septiembre de 2026.

**El portafolio es el sitio principal y profesional.** El garaje es una sección personal en `/garage/`, bajo el mismo origen y dentro del mismo proyecto y compilación. Su acceso es un pequeño icono de llave al pie de página, con el nombre accesible «Área personal» / «Personal area». No hay tarjeta de autos ni entrada del garaje en el menú profesional.

El garaje tiene un botón **Volver al portafolio / Back to portfolio** en el encabezado fijo, visible en escritorio y móvil. Vuelve a `/es/` o `/` según el idioma seleccionado. También se conserva el enlace secundario de regreso junto a las preferencias.

## Archivos y funcionamiento

- Fuente original: `/Users/josue.garza/Documents/scripts/side_projects/Carro/web`. No se modificó durante la integración.
- `src/data/garage.html`: copia del documento HTML original.
- `src/pages/garage/index.astro`: página prerenderizada que incorpora `<base href="/garage/">` para resolver recursos, anclas y descargas, e inserta el botón de regreso y sus recursos de integración.
- `public/garage/`: scripts, estilos, imágenes con créditos, 11 expedientes Markdown y dos PDF técnicos.
- `src/components/SiteFooter.astro`: acceso discreto a la sección personal, sin imágenes ni texto promocional.
- `src/components/SiteNavigation.astro`: navegación profesional y selector EN/ES.
- `public/garage-integration.css` y `.js`: botón de regreso adaptable y actualización de su enlace según el idioma. Permanecen fuera de la copia importada para conservar su mantenimiento independiente.
- La portada muestra su contenido desde el HTML, sin una pantalla vacía de carga que dependa de JavaScript para desaparecer al volver del garaje. Conserva su animación de entrada.
- `docs/GARAGE_IMPORT.json`: tamaño y SHA-256 de los 29 archivos importados.

No se necesitan dependencias nuevas, un segundo servidor, un iframe ni acceso a la carpeta `Carro` para compilar o usar la sección. Conserva el diseño editorial propio del garaje y sus controles de español/inglés, día/noche y MXN/USD, incluido el tipo de cambio editable de referencia. Las guías en inglés mantienen disponibles los expedientes originales en español.

La sección conserva `noindex, nofollow` y se excluye del sitemap. Esto controla la indexación; no constituye autenticación. Esta integración se preparó y verificó localmente, sin publicar el sitio.

## Actualizar el contenido

1. Actualizar los expedientes en el proyecto original `Carro`. Cuando cambien los Markdown, regenerar su web con su `build_content.py`, según las instrucciones de ese proyecto.
2. Desde la raíz de este portafolio, ejecutar:

   ```sh
   npm run sync:garage -- /Users/josue.garza/Documents/scripts/side_projects/Carro/web
   ```

3. Ejecutar `npm run check` y `npm run build`; revisar `/garage/` y su regreso a la portada.

El importador comprueba primero que existan todos los archivos necesarios y conserva los bytes originales. Si encuentra cambios locales en una copia importada, se detiene para evitar sobrescribirlos. También pide reconciliar archivos que hayan desaparecido de la fuente. Para personalizar el contenedor del portafolio, editar el componente o la ruta Astro; para cambiar el contenido del garaje, hacerlo en su fuente y volver a importar.

## Guardado en el navegador

Se conservan las claves `garage.josue.2010.v1` para listas y presupuestos, `garage.preferences.v1` para preferencias y `josue.language` para compartir el idioma con el portafolio. El portafolio tiene rutas completas en inglés y español; la URL determina el idioma de cada página. Entrar al garaje desde una de ellas conserva la preferencia y el botón de regreso sigue el idioma del garaje.

El guardado pertenece al origen del navegador. El antiguo servidor del garaje en el puerto `8768`, el portafolio en `4321` y el dominio publicado tienen almacenamientos separados. La integración no transfiere automáticamente marcas o presupuestos guardados en otro origen. Las exportaciones originales siguen disponibles; los expedientes importados son independientes de esas marcas personales.

## Verificación

- Los 29 archivos importados coinciden con la fuente; los documentos y PDF no fueron reescritos.
- Astro y la compilación de producción completan correctamente; la ruta produce `dist/garage/index.html` y los recursos/descargas necesarios existen en el resultado.
- Acceso exclusivo desde el icono del pie de página y regreso desde el encabezado a la portada correspondiente al idioma.
- Apertura de expedientes, ranking por perfil, persistencia de revisión al recargar y cálculo en MXN/USD.
- Cambio de idioma y tema, conservados al recargar.
- Revisión visual de escritorio y móvil; las marcas e importes de prueba se restablecieron.

La comparación y la información de los autos mantienen la fecha y el alcance de los expedientes originales. Incorporarlos al portafolio no actualiza ni verifica por sí mismo el estado de los vehículos.
