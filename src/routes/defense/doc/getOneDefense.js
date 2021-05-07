/**
* @swagger
*  /defenses/{defense_id}:
*    get:
*      summary: Busca uma defesa pelo seu ID
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica
*       - in: params
*         name: defense_id
*         schema: 
*          type: uuid
*         required: true
*         description: Id da defesa à qual se quer filtrar e listar.
*      tags: [Defesa]
*      description: Busca uma defesa especificamente pelo ID.
*      responses: 
*       '200':
*        description: Defesa encontrada pelo ID.
*       '500':
*        description: Erro do servidor
*
*/