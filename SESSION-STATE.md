# SESSION-STATE - Visión Express Landing

**Fecha:** 2026-11-24  
**Proyecto:** /home/l88macbeth/Documentos/vision-express-landing  
**Repositorio:** https://github.com/lmacbeth88-design/landingVisionEspress.git (rama `main`)  
**Estado:** Landing funcional y publicada. Copy v2 aplicado, alianza FENIKA con modal, rutas relativas para GitHub Pages, captcha activado. Pendiente: correo empresarial definitivo y confirmación de tiempo de instalación.

## Trabajo realizado hoy

### Copy y contenido
- Aplicado copy v1 (`Visión Express copy final para leads.md`) y luego copy v2 recalibrado (`VISION_EXPRESS_COPY_v2.md`).
- Meta tags actualizados: title, description, keywords, og.
- Hero: subtítulo con prueba de vida activa (giro + parpadeo), STPS en proceso de definición; indicadores reemplazados.
- Sección "Qué incluye": respaldo cifrado automático.
- Precios: nota de estaciones en Pequeña; pie con licencia anual, actualizaciones STPS y facturación enero 2027.
- FAQ ampliada y ajustada (foto o video, respaldo automático, "¿Cuándo se factura?").
- Contacto: se quitó "Garantía de cumplimiento transparente" y "Redes: agregar links directos"; ahora "Atención en horario laboral".
- Claims suavizados: "Nueva exigencia de registro electrónico de jornada, en proceso de definición por la STPS"; "Procesamiento local en tu red"; "Instalación en sitio" (pendiente confirmar tiempo real).
- Redundancias corregidas: tarjeta Trazabilidad con texto distinto, eyebrow "¿qué incluye?" → "Incluido", eyebrow "Solución en 3 pasos" → "Proceso".

### Alianza FENIKA
- Botón "En alianza con FENIKA" en footer que abre modal con información completa.
- Modal con texto de FENIKA y aclaración de que FENIKA no tiene acceso a datos biométricos.
- Footer actualizado: "FENIKA: diagnóstico de jornada laboral e implementación. Software y soporte técnico: Lexium Forge IA."

### Limpieza y rutas
- Eliminado código huérfano `src/counter.js`.
- Rutas absolutas convertidas a relativas (`./...`) para GitHub Pages.
- `vite.config.js` mantiene `base: '/landingVisionEspress/'`.
- Build verificado con rutas prefijadas correctamente.

### Formulario
- Destino actual: `lmacbeth88@gmail.com` vía FormSubmit.co.
- `_captcha` cambiado a `true` para reducir spam.
- Pendiente: activar correo en FormSubmit la primera vez y, si aplica, cambiar a correo empresarial.

## Commits recientes
- `9c70db6` Ajusta rutas, claims, redundancias y captcha del formulario
- `90ec5ff` Agrega botón/modal de alianza con FENIKA y actualiza texto del footer
- `1af2e6f` Aplica copy v2 recalibrado y elimina código huérfano (counter.js)
- `3798956` Aplica copy final para leads en landing y agrega documento de copy

## Archivos clave
- `index.html` - Landing completa
- `src/main.js` - Efectos, video, formulario, modal FENIKA
- `src/style.css` - Estilos y efectos
- `vite.config.js` - Base para GitHub Pages
- `VISION_EXPRESS_COPY_v2.md` - Fuente del copy v2
- `SESSION-STATE.md` - Este archivo

## Pendiente
- [ ] Activar correo en FormSubmit y decidir correo empresarial definitivo.
- [ ] Confirmar con prueba real el tiempo de instalación ("Instalación en sitio").
- [ ] Revisar OG description si se quiere alinear con el nuevo copy.
- [ ] Opcional: agregar links directos de redes si se requieren.

## Comandos para desarrollo
```bash
cd /home/l88macbeth/Documentos/vision-express-landing
npm run dev     # Desarrollo
npm run build   # Producción
npm run preview # Preview build
```
