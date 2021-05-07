/**
* @swagger
*  /qualifications/{quali_id}:
*    delete:
*      summary: Deleta uma qualificação
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
*          type: uuid
*         required: true
*         description: Id da qualificação a ser deletada.
*      tags: [Qualificação]
*      description: Deletar qualificação.
*      responses: 
*       '200':
*        description: Qualificação deletada.
*       '500':
*        description: Erro do servidor.
*
*/