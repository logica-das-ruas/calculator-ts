"use strict";
exports.__esModule = true;
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.somar = function (v1, v2) {
        var resultado = v1 + v2;
        console.log(resultado);
        return resultado;
    };
    Calculadora.prototype.subtrair = function (v1, v2) {
        var resultado = v1 - v2;
        console.log(resultado);
        return resultado;
    };
    Calculadora.prototype.multiplicar = function (v1, v2) {
        var resultado = v1 * v2;
        console.log(resultado);
        return resultado;
    };
    Calculadora.prototype.dividir = function (v1, v2) {
        var resultado = v1 / v2;
        console.log(resultado);
        return resultado;
    };
    return Calculadora;
}());
exports.Calculadora = Calculadora;
