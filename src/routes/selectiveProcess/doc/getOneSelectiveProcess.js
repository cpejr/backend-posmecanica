/**
* @swagger
*  /selectiveProcess/{process_id}:
*    get:
*      summary: Busca um processo seletivo pelo seu ID
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
*         description: Id do processo seletivo a ser buscado.
*      tags: [Processo Seletivo]
*      description: Busca um processo seletivo especificamente pelo ID.
*      responses: 
*       '200':
*        description: Processo seletivo encontrado pelo ID.
*       '500':
*        description: Erro do servidor
*
*/