# DriveHub — Frontend Angular

Proyecto académico para administrar una pequeña flota de vehículos. Permite registrar conductores y vehículos, consultar sus detalles y revisar movimientos de ejemplo desde una pantalla de inicio.

## Tecnologías

- Angular con componentes standalone y TypeScript.
- HTML, CSS y Bootstrap.
- Formularios basados en plantillas con FormsModule, ngModel y NgForm.
- Angular Router para navegación y rutas dinámicas.
- Servicios mock con datos en memoria.
- Git y GitHub para control de versiones.

## Funcionalidades

- Listado, registro y detalle de conductores.
- Validación del formulario y rechazo de documentos duplicados.
- Listado, registro y detalle de vehículos.
- Normalización de placas a mayúsculas y rechazo de placas duplicadas.
- Asignación opcional de un conductor activo al registrar un vehículo.
- Navegación del detalle del vehículo al perfil de su conductor.
- Inicio con selección de un vehículo o de toda la flota.
- Filtrado de movimientos mock y cálculo de ingresos, gastos y balance según la selección.
- Mensajes para identificadores inexistentes y para selecciones sin movimientos.
- Diseño responsive para escritorio, tableta y móvil.

## Alcance y límites

Los registros se almacenan temporalmente en servicios mock. Se conservan al navegar dentro de la aplicación, pero se restablecen al recargar la página o reiniciar la aplicación. No existe persistencia en una base de datos ni conexión HTTP con el backend Java.

Gasolina y Mantenimiento son formularios visuales: sus botones de guardado están deshabilitados. Los movimientos del inicio son datos de ejemplo asociados inicialmente al vehículo con id 1. Registrar un conductor o un vehículo no crea movimientos financieros automáticamente.

El proyecto no consume una API externa. La validación actual de placas utiliza el formato del ejercicio: tres letras y tres números.

## Ejecución local

Clona este repositorio y abre una terminal en la carpeta que contiene package.json y angular.json. Instala las dependencias registradas en package-lock.json:

```bash
npm ci
```

Inicia la aplicación:

```bash
npm start
```

Abre http://localhost:4200. Para detener el servidor, presiona Ctrl + C.

Para comprobar la compilación:

```bash
npm run build
```

## Componentes y rutas

| Componente | Ruta | Función |
|---|---|---|
| Inicio | /inicio | Selección de vehículos y resumen de movimientos. |
| Gastos | /gastos | Selección de categoría. |
| Gasolina | /gasolina | Formulario visual de combustible. |
| Mantenimiento | /mantenimiento | Formulario visual de mantenimiento. |
| Conductores | /conductores | Listado de conductores. |
| ConductorForm | /conductores/nuevo | Registro de conductor. |
| ConductorDetalle | /conductores/:id | Detalle del conductor identificado en la URL. |
| Vehiculos | /vehiculos | Listado de vehículos. |
| VehiculoForm | /vehiculos/nuevo | Registro y asignación opcional. |
| VehiculoDetalle | /vehiculos/:id | Detalle y consulta del conductor asignado. |

La ruta vacía redirige a Inicio. La ruta ** captura direcciones no reconocidas y redirige a Inicio. Las rutas estáticas nuevo se declaran antes de las rutas con :id.

Son diez componentes de pantalla, además del componente principal App.

## Interfaces y servicios

Conductor define id, nombre, documento, teléfono, correo y estado activo. Vehiculo define id, placa, marca, modelo, año, kilometraje, estado y conductorId. Movimiento, definido en su archivo de servicio, describe cada ingreso o gasto y el vehículo al que pertenece.

Las interfaces describen la estructura de los objetos y permiten comprobaciones de tipos durante el desarrollo; la validación de lo ingresado por el usuario se realiza por separado en los formularios y la lógica de registro.

| Servicio | Responsabilidad |
|---|---|
| ConductorService | Listar, buscar por id y crear conductores con documento único. |
| VehiculoService | Listar, buscar por id y crear vehículos con placa única. |
| MovimientoService | Entregar los movimientos de ejemplo. |

Los componentes solicitan estos servicios mediante inject(). En los detalles, ActivatedRoute obtiene el id de la URL y el servicio busca el objeto correspondiente. Se utiliza snapshot para el recorrido listado → detalle.

## Responsive

El diseño combina las columnas de Bootstrap con media queries de CSS. Los listados usan col-12 col-md-6 col-lg-4; los campos utilizan col-12 col-sm-6 cuando corresponde. El menú, los botones, los encabezados y la tarjeta del conductor tienen ajustes específicos para pantallas pequeñas.

## Control de versiones

- main: versión integrada.
- feature/conductores: desarrollo del módulo de conductores.
- feature/vehiculos: desarrollo del módulo de vehículos.

Para consultar las ramas y el historial:

```bash
git branch -a
git log --oneline --graph --decorate --all -20
```

## Comprobación manual

1. Registrar un conductor activo con documento nuevo.
2. Navegar a Vehículos sin recargar la página.
3. Registrar un vehículo y seleccionar ese conductor.
4. Comprobar su detalle y el enlace al perfil del conductor.
5. Verificar el rechazo de documentos y placas duplicados.
6. Consultar /conductores/999 y /vehiculos/999.
7. Cambiar la selección de Inicio y verificar sus movimientos y totales.
8. Revisar las pantallas a 1366, 768 y 390 píxeles de ancho.

Estos pasos describen la comprobación manual. No se incluye una suite de pruebas automatizadas.

