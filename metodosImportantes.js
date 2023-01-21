.sort() : ordena los elementos de un array y retorba el arreglo ordenado. 
          Por defecto ordeba segun la posición del valor del string
          de acuerdo a su valor Unicode. Sintaxis :
.sort() : ((firsEl, SecondEl) => [compareFunction] )
// return;                         firstEl  SecondEl
.split("") : se puede agregar parametros para filtrar 
.join("")
.reverse()
.map() : A veces es necesario tomar un arreglo y aplicar algún 
        procedimiento a sus elementos para obtener un nuevo arreglo con
        elementos modificados. En lugar de iterar manualmente sobre el 
        arreglo usando un bucle, puedes simplemente usar el método
        incorporado Array.map(). 
        El método Array.map() te permite iterar sobre un arreglo y modificar
        sus elementos utilizando una función callback. La función callback se
        ejecutará entonces en cada uno de los elementos del arreglo.
        Sintaxis : array.map(x => funcionCallBack);
.endsWith(argumentToEvalue) : El método endsWith() determina si una cadena 
                              de texto termina con los caracteres de una cadena indicada, 
                              devolviendo true o false según corresponda.

//TIPO OBJETO :  SETT 
[... new Set(x)] : El objeto Set le permite almacenar valores únicos (sin repetir) de cualquier 
                   tipo, ya sea valores primitivos o referencias a objetos.

let sinElementosDuplicados = [... new Set(nombreDelArreglo)] // sintaxis    

//OPERADOR TERNARIO : 
El operador condicional (ternario) es el único operador en JavaScript que tiene tres operandos. 
Este operador se usa con frecuencia como atajo para la instrucción if.

     condicion   ?        expresion1      :        expresion2           //sintaxis
// Una expresión          Expresión con valores de algún tipo.
// que se evalúa 
// como true o false.

Si la condición es true, el operador retorna el valor de la (expr1)de lo contrario,devuelve el valor (expr2).
