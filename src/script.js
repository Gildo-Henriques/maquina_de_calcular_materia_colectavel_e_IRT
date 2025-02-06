const btnCalcular = document.getElementById("btn-Calcular");
const folhaSalarial = document.getElementById("folha-salarial");
const btnvoltar = document.getElementById("voltar")
const salarioBase = document.getElementById("sl-B")
const salarioBruto  = document.getElementById("r-slB")
const subsidioDeTransporte = document.getElementById("sub-Trans")
const subsidioDeAlimentacao = document.getElementById("sub-Ali")
let materiaColectavelIRT
const resultadoSalarioBruto = document.getElementById("r-slB")
const resultadoSegurancaSocial = document.getElementById("r-ss")
const resultadoMateriaColectavel = document.getElementById("r-mc")
const resultadoIRT = document.getElementById("r-irt")
const resultadoescalao = document.getElementById("r-exc")
// document.querySelectorAll('input').forEach(input =>{
//     input.addEventListener('input', () =>{
//         if (input.value.trim() === ''){
//             input.value = 0
//         }
//     })
// })
function MostrarFolhaSalarial() {
    // folhaSalarial.classList.add("aparecer")
    folhaSalarial.classList.remove("hidden")
    folhaSalarial.classList.add("flex")
    console.log("Folha salarial")
  }
function FecharFolhaSalarial(){
    folhaSalarial.classList.add("hidden")
  }
// Materia Colectável
function materiaColectavel(){

    
 const valorDoSalarioBase = parseFloat(salarioBase.value) || 0
 let valorDoSubsidioDeTransporte = parseFloat(subsidioDeTransporte.value) || 0
 let valorDoSubsidioDeAlimentacao = parseFloat(subsidioDeAlimentacao.value) || 0
 const valorDoSalarioBruto = parseFloat(salarioBase.value) + parseFloat(subsidioDeTransporte.value) + parseFloat(subsidioDeAlimentacao.value)
 const valorDaSegurancaSocial = valorDoSalarioBruto * 0.03
 if (valorDoSubsidioDeAlimentacao > 30000 || valorDoSubsidioDeTransporte > 30000){
    valorDoSubsidioDeAlimentacao -= 30000
    valorDoSubsidioDeAlimentacao -= 30000
 }else{
    valorDoSubsidioDeAlimentacao = 0
    valorDoSubsidioDeAlimentacao = 0
 }
 const subsidiosTributados = valorDoSubsidioDeAlimentacao + valorDoSubsidioDeTransporte
 resultadoSalarioBruto.innerHTML = valorDoSalarioBruto
 resultadoSegurancaSocial.innerHTML = valorDaSegurancaSocial
 console.log(subsidiosTributados)
 materiaColectavelIRT = valorDoSalarioBase - valorDaSegurancaSocial + subsidiosTributados
 resultadoMateriaColectavel.innerHTML = materiaColectavelIRT

}
function irt(){
    console.log("MateriaColectavel:", materiaColectavel)
    if(materiaColectavelIRT <= 100000){
        const parcelafixa = 0
        const taxa = 0
        const excesso = 0
        const numero = "1º"
        const valordoirt = parcelafixa + taxa * (materiaColectavelIRT - excesso)
        console.log("o valor do irt é", valordoirt, numero)
        resultadoescalao.innerHTML = numero
        resultadoIRT.innerHTML = valordoirt
    }
    if(materiaColectavelIRT>= 100001 && materiaColectavelIRT <= 150000){
        const parcelafixa = 0
        const taxa = 0.13
        const excesso = 0
        const numero = "2º"
        const valordoirt = parcelafixa + taxa * (materiaColectavelIRT - excesso)
        console.log("o valor do irt é", valordoirt, numero)
        resultadoescalao.innerHTML = numero
        resultadoIRT.innerHTML = valordoirt
    }
    if(materiaColectavelIRT>= 150001 && materiaColectavelIRT <= 200000){
        const parcelafixa = 12500
        const taxa = 0.16
        const excesso = 15001
        const numero = "3º"
        const valordoirt = parcelafixa + taxa * (materiaColectavelIRT - excesso)
        console.log("o valor do irt é", valordoirt, numero)
        resultadoescalao.innerHTML = numero
        resultadoIRT.innerHTML = valordoirt
    }
    if(materiaColectavelIRT>= 200001 && materiaColectavelIRT <= 300000){
        const parcelafixa = 31250
        const taxa = 0.18
        const excesso = 20001
        const numero = "4º"
        const valordoirt = parcelafixa + taxa * (materiaColectavelIRT - excesso)
        console.log("o valor do irt é", valordoirt, numero)
        resultadoescalao.innerHTML = numero
        resultadoIRT.innerHTML = valordoirt
    }
    if(materiaColectavelIRT>= 300001 && materiaColectavelIRT <= 500000){
        const parcelafixa = 49259
        const taxa = 0.19
        const excesso = 30001
        const numero = "5º"
        const valordoirt = parcelafixa + taxa * (materiaColectavelIRT - excesso)
        console.log("o valor do irt é", valordoirt, numero)
        resultadoescalao.innerHTML = numero
        resultadoIRT.innerHTML = valordoirt
    }
    if(materiaColectavelIRT>= 500001 && materiaColectavelIRT <= 1000000){
        const parcelafixa = 67250
        const taxa = 0.20
        const excesso = 500001
        const numero = "6º"
        const valordoirt = parcelafixa + taxa * (materiaColectavelIRT - excesso)
        console.log("o valor do irt é", valordoirt, numero)
        resultadoescalao.innerHTML = numero
        resultadoIRT.innerHTML = valordoirt
    }
    if(materiaColectavelIRT>= 1000001 && materiaColectavelIRT <= 1500000){
        const parcelafixa = 187249
        const taxa = 0.21
        const excesso = 1000001
        const numero = "7º"
        const valordoirt = parcelafixa + taxa * (materiaColectavelIRT - excesso)
        console.log("o valor do irt é", valordoirt, numero)
        resultadoescalao.innerHTML = numero
        resultadoIRT.innerHTML = valordoirt
    }
    if(materiaColectavelIRT>= 1500001 && materiaColectavelIRT <= 2000000){
        const parcelafixa = 292249
        const taxa = 0.22
        const excesso = 1500001
        const numero = "8º"
        const valordoirt = parcelafixa + taxa * (materiaColectavelIRT - excesso)
        console.log("o valor do irt é", valordoirt, numero)
        resultadoescalao.innerHTML = numero
        resultadoIRT.innerHTML = valordoirt
    }
    if(materiaColectavelIRT>= 2000001 && materiaColectavelIRT <= 2500000){
        const parcelafixa = 402249
        const taxa = 0.23
        const excesso = 2000001
        const numero = "9º"
        const valordoirt = parcelafixa + taxa * (materiaColectavelIRT - excesso)
        console.log("o valor do irt é", valordoirt, numero)
        resultadoescalao.innerHTML = numero
        resultadoIRT.innerHTML = valordoirt
    }
    if(materiaColectavelIRT>= 2500001 && materiaColectavelIRT <= 5000000){
        const parcelafixa = 517249
        const taxa = 0.24
        const excesso = 2500001
        const numero = "10º"
        const valordoirt = parcelafixa + taxa * (materiaColectavelIRT - excesso)
        console.log("o valor do irt é", valordoirt, numero)
        resultadoescalao.innerHTML = numero
        resultadoIRT.innerHTML = valordoirt
    }
    if(materiaColectavelIRT>= 5000001 && materiaColectavelIRT <= 10000000){
        const parcelafixa = 1117249
        const taxa = 0.245
        const excesso = 5000001
        const numero = "11º"
        const valordoirt = parcelafixa + taxa * (materiaColectavelIRT - excesso)
        console.log("o valor do irt é", valordoirt, numero)
        resultadoescalao.innerHTML = numero
        resultadoIRT.innerHTML = valordoirt
    }
    if(materiaColectavelIRT>= 10000001){
        const parcelafixa = 2342248
        const taxa = 0.25
        const excesso = 10000001
        const numero = "11º"
        const valordoirt = parcelafixa + taxa * (materiaColectavelIRT - excesso)
        console.log("o valor do irt é", valordoirt, numero)
        resultadoescalao.innerHTML = numero
        resultadoIRT.innerHTML = valordoirt
    }
    

}
  btnCalcular.addEventListener("click", (event) => {
    event.preventDefault()
    MostrarFolhaSalarial()
    materiaColectavel()
    irt()

  });
  btnvoltar.addEventListener("click", (event) => {
    event.preventDefault()
    FecharFolhaSalarial()
    

  })
