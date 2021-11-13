const escola = "Cod3r"

console.log(escola.charAt(4)) //funcao charAt retorna uma caractere do indice 4 
console.log(escola.charAt(5))//funcao charAt retorna uma caractere do indice 5
console.log(escola.charCodeAt(3)) //retona o valor na dele na tabela unicode neste caso 51
console.log(escola.indexOf('3'))// funcao retorna uma caractere do indice 3

console.log(escola.substring(1))//esta funcao imprime a partir do item 1 neste caso
console.log(escola.substring(0, 3))//esta funcao imprime a partir do item 0 até 3 neste caso

console.log('Escola '.concat(escola).concat("!"))//esta funcao serve para concatenar
console.log(escola.replace(3, "e")) // esta funcao substitui alguma caractere

console.log('Ana,Maria,Pedro'.split(','))//converte string em array e pode separar por (',')