/**
* @swagger
*  /professors:
*    get:
*      summary: Lista todas os professores cadastrados no sistema
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica.
*      tags: [Professor]
*      description: Busca todos os professores do sistema e os lista.
*      responses: 
*       '200':
*        description: Vetor com todos os professores cadastrados no sistema.
*       '500':
*        description: Erro do servidor.
*
*/