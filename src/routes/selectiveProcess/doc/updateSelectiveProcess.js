/**
* @swagger
*  /selectiveProcess/{process_id}:
*    put:
*      summary: Atualiza informações do candidato pelo ID
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: false
*         description: Autorização básica.
*       - in: params
*         name: process_id
*         schema: 
*          type: uuid
*         required: false
*         description: Id do processo seletivo a ser atualizado.
*       - in: body
*         name: process_name
*         required: false
*         description: Nome do processo seletivo que será atualizado.
*       - in: body
*         name: process_type
*         description: Tipo do processo seletivo que será atualizado.
*       - in: body
*         name: process_date_begin
*         schema:
*           type: date
*         required: false
*         description: Data de início das inscrições para o processo seletivo que será atualizado.
*       - in: body
*         name: process_date_end
*         schema:
*           type: date
*         required: false
*         description: Data de encerramento das inscrições para o processo seletivo que será atualizado.
*      tags: [Candidato]
*      description: Atualizar candidato pelo ID.
*      responses: 
*       '200':
*        description: Candidato atualizado.
*       '500':
*        description: Erro do servidor.
*
*/