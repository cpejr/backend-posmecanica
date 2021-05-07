/**
* @swagger
*  /qualifications/{quali_id}:
*    get:
*      summary: Busca uma qualificação pelo seu ID
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica
*       - in: params
*         name: quali_id
*         schema: 
*          type: uuid
*         required: true
*         description: Id da qualificação à qual se quer filtrar e listar.
*      tags: [Qualificação]
*      description: Busca uma qualificação especificamente pelo ID.
*      responses: 
*       '200':
*        description: Qualificação encontrada pelo ID.
*       '500':
*        description: Erro do servidor
*
*/