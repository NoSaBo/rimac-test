## Sustentación del proyecto

Este proyecto fue desarrollado como parte de un reto técnico para Rimac, con el objetivo de crear una aplicación web que permita a los usuarios seleccionar y visualizar diferentes planes de seguros. La aplicación está construida utilizando Next.js y React, lo que garantiza un rendimiento óptimo y una experiencia de usuario moderna y responsiva.

## Funcionalidades implementadas

- Redireccion a pagina principal si se trata de acceder a la ruta /planes.
- Uso de APIs y acceso a variables de entorno en el lado de servidor y no del cliente.
- Uso de context para el manejo de datos a traves de diferentes rutas y componentes.
- Uso de context para la interaccion con agent para identificar el tipo de dispositivo.
- Distribucion de componentes para escalabilidad.
- Se priorizo la funcionalidad sobre los detalles de UI.

## Funcionalidades no finalizadas

- Barra de progreso y slider.
- Componentes personalizados como inputs en el form, y cards en ruta /planes.
- Carga de multiples fuentes.
- Carga de iconos.

### Decisiones técnicas

- **Next.js**: Se eligió Next.js por su soporte para renderizado del lado del servidor (SSR) y generación de sitios estáticos (SSG), lo que mejora el SEO y la velocidad de carga.
- **Componentización**: La interfaz está dividida en componentes reutilizables para facilitar el mantenimiento y la escalabilidad.
- **Context API**: Se utiliza para manejar el estado global de la aplicación, como la selección de planes y los datos del usuario.
- **TypeScript**: Se emplea para asegurar la robustez del código y reducir errores en tiempo de desarrollo.
- **Responsive Design**: La aplicación es completamente responsiva, adaptándose a dispositivos móviles y de escritorio.

### Funcionalidades generales

- Consulta y visualización de planes de seguros desde una API externa.
- Selección de planes y aplicación de descuentos.
- Resumen detallado del plan seleccionado junto con los datos del usuario.
- Manejo de estados de carga y errores para mejorar la experiencia de usuario.

---