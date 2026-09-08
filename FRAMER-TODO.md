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

En desktop: mostrar el embed del calendario dentro del hero, en el recuadro rojo
que marca el PDF, a la derecha del logo.

En mobile: en vez del calendario embebido, un botón que lleve a `/#agendar`.
Ponerle el `id="agendar"` a la sección de agendamiento para que el ancla funcione.

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
