# Para el dev — arreglo del botón de agendar (julian.casa)

Contexto corto: el botón **"Confirmar reunión"** del widget de agendamiento estaba
muerto, nadie podía reservar y por eso se frenó la campaña de ads. Ya está
arreglado. Esto explica qué se hizo y qué falta.

**Rama:** `fix/booking-button` (ya pusheada a `github.com/julianleiss/Julian`)
**PR:** https://github.com/julianleiss/Julian/pull/new/fix/booking-button
**Archivo tocado:** `booking.html` (el módulo que se embebe en Framer)

---

## 1. Qué estaba roto y por qué

El widget de Cloudflare Turnstile (el anti-bot) tenía **la sitekey mal escrita**.
Le faltaba una `A` y tenía una `I` mayúscula donde va una `l` minúscula:

```
0x4AAAAADrgY0jZ09Qpl0IO    ← estaba así (23 chars, inválida)
0x4AAAAAADrgY0jZ09Qpl0lO   ← la correcta (24 chars)
```

Además el widget declaraba `data-size="invisible"`, que **no es un valor válido**
(Turnstile acepta `compact`, `flexible` o `normal`).

Las dos cosas juntas hacían que Turnstile fallara con `400020` en consola. Y como
el botón se habilitaba **únicamente** dentro del callback de éxito del captcha, un
captcha roto dejaba el formulario permanentemente muerto.

## 2. Qué se cambió

- Sitekey corregida y `appearance="interaction-only"` (solo desafía si Cloudflare
  lo pide). Se agregaron los callbacks de error y expiración.
- **El botón ya no depende del captcha para habilitarse.** Se habilita al entrar
  al paso 2, antes de cualquier cosa que pueda tirar excepción. Si Turnstile
  falla, la reserva igual se envía y decide la API. Esto es deliberado: es
  preferible un lead sin verificar que un formulario muerto.
- **Validación real de teléfono**: exige 8–15 dígitos y limpia letras al pegar,
  autocompletar o tipear desde el teclado del celular. El `onkeypress` anterior
  no cubría ninguno de esos casos (el cliente pudo escribir letras en el campo).
- **Email** exige TLD alfabético. Los errores salen inline debajo de cada campo.
- Se agregó el select **"¿Qué ambientes te interesan?"** que pedía el cliente.
- **Bug de timezone**: la API agrupa slots por día **UTC** y Buenos Aires es
  UTC-3, así que a cada día le faltaban las últimas 3 horas y le sobraban slots
  del día anterior. Ahora se pide una ventana de ±1 día y se filtra por día local,
  descartando horarios ya pasados.
- Alto del iframe por `postMessage` (el widget vive embebido en Framer) y layout
  mobile (slots en 2 columnas, campos apilados, inputs de 16px para que iOS no
  haga zoom al enfocar).

## 3. Qué falta hacer — y acá sí hace falta alguien con acceso

### 3.1 Mergear y republicar (imprescindible)

El arreglo **no llega a los visitantes** hasta que se mergee a `main` y la URL que
usa el embed de Framer sirva el archivo nuevo. Si el embed apunta a GitHub Pages
desde `main`, con el merge alcanza. Si apunta a otro lado, hay que republicar ahí.

### 3.2 La secret key de Turnstile (opcional, mejora la protección)

Julián tiene el par de claves. La **sitekey** ya está en `booking.html`, que es
donde va: es pública por diseño.

La **secret key NO va en este repo**. `booking.html` se descarga al navegador de
cada visitante, así que cualquiera podría leerla. Va en el backend de
`api.cs-arquitectura.com`, que es quien recibe el `turnstile_token` en el POST a
`/api/public/v1/bookings` y debería validarlo contra:

```
POST https://challenges.cloudflare.com/turnstile/v0/siteverify
     secret=<la secret key>   response=<el turnstile_token que manda el form>
```

Hoy el form manda el token igual. Si el backend todavía no lo valida, el captcha
no está protegiendo nada — pero **nada se rompe**, simplemente entra spam potencial.

Nota: la secret se compartió por WhatsApp/chat, así que conviene rotarla en el
panel de Cloudflare al terminar de configurar el backend. No es urgente.

### 3.3 Cambios en Framer

Están en `FRAMER-TODO.md`: cambiar el teléfono a **9 11 7152-0308**, poner el
calendario en el hero (con botón a `/#agendar` en mobile) y sumar CTAs de agendar
a lo largo del scroll. Eso se hace en el editor de Framer, no en este repo.

---

## 4. Cómo verificar que quedó bien

Después de publicar, entrar a la sección de agendar (probar en desktop y mobile):

1. Elegir un día hábil y un horario, tocar **Continuar**.
2. **El botón "CONFIRMAR REUNIÓN" tiene que estar naranja y clickeable.** Ese era
   el bug que frenaba la campaña.
3. Probar a propósito: letras en el teléfono, y un email sin arroba. Tienen que
   aparecer los errores en rojo debajo de cada campo.
4. Confirmar una reunión de prueba y chequear que llegue el mail con el link de Meet.
5. Abrir la consola del navegador: **no debería aparecer más el error `400020`**.

Si el formulario se ve cortado dentro de Framer, el embed quedó con altura fija:
ponerlo en altura automática o fijarlo en **720 px**.

---

## 5. Sobre los tests

El repo no tiene suite (son archivos estáticos sueltos, sin build). La verificación
se hizo con jsdom + Node: 36 casos cubriendo la validación de campos, el flujo del
botón con Turnstile roto/ausente/erroreando, y el filtrado de slots contra la API
real. Todos pasan. Lo único que no se pudo probar es el render visual del captcha,
porque Turnstile valida contra los dominios permitidos y `localhost` no es
`julian.casa` — eso se confirma recién en producción (punto 5 de arriba).
