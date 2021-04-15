/**
* @swagger
*  /selectiveProcess/{process_id}:
*    delete:
*      summary: Deleta um processo seletivo
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica.
*       - in: params
*         name: process_id
*         schema: 
*          type: uuid
*         required: true
*         description: Id do processo seletivo a ser deletado.
*      tags: [ProcessoSeletivo]
*      description: Deletar processo seletivo.
*      responses: 
*       '200':
*        description: Processo Seletivo deletado.
*       '500':
*        description: Erro do servidor.
*
*/