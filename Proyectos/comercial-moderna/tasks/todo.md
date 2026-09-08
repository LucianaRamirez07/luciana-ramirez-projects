# Mody, la mascota, junto al botón de WhatsApp

## Plan
- [x] Preparar el asset: recortar el margen transparente de `mody.png` y optimizarlo a `public/mody.png`
- [x] Agregar keyframe `float` a `tailwind.config.ts`
- [x] Montar a Mody dentro de `WhatsAppButton.tsx`, a la izquierda del botón verde
- [x] Verificar: lint, build, tests y revisión visual en escritorio y móvil

## Review

Mody vive dentro de `src/components/ui/WhatsAppButton.tsx`, no como un elemento
flotante aparte. Los dos comparten un contenedor `flex items-end`, así que se
alinean por la base y no pueden chocar en ningún ancho de pantalla. Como el
componente se monta en `layout.tsx`, Mody acompaña al botón en todo el sitio.

Decisiones:
- La imagen original no se voltea: el pulgar arriba de Mody ya apunta hacia la
  derecha, o sea hacia el botón.
- Mody es decorativo para lectores de pantalla (`alt=""`, `aria-hidden`,
  `tabIndex={-1}`). Al hacerle clic abre el mismo menú de contactos que el
  botón, pero la acción ya está expuesta por el botón de al lado — anunciarla
  dos veces sería ruido.
- La animación de flotación usa `motion-safe:`, así que se apaga sola para
  quien tenga activado "reducir movimiento".
- Presentación: Mody va dentro de un círculo blanco con borde degradado de
  marca (`bg-brand-gradient` de 3px). Elegido por Luciana sobre la versión de
  cuerpo libre y sobre un avatar recortado a la cara.
- Tamaños del círculo: 78px en móvil y 92px desde `sm`. El móvil se subió de
  62px a 78px porque a ese tamaño la figura completa dentro del círculo dejaba
  de distinguirse.

Pendiente sin relación con este cambio: `npm run lint` reporta 2 errores
preexistentes de `react-hooks/set-state-in-effect` en `ProductGrid.tsx` y
`MetricsSection.tsx`.
