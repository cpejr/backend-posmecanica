/**
* @swagger
*  /defenses/{defense_id}:
*    delete:
*      summary: Deleta uma defesa
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
*          type: uuid
*         required: true
*         description: Id da defesa a ser deletada.
*      tags: [Defesa]
*      description: Deletar defesa.
*      responses: 
*       '200':
*        description: Defesa deletada.
*       '500':
*        description: Erro do servidor.
*
*/