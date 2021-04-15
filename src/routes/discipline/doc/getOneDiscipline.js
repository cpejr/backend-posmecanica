/**
* @swagger
*  /discipline/{discipline_id}:
*    get:
*      summary: Busca um candidato pelo seu ID
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica.
*       - in: params
*         name: discipline_id
*         schema: 
*          type: uuid
*         required: true
*         description: Id da disciplina a ser buscada.
*      tags: [Disciplina]
*      description: Busca uma disciplina especificamente pelo ID.
*      responses: 
*       '200':
*        description: Disciplina encontrada pelo ID.
*       '500':
*        description: Erro do servidor
*
*/