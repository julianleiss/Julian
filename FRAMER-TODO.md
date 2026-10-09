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

## 2.a Hero: el título ahora vive DENTRO de la tarjeta (9 Oct)

`booking-hero.html` (el embed del hero) ahora trae su propio título
"Agendá una llamada o visita comercial al proyecto" (texto aprobado por el cliente),
un botón "Próximo horario" que lleva directo al formulario, y marca los días con
horarios. **Si en Framer hay un texto suelto arriba del embed del hero, borrarlo**
para que no se repita.

## 2.b Texto arriba del calendario (feedback Dan + Guille, 22–25 Sep)

Dan: *"Falta agregar de qué va la agenda"*. Guille, más concreto: que en la home,
**antes del calendario**, diga de qué es ese calendario.

Texto pedido por Guille, literal:

```
Agendá una visita a Julián
```

Dan había propuesto la variante "Agendá tu visita a obra". Ahora que el widget
pregunta la modalidad (Meet o visita a obra), conviene el texto de Guille, que
no promete una sola de las dos.

Va como texto de Framer arriba del Embed, tanto en la home como en `/agendar`.

> **Actualización (8 oct):** Guille pidió el texto final, que **reemplaza** al de arriba:
>
> ```
> Agendá una llamada o visita comercial al proyecto
> ```
>
> Cambiarlo en Framer (home y `/agendar`). Es solo texto de Framer: el widget no lo contiene.

---

## 3. CTAs para agendar a medida que bajás (PDF, pág. 1)

Agregar botones "Agendar una visita" repartidos en la página, apuntando a
`/#agendar`. El PDF marca la sección "PROYECTO" (la de las flores) como uno de
los lugares. Poner al menos 2 o 3 a lo largo del scroll.

## 3.b Modalidad y precios — YA HECHOS EN CÓDIGO

Los otros dos pedidos de ese hilo ya están resueltos en `booking.html` y no
requieren tocar Framer:

- **Modalidad (Dan):** en el paso 2 hay un selector "¿Cómo preferís la reunión?"
  con Google Meet (por defecto) o Visita a obra. Viaja al backend dentro de
  `notes`, como primera línea: `Modalidad: Visita a obra`. No se agregó un campo
  nuevo al POST para no arriesgar un 422 contra `api.cs-arquitectura.com`.
  Si el equipo quiere la modalidad como campo estructurado en el CRM, hay que
  coordinarlo con quien mantiene esa API.
- **Precios (Guille):** justo arriba de "CONFIRMAR REUNIÓN" aparece el bloque
  "Valores de referencia" con los cuatro rangos. Si la persona eligió un tipo de
  ambiente, esa fila se resalta en naranja.

Los valores están hardcodeados en el HTML; cuando cambien, se editan ahí.

---

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
