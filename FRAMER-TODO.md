# Cambios pendientes en Framer — julian.casa

El sitio está hecho en Framer y los módulos de código se embeben adentro. Lo que
sigue **no se puede hacer desde este repo**: hay que aplicarlo en el editor de Framer.

Los arreglos de `booking.html` (botón, validación, slots) ya están hechos acá y se
despliegan solos una vez que el archivo esté publicado en la URL que usa el embed.

---

## 1. Número de teléfono (PDF, pág. 3)

Cambiar el número que aparece en la web por:

```
9 11 7152-0308
```

Buscar en Framer todas las apariciones del número viejo. Revisar también:

- el link de WhatsApp flotante (`https://wa.me/5491171520308`)
- cualquier `tel:` en el footer o en la sección de contacto
- el texto plano en la página de contacto

## 2. Calendario en el hero (PDF, pág. 1)

**Ya hecho en código:** `hero-calendar.html` es un mini-calendario compacto para
el hero (solo el mes, con un puntito naranja en los días que tienen turnos libres).
No agenda ahí mismo: al tocar un día lleva a `/#agendar` (donde está el widget
completo `booking.html`) pasando el día elegido.

En Framer:

- **Desktop:** poner un Embed con `src="https://juliancasa.vercel.app/hero-calendar.html"`
  en el recuadro rojo del hero, a la derecha del logo. Ancho ~380px, alto ~360px
  (publica su altura por `postMessage`, igual que `booking.html`).
- **Mobile:** en vez del embed, un botón "Agendá una visita" que lleve a `/#agendar`.
- Ponerle el `id="agendar"` a la sección de agendamiento para que el ancla funcione.
- El mini-calendario avisa el día elegido de dos formas: cambia el hash del top a
  `#agendar?date=YYYY-MM-DD` **y** manda `postMessage({type:"hero:agendar", date})`.
  `booking.html` ya lee ese `?date=` y abre el día preseleccionado. Si Framer come
  el query string en el ancla, se puede escuchar el `postMessage` en un Code
  Component y hacer el scroll a mano.

En el mismo mockup Guille marca **"Mover nombre y logo acá"**: el logo va a la
izquierda, liberando la derecha para el calendario.

## 3. CTAs para agendar a medida que bajás (PDF, pág. 1)

Agregar botones "Agendar una visita" repartidos en la página, apuntando a
`/#agendar`. El PDF marca la sección "PROYECTO" (la de las flores) como uno de
los lugares. Poner al menos 2 o 3 a lo largo del scroll.

## 4. Altura del iframe del embed

`booking.html` ahora publica su altura al contenedor padre por `postMessage`
cada vez que cambia de paso (calendario → formulario → confirmación).

Si el embed de Framer quedó con una altura fija, el formulario se corta. Opciones:

- Poner el embed en altura automática, o
- Dejar una altura fija de **720 px**, que es la que necesita el paso más alto.

---

## Verificación después de publicar

1. Abrir la sección de agendar en desktop y en mobile.
2. Elegir un día hábil y un horario, y tocar "Continuar".
3. **El botón "CONFIRMAR REUNIÓN" tiene que estar habilitado** (naranja, clickeable).
   Ese era el bug que frenaba la campaña.
4. Probar a propósito: letras en el teléfono y un email sin arroba. Tienen que
   aparecer los errores en rojo debajo de cada campo.
5. Confirmar una reunión de prueba y chequear que llegue el mail con el link de Meet.
