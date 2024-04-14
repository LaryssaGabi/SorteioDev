# Sorteador de Números

Este é um simples aplicativo web para sortear um número aleatório dentro de um intervalo especificado. O aplicativo utiliza JavaScript para gerar o número aleatório e validar as entradas do usuário.

## Funcionalidades

- **Sorteio de Número Aleatório:** Gera um número aleatório dentro do intervalo especificado pelo usuário.
- **Validação de Entrada:** Verifica se os números inseridos são válidos e se o intervalo é adequado para realizar o sorteio.

## Como usar

1. Insira o primeiro número do intervalo desejado no campo de entrada "Primeiro Número".
2. Insira o segundo número do intervalo desejado no campo de entrada "Segundo Número".
3. Clique no botão de sorteio para gerar um número aleatório dentro do intervalo especificado.

## Estrutura do Código

- **`sortearNumero()`:** Função principal que realiza o sorteio do número aleatório com base nos valores inseridos pelo usuário.
- **Validações de Entrada:** Verifica se os números inseridos são válidos e se o intervalo é apropriado para realizar o sorteio.

## Configurações

As configurações do aplicativo estão diretamente incluídas no código JavaScript. Aqui está como as entradas são tratadas:

```javascript
var primeiroNumero = Math.ceil(Number(document.getElementById("field").value));
var segundoNumero = Math.floor(Number(document.getElementById("field-2").value));
