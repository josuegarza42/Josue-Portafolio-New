# Revisión visual del portafolio

Revisión del 20 de septiembre de 2026, basada en el sitio local y el currículum de [FlowCV](https://flowcv.com/resume/its72h4324).

## Lo observado

La identidad oscura y la composición en tarjetas dan una base clara. En la versión inicial, sin embargo, la experiencia laboral quedaba recortada dentro de una altura fija, la introducción y «About me» repetían información, y el reloj tenía más peso visual que los resultados profesionales. El logo dice «Software Developer», mientras que el perfil actual se centra en consultoría, CX y automatización.

## Ajustes incluidos en esta actualización

- Nombre y puesto actual como introducción principal, con un enlace visible al currículum.
- Resumen más breve y sección personal enfocada en formación y forma de trabajo.
- Experiencia con empresa, cargo y periodos completos, sin forzar todo a una sola pantalla.
- Página de trayectoria con experiencia, proyectos, competencias, certificaciones y formación.
- Enlaces con más contraste, estados de foco visibles y contacto sin HTML anidado incorrectamente.
- Paleta morada unificada a petición de Josue, basada en el lavanda del logo (`#d8bffe`), aplicada a botones, enlaces, bordes, mapa y estados de interacción.
- Globo adaptable al contenedor, lista de ocho países y Estados Unidos resaltado.
- Reloj más discreto y hora calculada directamente para America/Mexico_City.

## Propuestas para una siguiente iteración

| Prioridad | Mejora | Aplicación concreta | Beneficio |
| --- | --- | --- | --- |
| 1 | Dar protagonismo a resultados | Una franja de tres datos, atribuida a Qualtrics: más de 30 clientes, TTR reducido hasta 90% y TTFR reducido más de 90%. | Explica el impacto antes de pedir al visitante que lea toda la trayectoria. |
| 1 | Mostrar casos con evidencia | Convertir Firedots y Elaina en casos con problema, contribución, capturas y resultado. Usar material real y autorizado. | Ayuda a entender cómo piensas y qué hiciste personalmente. |
| 2 | Actualizar la identidad gráfica | Evolucionar el sello «Software Developer» a un monograma sencillo o una fotografía profesional. | Alinea la presentación con tu trabajo actual en CX y consultoría. |
| 2 | Reordenar la portada | Mantener las tarjetas, pero dar más espacio a impacto y proyectos; llevar reloj y viajes a un bloque personal secundario. | Mejora la lectura para reclutadores y posibles clientes. |
| 3 | Preparar una portada social propia | Crear una imagen de compartir con nombre, especialidad y dominio. | Hace que enlaces de LinkedIn y mensajería sean reconocibles y coherentes con el sitio. |

## Dirección recomendada

Conservar la personalidad del diseño en tarjetas, con una jerarquía más editorial: **quién eres → qué impacto has tenido → cómo trabajas → cómo contactarte**. Empezaría por resultados y casos; después ajustaría el logo y la imagen para compartir. Las propuestas anteriores siguen pendientes y son distintas de las correcciones ya aplicadas.


## Integración de la trayectoria completa de LinkedIn

- Se conserva el fondo oscuro y la paleta morada. Las superficies tienen diferencias suaves de luminosidad y un matiz morado para separar el contenido.
- La portada presenta tres experiencias seleccionadas y accesos al inventario completo; no intenta mostrar todo a la vez.
- `/blog` organiza 10 experiencias, 12 proyectos, 6 reconocimientos y 23 credenciales, además de comunidad, voluntariado, formación e idiomas.
- Un menú lateral fijo en escritorio se convierte en navegación horizontal en móvil. Cada sección tiene una introducción breve y una jerarquía visual común.
- Los detalles se abren con controles HTML nativos; los puestos anteriores y proyectos adicionales se agrupan. Las 23 credenciales se distribuyen en cuatro grupos.
- Los reconocimientos enlazan al proyecto correspondiente y abren las entradas aunque estén en una colección cerrada.
- Studevs conserva la autoría como cofundador y explica el relevo a estudiantes activos. Softdone usa la fecha real reconciliada con el propietario.
- El contenido es una importación editorial mantenida en `src/data/career.ts`; no depende de una sesión de LinkedIn ni se sincroniza automáticamente.
