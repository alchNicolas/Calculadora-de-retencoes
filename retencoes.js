const retencoes = []
opcao = ""

do {

    opcao = prompt(
        "Calculadora de retenções, selecione uma opção: " +
        "\nTotal de calculos: " + retencoes.length +
        "\n1. Calcular retenções federais " +
        "\n2. Consultar cálculos concluidos" +
        "\n3. Sair"
    )

    switch (opcao) {
        case "1":
            const calculo = {}

            calculo.prestador = prompt("Qual o nome do prestador do serviço?")
            calculo.servico = prompt("Informe o serviço que foi prestado:")
            calculo.valor = parseFloat(prompt("Informe o valor do serviço:"))

            if (calculo.valor * 0.0465 >= 10) {
                calculo.csrf = calculo.valor * 0.0465
            } else {calculo.csrf = "Valor abaixo de R$ 10,00 não é devido"
                alert("CSRF: Valor abaixo de R$ 10,00 não é devido")
            }

            if (calculo.valor * 0.015 >= 10) {
                calculo.irrf = calculo.valor * 0.015
            } else {calculo.irrf = "Valor abaixo de R$ 10,00 não é devido"
                alert("IRRF: Valor abaixo de R$ 10,00 não é devido")
            }

            const confirmação = confirm(
                "Salvar esse cálculo?\n " +
                "\nPrestador: " + calculo.prestador +
                "\nServiço: " + calculo.servico +
                "\nValor: " + calculo.valor 
            )

            if (confirmação) {
                retencoes.push(calculo)
                alert("Calculo salvo com sucesso!")
            } else ("Retornando ao menu")
            break

        case "2":
            for (let i = 0; i < retencoes.length; i++) {
                alert(
                    "Serviço: " + (i + 1) +
                    "\nPrestador: " + retencoes[i].prestador +
                    "\nServiço: " + retencoes[i].servico +
                    "\nValor: " + retencoes[i].valor +
                    "\nCSRF: " + retencoes[i].csrf + 
                    "\nIRRF: " + retencoes[i].irrf
                )
            }
            break
        case "3":
            alert("Saindo...")
            break
        default:
            alert("Opção inválida")

    }

} while (opcao !== "3")
