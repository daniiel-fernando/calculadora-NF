function gerarNota() {
    const valorVenda = parseFloat(document.getElementById("valorVenda").value);
    const itensVendidos = document.getElementById("itensVendidos").value;
    const irpf = parseFloat(document.getElementById("irpf").value) / 100;
    const pis = parseFloat(document.getElementById("pis").value) / 100;
    const cofins = parseFloat(document.getElementById("cofins").value) / 100;
    const inss = parseFloat(document.getElementById("inss").value) / 100;
    const issqn = parseFloat(document.getElementById("issqn").value) / 100;

    if (isNaN(valorVenda) || !itensVendidos || isNaN(irpf) || isNaN(pis) || isNaN(cofins) || isNaN(inss) || isNaN(issqn)) {
        alert("Por favor, preencha todos os campos corretamente.");
        return;
    }

    const totalImpostos = valorVenda * (irpf + pis + cofins + inss + issqn);
    const valorLiquido = valorVenda - totalImpostos;

    const resultado = `
        Valor da Venda: R$ ${valorVenda.toFixed(2)}
        Itens Vendidos: ${itensVendidos}
        
        Impostos Deduzidos:
        - IRPF: R$ ${(valorVenda * irpf).toFixed(2)}
        - PIS: R$ ${(valorVenda * pis).toFixed(2)}
        - COFINS: R$ ${(valorVenda * cofins).toFixed(2)}
        - INSS: R$ ${(valorVenda * inss).toFixed(2)}
        - ISSQN: R$ ${(valorVenda * issqn).toFixed(2)}
        
        Total de Impostos: R$ ${totalImpostos.toFixed(2)}
        Valor Líquido: R$ ${valorLiquido.toFixed(2)}
    `;

    document.getElementById("notaGerada").textContent = resultado;
}
