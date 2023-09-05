
export function PosInicial (posicionX, posicionY, orientacion){

return [posicionX, posicionY,orientacion];

}

export function VerificarFormatoEntrada(posicionX, posicionY, orientacion) {
    // Verifica si posicionX y posicionY son numeros enteros y orientacion es una cadena
    const esEnteroX = Number.isInteger(posicionX);
    const esEnteroY = Number.isInteger(posicionY);
    const esCadenaOrientacion = typeof orientacion === 'string';
  
    // Verifica que las condiciones se cumplan
    if (esEnteroX && esEnteroY && esCadenaOrientacion) {
      // Verifica que la orientación sea una de las opciones validas
      const orientacionesValidas = ["N", "S", "O", "E"];
      if (orientacionesValidas.includes(orientacion)) {
        return true; // El formato es válido
      }
    }
  
    return false; // El formato no es válido
  }

  export function Comands(comandos)
{
    return comandos;
}