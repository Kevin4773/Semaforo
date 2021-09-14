'use strict'
let idIntervel

const Desligada = document.getElementById('desligada')
const Vermelho = document.getElementById('Vermelho')
const Verde = document.getElementById('Verde')
const Amarelo = document.getElementById('Amrelo')
const Automatico = document.getElementById('Automatico')

function Semaforo() {
    return Desligada.src.includes("desligada")
}

function ligarVermelho() {
    Desligada.src = "assets/img/vermelho.png"
}

function ligarVerde() {
    Desligada.src = "assets/img/verde.png"
}

function ligarAmarelo() {
    Desligada.src = "assets/img/amarelo.png"
}

function Auto() {
    ligarVermelho()
    setTimeout(() => {

    ligarAmarelo()
    setTimeout(() => {

    ligarVerde()
    setTimeout(() => {
    Auto()

    },300); 
    },300);
    },300);
}

document.getElementById('Vermelho').addEventListener("click", ligarVermelho)
document.getElementById('Verde').addEventListener("click", ligarVerde)
document.getElementById('Amarelo').addEventListener("click", ligarAmarelo)
document.getElementById('Automatico').addEventListener("click", Auto)