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

## 🚀 Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework de testes E2E
- JavaScript ES6
- Estrutura Page Object Model (POM)

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
cd simulador-ctfl-tests
```

### 2. Instale as dependências

```bash
yarn install
# ou
npm install
```

### 3. Execute os testes
Via interface interativa:

```bash
npx cypress open
```
Ou em modo headless:

```bash
npx cypress run
```
---

## 🛠️ Estrutura com Page Objects
Toda a lógica de interação com os elementos da aplicação está centralizada no arquivo SimulatorPage.js, permitindo:

- Reutilização de código

- Facilidade de manutenção

- Clareza nos testes

--- 

## 📦 GitHub Actions (CI/CD)
Em breve será adicionada uma pipeline para execução dos testes automatizados diretamente no GitHub Actions, com separação de jobs por exame.

---

📃 Licença
Este projeto é de uso livre para fins educacionais e profissionais.

---

✨ Autor
Anselmo Santos
Analista de Qualidade | Automação de Testes | Desenvolvedor

<a href="https://www.linkedin.com/in/anselmo-santos-0114b5172/" target="_blank">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" />
</a>
<a href="https://github.com/anselmotadeu" target="_blank">
    <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" />
</a>
