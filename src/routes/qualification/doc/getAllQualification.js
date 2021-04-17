/**
* @swagger
*  /qualifications:
*    get:
*      summary: Lista todas as qualificações do sistema
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica.
*      tags: [Qualificação]
*      description: Busca todas as qualificações do sistema e as lista.
*      responses: 
*       '200':
*        description: Vetor com todas as qualificações cadastradas.
*       '500':
*        description: Erro do servidor.
*
*/