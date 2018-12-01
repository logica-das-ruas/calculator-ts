import { Operacoes } from './operacoes';
export class Calculadora implements Operacoes {
    
    constructor() { }

    somar(v1: number, v2: number): number {
        let resultado = v1 + v2
        console.log(resultado);
        return resultado
    }
    subtrair(v1: number, v2: number): number {
        let resultado = v1 - v2
        console.log(resultado);
        return resultado
    }
    multiplicar(v1: number, v2: number): number {
        let resultado = v1 * v2
        console.log(resultado);
        return resultado
    }
    dividir(v1: number, v2: number): number {
        let resultado = v1 / v2
        console.log(resultado);
        return resultado
    }
}