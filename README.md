# cypress-do-zero-a-nuvem
Esse projeto foi desenvolvido durante meus estudos do Curso Cypress, Do Zero a Nuvem da Escola TAT pela Udemy. O Projeto é a automação dos testes da Central de Atendimento TAT onde estamos validando todos os campos da aplicação e analisando se as funcionalidade esperadas não estão com defeito.

## Guia de Execução da Automação

[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

### Pré-requisitos
Certifique-se de que os seguintes softwares estão instalados na sua máquina:
- [Node.js](https://nodejs.org/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Git Bash](https://git-scm.com/downloads) 

## Clonando o Repositório

1. Abra o **Visual Studio Code**.
2. Vá para **Terminal > New Terminal**.
3. Selecione o terminal **bash**.
4. No prompt, insira o comando abaixo para clonar o repositório:
```sh
git clone https://github.com/NatanaelBalbino/cypress-do-zero-a-nuvem.git
```
5. Navegue até a pasta raiz do projeto:
```sh
cd cypress-do-zero-a-nuvem
```
6. Instale as dependências do projeto:
```sh
npm install
```
Aguarde a conclusão da instalação.

## Executando os Testes pelo GUI

Para abrir a interface gráfica do Cypress e rodar os testes:
```sh
npx cypress open
```

Para abrir a interface gráfica do Cypress e rodar os testes com um _viewport_ mobile (410x860px):
```sh
npm open cy:mobile
```

## Executando os Testes via console (headless)

Para executar os testes diretamente no console:
```sh
npm run test
```

Para executar os testes com um _viewport_ mobile (410x860px):
```sh
npm run test:mobile
```

✨O SUT (Software Under Test) já está definida no projeto, portanto, não é necessário realizar qualquer alteração.✨
