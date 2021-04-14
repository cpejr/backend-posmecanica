/**
* @swagger
*  /candidates/{candidate_id}:
*    delete:
*      summary: Deleta um candidato
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica.
*       - in: params
*         name: candidate_id
*         schema: 
*          type: uuid
*         required: true
*         description: Id do candidato a ser deletado.
*      tags: [Candidato]
*      description: Deletar candidato.
*      responses: 
*       '200':
*        description: Candidato deletado.
*       '500':
*        description: Erro do servidor.
*
*/