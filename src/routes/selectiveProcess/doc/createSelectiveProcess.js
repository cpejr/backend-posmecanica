/**
* @swagger
*  /selectiveProcess/{process_id}:
*    post:
*      summary: Criar novo processo seletivo
*      requestBody: 
*         required: true
*         content: 
*          application/json:
*            schema:
*              $ref: '#/components/schemas/ProcessoSeletivo'
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica. 
*       - in: body
*         name: process_name
*         required: true
*         description: Nome do processo seletivo que será criado.
*       - in: body
*         name: process_type
*         description: Tipo do processo seletivo que será criado.
*       - in: body
*         name: process_date_begin
*         schema:
*           type: date
*         required: true
*         description: Data de início das inscrições para o processo seletivo que será criado.
*       - in: body
*         name: process_date_end
*         schema:
*           type: date
*         required: true
*         description: Data de encerramento das inscrições para o processo seletivo que será criado.
*      tags: [ProcessoSeletivo]
*      description: Criar processo seletivo.
*      responses: 
*       '200':
*        description: Processo seletivo criado.
*       '500':
*        description: Erro do servidor.
*
*/