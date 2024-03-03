const calcularIMC = () => {
    const peso = document.querySelector(".peso_input").value;
    const altura = document.querySelector(".altura_input").value;
    const alturaPars = parseFloat(altura)
    const math = parseFloat(peso) / (alturaPars * alturaPars);
    
    let mensagem = ""

    const addResult = (mensagem) => {
        const result = document.querySelector('.p_inp')
        result.innerText = mensagem
    }
    if (peso <= 0) {
        addResult(mensagem = "Adicione um peso válido")
    } else if (peso > 635) {
        addResult(mensagem = "Adicione um peso válido")
    }else if (altura > 2.51) {
        addResult(mensagem = "Mas você é alto hein!")
    } else if (math < 18.5) {
        addResult(mensagem = `Abaixo do peso. Seu IMC: ${math.toFixed(2)}`)
     } else if (math >= 18.5 && math <= 24.9) {
        addResult(mensagem = `Peso normal. Seu IMC: ${math.toFixed(2)}`)
     } else if (math >= 25 && math <= 29.9) {
        addResult(mensagem = `Sobrepeso. Seu IMC: ${math.toFixed(2)}`)
     } else if (math >= 30 && math <= 34.9) {
        addResult(mensagem  = `Obesidade Grau 1. Seu IMC: ${math.toFixed(2)}`)
     } else if (math >= 35 && math <= 39.9) {
        addResult(mensagem  = `Obesidade Grau 2. Seu IMC: ${math.toFixed(2)}`)
     } else if (math >= 40) {
        addResult(mensagem = `Obesidade Grau 3. Seu IMC: ${math.toFixed(2)}`)
     }
}

const btn = document.querySelector(".button_input")
btn.addEventListener("click", () => {
    calcularIMC()
})