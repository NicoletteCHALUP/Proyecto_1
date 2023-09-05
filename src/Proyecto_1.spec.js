
import {PosInicial,VerificarFormatoEntrada,Comands,VerificarComandos,ComandoControlarAuto,ComandosCoordenadas,MoverAuto} from "./Proyecto_1";

describe("Proyecto 1 auto funcionamiento de movimientos", () => {

    it("Devolver pos Inicial", () => {
        expect(PosInicial(1,2,'N')).toEqual([1,2,'N']);
      });
    
    it("Deberia Validar que la posicion inicial tenga un formato correcto", () => {
        expect(VerificarFormatoEntrada(1,2,"N")).toEqual(true);
      });

    it("Deberia Retornar Comando Ingresado por el usuario", () => {
        expect(Comands("IAIAIAIAA")).toEqual("IAIAIAIAA");
      });

    it("Deberia Validar comandos posibles para controlar el auto que son: I, D, A (Izquierda, Derecha, Avanzar) Si es Correcto TRUE", () => {
        expect(VerificarComandos("IAIAIAIAA")).toEqual(true);
      });
    
    it("Deberia Validar comandos posibles para controlar el auto que son: I, D, A (Izquierda, Derecha, Avanzar) Si es INcorrecto FALSE", () => {
        expect(VerificarComandos("IAIAIARTA")).toEqual(false);
      });

    it("Deberia Poder ejecutar el comando 'izquierda", () => {
        expect(ComandoControlarAuto("I","N")).toEqual("E");
      });
    it("Deberia Poder ejecutar el comando 'Derecha", () => {
        expect(ComandoControlarAuto("D","N")).toEqual("O");
      });

    it("Deberia Poder ejecutar el comando Segun las coordenadas de Orientacion dadas", () => {
        expect(ComandosCoordenadas(5,1,"N")).toEqual([5,1]);
      });

    it("Deberia - mostrar la posicion final donde se moveria el auto ", () => {
        expect(MoverAuto("IAIAIAIAA",1,2,"N",5,5)).toEqual([1,3,"N"]);
      });
  });
  