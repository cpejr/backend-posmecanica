/**
* @swagger
*  /defenses/{defense_id}:
*    put:
*      summary: Atualiza informações da defesa que tem como o id o passado no parâmetro
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica.
*       - in: params
*         name: defense_id
*         schema: 
*          type: string
*         required: true
*         description: Id da defesa a ser atualizada.
*       - in: body
*         name: Body
*         schema:
*          type: object
*          example:
*           defense_title: Síntese e Caracterização Elétrica do Composto Ferroelétrico
*           defense_place: DCC
*         required: true
*         description: Campos a serem atualizados.
*      tags: [Defesa]
*      description: Atualizar defesa pelo ID.
*      responses: 
*       '200':
*        description: Defesa atualizada.
*       '500':
*        description: Erro do servidor.
*
*/