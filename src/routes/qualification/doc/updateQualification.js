/**
* @swagger
*  /qualifications/{quali_id}:
*    put:
*      summary: Atualiza informações da qualificação que tem como o id o passado no parâmetro
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica.
*       - in: params
*         name: quali_id
*         schema: 
*          type: string
*         required: true
*         description: Id da qualifacação a ser atualizada.
*       - in: body
*         name: Body
*         schema:
*          type: object
*          example:
*           quali_number: 514
*           quali_place: ICEX
*         required: true
*         description: Campos a serem atualizados.
*      tags: [Qualificação]
*      description: Atualizar qualificação pelo ID.
*      responses: 
*       '200':
*        description: Qualificação atualizada.
*       '500':
*        description: Erro do servidor.
*
*/