/**
* @swagger
*  /professors/{prof_id}:
*    get:
*      summary: Busca um professor pelo seu ID
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica
*       - in: params
*         name: prof_id
*         schema: 
*          type: uuid
*         required: true
*         description: Id do professor ao qual se quer filtrar e listar.
*      tags: [Professor]
*      description: Busca um professor especificamente pelo ID.
*      responses: 
*       '200':
*        description: Professor encontrado pelo ID.
*       '500':
*        description: Erro do servidor
*
*/