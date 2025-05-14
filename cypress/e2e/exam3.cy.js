/// <reference types="cypress" />
import SimulatorPage from '../support/pageObjects/SimulatorPage';

describe('Simulador CTFL - Exam 3 (PageObject com 8 cenários)', () => {
  let examData = [];

  beforeEach(() => {
    cy.fixture('exam3.json').then((data) => {
      examData = data;
    });

    SimulatorPage.abrirSite();
    SimulatorPage.verificarContadorVisivel();
    SimulatorPage.selecionarExame('exam3');
    SimulatorPage.aguardarCarregamentoQuestao();
  });

  it('✅ Cenário 1 - Aprovação total (40/40)', () => {
    SimulatorPage.responderQuestoes(
      examData,
      (q) => q.answer,
      (q, r) => 'Resposta correta!'
    );

    SimulatorPage.validarResultadoFinalEsperado({
      percentual: 'Percentual de acerto: 100.00%',
      acertos: 'Você acertou 40 de 40',
      status: 'Você está aprovado!',
    });
  });

  it('✅ Cenário 2 - Aprovação parcial (35/40)', () => {
    SimulatorPage.responderQuestoes(
      examData,
      (q, i) => i < 35 ? q.answer : (q.answer === 0 ? 1 : 0),
      (q, r) => r === q.answer ? 'Resposta correta!' : 'Resposta incorreta!'
    );

    SimulatorPage.validarResultadoFinalEsperado({
      percentual: 'Percentual de acerto: 87.50%',
      acertos: 'Você acertou 35 de 40',
      status: 'Você está aprovado!',
    });
  });

  it('✅ Cenário 3 - Aprovação no limite (24/40)', () => {
    SimulatorPage.responderQuestoes(
      examData,
      (q, i) => i < 24 ? q.answer : (q.answer === 0 ? 1 : 0),
      (q, r) => r === q.answer ? 'Resposta correta!' : 'Resposta incorreta!'
    );

    SimulatorPage.validarResultadoFinalEsperado({
      percentual: 'Percentual de acerto: 60.00%',
      acertos: 'Você acertou 24 de 40',
      status: 'Você está aprovado!',
    });
  });

  it('❌ Cenário 4 - Reprovação parcial (15/40)', () => {
    SimulatorPage.responderQuestoes(
      examData,
      (q, i) => i < 15 ? q.answer : (q.answer === 0 ? 1 : 0),
      (q, r) => r === q.answer ? 'Resposta correta!' : 'Resposta incorreta!'
    );

    SimulatorPage.validarResultadoFinalEsperado({
      percentual: 'Percentual de acerto: 37.50%',
      acertos: 'Você acertou 15 de 40',
      status: 'Você foi reprovado!',
    });
  });

  it('❌ Cenário 5 - Reprovação total (0/40)', () => {
    SimulatorPage.responderQuestoes(
      examData,
      (q) => (q.answer === 0 ? 1 : 0),
      () => 'Resposta incorreta!'
    );

    SimulatorPage.validarResultadoFinalEsperado({
      percentual: 'Percentual de acerto: 0.00%',
      acertos: 'Você acertou 0 de 40',
      status: 'Você foi reprovado!',
    });
  });

  it('⚠️ Cenário 6 - Nenhuma resposta selecionada (botão desabilitado)', () => {
    SimulatorPage.validarBotaoDesabilitado();
    SimulatorPage.logMensagem('✅ O botão está corretamente desabilitado sem seleção de resposta.');
  });

  it('🌓 Cenário 7 - Alternando acertos e erros (Aprovado)', () => {
    SimulatorPage.responderQuestoes(
      examData,
      (q, i) => i % 2 === 0 ? q.answer : (q.answer === 0 ? 1 : 0),
      (q, r) => r === q.answer ? 'Resposta correta!' : 'Resposta incorreta!'
    );

    SimulatorPage.validarResultadoFinalEsperado({
      percentual: 'Percentual de acerto: 50.00%',
      acertos: 'Você acertou 20 de 40',
      status: 'Você foi reprovado!',
    });
  });

  it('🌒 Cenário 8 - Alternando inverso com mais erros (Reprovado)', () => {
    SimulatorPage.responderQuestoes(
      examData,
      (q, i) => i % 2 !== 0 ? q.answer : (q.answer === 0 ? 1 : 0),
      (q, r) => r === q.answer ? 'Resposta correta!' : 'Resposta incorreta!'
    );

    SimulatorPage.validarResultadoFinalEsperado({
      percentual: 'Percentual de acerto: 50.00%',
      acertos: 'Você acertou 20 de 40',
      status: 'Você foi reprovado!',
    });
  });
});
