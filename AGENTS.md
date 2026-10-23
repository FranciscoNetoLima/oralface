# Instruções para agente de código dentro deste kit
- Siga `INSTRUCAO_UNICA_PARA_CODEX.md`.
- Referência de design: `references/mockup-approved/ORALFACE_MOCKUP_02_APROVADO.png` (segunda versão aprovada).
- Assets de produção em `public/`; integrar ao public do app no repositório existente.
- Não invente dados de paciente, certificação, contato, CRO, especialidades, resultados ou depoimentos.
- Use a fachada aprovada em `public/images/clinic/fachada-real-oralface.webp` como imagem principal da clínica.
- Fotos sintéticas da profissional e tratamentos devem ser aprovadas antes da publicação.


**Atualização da identidade:** utilizar `public/brand/logo-oralface-transparente.png` (horizontal, símbolo à esquerda e nome à direita) no cabeçalho/navbar. PNG com transparência. A versão anterior foi preservada em `public/brand/logo-oralface-anterior.png`.

## Versionamento autorizado pelo cliente

- Ao concluir qualquer alteração feita por agentes neste projeto (código, conteúdo, documentação ou assets), execute as verificações pertinentes e rode `npm run save:changes -- -Message "descrição objetiva"` antes de encerrar a tarefa. Esse comando cria um commit para o conjunto concluído e o envia ao GitHub `origin`.
- Não deixe alterações de agentes sem commit. Se o envio falhar por rede/autenticação, preserve o commit local, tente novamente quando possível e informe claramente o estado ao cliente.
- Nunca inclua arquivos ignorados, credenciais ou dados sensíveis. Revise arquivos novos antes de versioná-los.
- Faça um commit por mudança concluída, não a cada gravação intermediária de arquivo.
