/**
* @swagger
*  /students/{stud_id}:
*    get:
*      summary: Busca um estudante pelo seu ID
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica
*       - in: params
*         name: stud_id
*         schema: 
*          type: uuid
*         required: true
*         description: Id do estudante ao qual se quer filtrar e listar.
*      tags: [Estudante]
*      description: Busca um estudante especificamente pelo ID.
*      responses: 
*       '200':
*        description: Estudante encontrado pelo ID.
*       '500':
*        description: Erro do servidor
*
*/