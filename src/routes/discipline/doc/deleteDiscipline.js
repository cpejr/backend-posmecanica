/**
* @swagger
*  /discipline/{discipline_id}:
*    delete:
*      summary: Deleta uma disciplina
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
*         description: Id da disciplina a ser deletada.
*      tags: [Disciplina]
*      description: Deletar disciplina.
*      responses: 
*       '200':
*        description: Disciplina deletada.
*       '500':
*        description: Erro do servidor.
*
*/