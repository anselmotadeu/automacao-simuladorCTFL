# 🧪 Simulador CTFL - Automação de Testes com Cypress

Este repositório contém a automação de testes end-to-end do **Simulador CTFL** utilizando **Cypress** com padrão **Page Objects** e cenários baseados em exames simulados.

---

## 📌 Sobre o Projeto

A automação foi desenvolvida com o objetivo de validar o comportamento do simulador CTFL em diferentes situações de acerto e erro. A aplicação testada permite simular exames com 40 questões e apresenta um resultado ao final da execução.

A automação cobre os exames:

- `exam1` ✅
- `exam2` ✅
- `exam3` ✅

---

## 🚀 Ferramentas e Linguagens
<div style="display: inline_block"><br/>
    <img aling="center" alt="cypress" src="https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white">
    <img aling="center" alt="javascript" src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E">
    <img aling="center" alt="markdown" src="https://img.shields.io/badge/Markdown-000000?style=for-the-badge&logo=markdown&logoColor=white">
</div><br/>

---

## 📁 Estrutura de Pastas

```
📦cypress
┣ 📂e2e
┃ ┣ 📜exam1.cy.js
┃ ┣ 📜exam2.cy.js
┃ ┗ 📜exam3.cy.js (em breve)
┣ 📂fixtures
┃ ┣ 📜exam1.json
┃ ┣ 📜exam2.json
┃ ┗ 📜exam3.json
┗ 📂support
┗ 📂pageObjects
┗ 📜SimulatorPage.js
```

---

## 🧪 Cenários de Teste Automatizados

Para cada exame (`exam1`, `exam2` e `exam3`), foram criados **8 cenários de teste**:

1. ✅ **Aprovação total** (40/40)
2. ✅ **Aprovação parcial** (35/40)
3. ✅ **Aprovação no limite** (24/40)
4. ❌ **Reprovação parcial** (15/40)
5. ❌ **Reprovação total** (0/40)
6. ⚠️ **Nenhuma resposta selecionada** (botão desabilitado)
7. 🌓 **Alternando acertos e erros** (Aprovado)
8. 🌒 **Alternando inverso com mais erros** (Reprovado)

---

## ⚙️ Como Executar Localmente

### 1. Clone o repositório

```bash
git clone https://github.com/anselmotadeu/automacao-simuladorCTFL.git
```

```bash
cd automacao-simuladorCTFL
```

### 2. Instale as dependências

```bash
npm install
```

### 3. Execute os testes
Via interface interativa:

```bash
npm run open
```
Ou em modo headless:

```bash
npm run runAll
```
---

## 🛠️ Estrutura com Page Objects
Toda a lógica de interação com os elementos da aplicação está centralizada no arquivo SimulatorPage.js, permitindo:

- Reutilização de código

- Facilidade de manutenção

- Clareza nos testes

--- 

## 📦 GitHub Actions (CI/CD)

Este projeto conta com uma pipeline completa de integração contínua configurada via GitHub Actions.

Ao realizar um `push` no repositório, três jobs são disparados em paralelo, um para cada simulado (exam1, exam2 e exam3), garantindo que os testes de todos os exames sejam executados de forma eficiente e simultânea.

Além da execução dos testes, um quarto job é responsável por:

- 🔗 Coletar os resultados de todos os testes
- 🧾 Gerar um relatório visual com **todos os cenários executados**
- 🚀 Publicar esse relatório automaticamente no **GitHub Pages**

---

## 🔍 Relatório de Testes

[![Relatório E2E](https://img.shields.io/badge/📊%20Relatório%20E2E-automacao--simuladorCTFL-blue)](https://anselmotadeu.github.io/automacao-simuladorCTFL/)



## 📊 Geração de Relatórios Locais

Você também pode gerar o relatório dos testes **localmente** para inspecionar antes de subir ao repositório.

### ✅ Comando recomendado: relatório completo e unificado

```bash
npm run full:report
```
Este comando executa os seguintes passos:

### 1. Executa os testes dos três arquivos:

- `exam1.cy.js`

- `exam2.cy.js`

- `exam3.cy.js`

### 2. Gera relatórios `.json` com Mochawesome para cada exame

### 3. Junta todos os `.json` em um único arquivo `report.json`

### 4. Gera um relatório visual HTML final a partir desse JSON

📁 O relatório gerado estará disponível em:

```bash
cypress/reports/html/mochawesome.html
```

Abra esse arquivo no navegador para visualizar o resultado.

---

## 🔁 Comandos individuais disponíveis

| Comando                   | Descrição                                                       |
| ------------------------- | --------------------------------------------------------------- |
| `npm run run:exam1`       | Executa apenas os testes do `exam1.cy.js` com relatório `.json` |
| `npm run run:exam2`       | Executa apenas os testes do `exam2.cy.js` com relatório `.json` |
| `npm run run:exam3`       | Executa apenas os testes do `exam3.cy.js` com relatório `.json` |
| `npm run merge:reports`   | Junta os relatórios `.json` gerados em um único `report.json`   |
| `npm run generate:html`   | Gera o relatório HTML final em `cypress/reports/html/`          |
| `npm run report:generate` | Junta e gera o HTML diretamente a partir de `mochawesome.json`  |
| `npm run report:open`     | Gera o HTML e o abre automaticamente no navegador               |

📌 **Importante:**
Antes de usar `report:generate` ou `report:open`, certifique-se de que os testes já foram executados com Mochawesome para que o arquivo `mochawesome.json` exista.

---

📃 Licença
Este projeto é de uso livre para fins educacionais e profissionais.

---

✨ Autor
Anselmo Santos
Líder de Qualidade | Automação de Testes | Desenvolvedor

<a href="https://www.linkedin.com/in/anselmo-santos-0114b5172/" target="_blank">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>
<a href="https://github.com/anselmotadeu" target="_blank">
    <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />
</a>
