class SimulatorPage {
  abrirSite() {
    cy.visit('https://simulador-ctfl.vercel.app/');
  }

  verificarContadorVisivel() {
    cy.get('#countdown').should('be.visible');
  }

  selecionarExame(valor) {
    cy.get(`input[name="exam"][value="${valor}"]`).check({ force: true });
  }

  aguardarCarregamentoQuestao() {
    cy.get('#question h2').should('exist');
  }

  responderQuestoes(examData, estrategia, mensagemEsperadaPorQuestao) {
    examData.forEach((question, index) => {
      const resposta = estrategia(question, index);
      cy.get(`input[name="option${index}"]`).eq(resposta).check({ force: true });
      cy.get('#verificar-resposta').click();

      cy.get('#message')
        .should('be.visible')
        .invoke('text')
        .then((msg) => {
          cy.log(`📝 Questão ${index + 1}: "${msg.trim()}"`);
          expect(msg.trim()).to.contain(mensagemEsperadaPorQuestao(question, resposta));
        });

      cy.wait(1200);
    });
  }

  validarResultadoFinalEsperado({ percentual, acertos, status }) {
  cy.get('#resultModal').should('be.visible');

  cy.get('#resultMessage').should('contain', percentual);
  cy.get('#resultMessage').should('contain', acertos);
  cy.get('#resultMessage').should('contain', status);
}

  validarBotaoDesabilitado() {
    cy.get('#verificar-resposta').should('be.disabled');
  }

  logMensagem(mensagem) {
    cy.log(mensagem);
  }
}

export default new SimulatorPage();
