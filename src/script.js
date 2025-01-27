
  const btnCalcular = document.getElementById("btn-Calcular");
  const folhaSalarial = document.getElementById("folha-salarial");
  const valorSalarialBase = document.getElementById("sl-B")
  const subAli = document.getElementById("sub-Ali")
  const subTrans = document.getElementById("sub-Trans")
  const resultadoSalarioBruto = document.getElementById("r-slB")
  const resultadoSegurancaSocial = document.getElementById("r-ss")
  const resultadoMateriaColectavel = document.getElementById("r-mc")
  const resultadoIRT = document.getElementById("r-irt")
  const resultadoescalao = document.getElementById("r-exc")
  const btnvoltar = document.getElementById("voltar")
  let MateriaColectavel
//      FUNÇÃO QUE CALCULA A MATÉRIA COLECTÁVEL
  function materiaColectavel(){
    const salarioBase = parseFloat(valorSalarialBase.value)
    let subsidioDeAlimentacao =  parseFloat(subAli.value)
    let subsidioDeTransporte = parseFloat(subTrans.value)
    
    // CONDIÇÃO DOS SUBSÍDIOS, CASO SEJAM MENOR QUE 30.000 IMPRIMIRÁ 0 CASO SEJA MAIOR SUNTRAIRÁ O VALOR COM 30.000 
    if(subsidioDeAlimentacao > 30000 || subsidioDeTransporte > 30000){
        subsidioDeAlimentacao -= 30000
        subsidioDeTransporte -= 30000
    }else{
        subsidioDeAlimentacao = 0
        subsidioDeTransporte = 0
    }
    const subsidios = subsidioDeAlimentacao + subsidioDeTransporte
    // CONSTANTE QUE SOMA TODOS OS SUBSÍDIOS
    const salarioBruto = salarioBase + parseFloat(subAli.value) + parseFloat(subTrans.value) 
    // CONSTANTE QUE CALCULA A SEGURANÇA SOCIAL
    const segurancaSocial = salarioBruto * 0.03
    MateriaColectavel = salarioBase - segurancaSocial
    console.log("salario bruto:", salarioBruto)
    resultadoSalarioBruto.innerHTML = salarioBruto
    resultadoSegurancaSocial.innerHTML = segurancaSocial
    resultadoMateriaColectavel.innerHTML = MateriaColectavel
    console.log("subsidios:", subsidios)
    console.log("segurança social:", segurancaSocial)
    console.log("MateriaColectavel:", MateriaColectavel)
    
  }
  function irt(){
    const salarioBase = parseFloat(valorSalarialBase.value)
    console.log("MateriaColectavel:", MateriaColectavel)
    if(salarioBase <= 100000){
        const parcelafixa = 0
        const taxa = 0
        const excesso = 0
        const numero = "1º"
        const valordoirt = parcelafixa + taxa * (MateriaColectavel - excesso)
        console.log("o valor do irt é", valordoirt, numero)
        resultadoescalao.innerHTML = numero
        resultadoIRT.innerHTML = valordoirt
    }
    if(salarioBase>= 100001 && salarioBase <= 150000){
        const parcelafixa = 0
        const taxa = 0.13
        const excesso = 0
        const numero = "2º"
        const valordoirt = parcelafixa + taxa * (MateriaColectavel - excesso)
        console.log("o valor do irt é", valordoirt, numero)
        resultadoescalao.innerHTML = numero
        resultadoIRT.innerHTML = valordoirt
    }
    if(salarioBase>= 150001 && salarioBase <= 200000){
        const parcelafixa = 12500
        const taxa = 0.16
        const excesso = 15001
        const numero = "3º"
        const valordoirt = parcelafixa + taxa * (MateriaColectavel - excesso)
        console.log("o valor do irt é", valordoirt, numero)
        resultadoescalao.innerHTML = numero
        resultadoIRT.innerHTML = valordoirt
    }
    if(salarioBase>= 200001 && salarioBase <= 300000){
        const parcelafixa = 31250
        const taxa = 0.18
        const excesso = 20001
        const numero = "4º"
        const valordoirt = parcelafixa + taxa * (MateriaColectavel - excesso)
        console.log("o valor do irt é", valordoirt, numero)
        resultadoescalao.innerHTML = numero
        resultadoIRT.innerHTML = valordoirt
    }
    if(salarioBase>= 300001 && salarioBase <= 500000){
        const parcelafixa = 49259
        const taxa = 0.19
        const excesso = 30001
        const numero = "5º"
        const valordoirt = parcelafixa + taxa * (MateriaColectavel - excesso)
        console.log("o valor do irt é", valordoirt, numero)
        resultadoescalao.innerHTML = numero
        resultadoIRT.innerHTML = valordoirt
    }
    if(salarioBase>= 500001 && salarioBase <= 1000000){
        const parcelafixa = 67250
        const taxa = 0.20
        const excesso = 500001
        const numero = "6º"
        const valordoirt = parcelafixa + taxa * (MateriaColectavel - excesso)
        console.log("o valor do irt é", valordoirt, numero)
        resultadoescalao.innerHTML = numero
        resultadoIRT.innerHTML = valordoirt
    }
    if(salarioBase>= 1000001 && salarioBase <= 1500000){
        const parcelafixa = 187249
        const taxa = 0.21
        const excesso = 1000001
        const numero = "7º"
        const valordoirt = parcelafixa + taxa * (MateriaColectavel - excesso)
        console.log("o valor do irt é", valordoirt, numero)
        resultadoescalao.innerHTML = numero
        resultadoIRT.innerHTML = valordoirt
    }
    if(salarioBase>= 1500001 && salarioBase <= 2000000){
        const parcelafixa = 292249
        const taxa = 0.22
        const excesso = 1500001
        const numero = "8º"
        const valordoirt = parcelafixa + taxa * (MateriaColectavel - excesso)
        console.log("o valor do irt é", valordoirt, numero)
        resultadoescalao.innerHTML = numero
        resultadoIRT.innerHTML = valordoirt
    }
    if(salarioBase>= 2000001 && salarioBase <= 2500000){
        const parcelafixa = 402249
        const taxa = 0.23
        const excesso = 2000001
        const numero = "9º"
        const valordoirt = parcelafixa + taxa * (MateriaColectavel - excesso)
        console.log("o valor do irt é", valordoirt, numero)
        resultadoescalao.innerHTML = numero
        resultadoIRT.innerHTML = valordoirt
    }
    if(salarioBase>= 2500001 && salarioBase <= 5000000){
        const parcelafixa = 517249
        const taxa = 0.24
        const excesso = 2500001
        const numero = "10º"
        const valordoirt = parcelafixa + taxa * (MateriaColectavel - excesso)
        console.log("o valor do irt é", valordoirt, numero)
        resultadoescalao.innerHTML = numero
        resultadoIRT.innerHTML = valordoirt
    }
    if(salarioBase>= 5000001 && salarioBase <= 10000000){
        const parcelafixa = 1117249
        const taxa = 0.245
        const excesso = 5000001
        const numero = "11º"
        const valordoirt = parcelafixa + taxa * (MateriaColectavel - excesso)
        console.log("o valor do irt é", valordoirt, numero)
        resultadoescalao.innerHTML = numero
        resultadoIRT.innerHTML = valordoirt
    }
    if(salarioBase>= 10000001){
        const parcelafixa = 2342248
        const taxa = 0.25
        const excesso = 10000001
        const numero = "11º"
        const valordoirt = parcelafixa + taxa * (MateriaColectavel - excesso)
        console.log("o valor do irt é", valordoirt, numero)
        resultadoescalao.innerHTML = numero
        resultadoIRT.innerHTML = valordoirt
    }
    

}
  function MostrarFolhaSalarial() {
    // folhaSalarial.classList.add("aparecer")
    folhaSalarial.classList.remove("hidden")
    folhaSalarial.classList.add("flex")
    console.log("Folha salarial")
  }
  function FecharFolhaSalarial(){
    folhaSalarial.classList.add("hidden")
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

