# Desafio Técnico Escribo 1

**Descrição**:

- Implemente uma função que receba um número inteiro positivo e retorne o somatório de todos os valores
  inteiros divisíveis por 3 ou 5 que sejam inferiores ao número passado.

**Exemplos:**

- Caso sua função receba o inteiro 10, ela deve retornar 23, resultante do somatório dos números 3, 5, 6 e
  9 que são menores que 10.
- Caso sua função receba o inteiro 11, ela deve retornar 33, resultante do somatório dos números 3, 5, 6, 9
  e 10 que são menores que 11.

## Setup

### Requisitos

```
Node.js 18.x ou superior
```

### Instalando as dependências

```bash
$ npm install
```

### Executando

Exemplo:

```js
//...

// Passe um valor para a função
const result = sumDivisibles(10);

//...
```

No terminal execute:

```bash
$ node main.js
```

### Testes

Execute a suíte de testes com o comando:

```bash
$ npm run test
```
