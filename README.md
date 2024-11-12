# Tarea05Front-end
# Cálculo de Promedio de Notas

Este proyecto en JavaScript implementa dos funciones para calcular la suma y el promedio de un conjunto de notas. La función de suma calcula la suma de todas las notas en un arreglo, mientras que la función de promedio utiliza la función de suma para obtener el promedio.

## Estructura del Código

El código se compone de dos funciones principales:

1. **sumarNumeros**: Calcula la suma de todas las notas en el arreglo.
2. **promedioNotas**: Utiliza la función `sumarNumeros` para calcular la suma y luego divide el resultado por la cantidad de notas para obtener el promedio.

## Funciones

### `sumarNumeros(notas)`

- **Parámetros**: 
  - `notas` (Array de números): Un arreglo de números que representa las notas.
- **Descripción**: Itera sobre el arreglo `notas` y suma cada valor. 
- **Retorno**: Devuelve la suma total de las notas.

### `promedioNotas(notas)`

- **Parámetros**:
  - `notas` (Array de números): Un arreglo de números que representa las notas.
- **Descripción**: Llama a `sumarNumeros` para obtener la suma total y luego divide la suma entre el número de elementos en el arreglo para calcular el promedio.
- **Retorno**: Devuelve el promedio de las notas.
