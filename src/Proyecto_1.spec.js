
import {PosInicial,VerificarFormatoEntrada,Comands } from "./Proyecto_1";

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
  });
  