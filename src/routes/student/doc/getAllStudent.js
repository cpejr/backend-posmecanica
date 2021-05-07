/**
* @swagger
*  /students:
*    get:
*      summary: Lista todas os estudantes cadastrados no sistema
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica.
*      tags: [Estudante]
*      description: Busca todos os estudantes do sistema e os lista.
*      responses: 
*       '200':
*        description: Vetor com todos os estudantes cadastrados no sistema.
*       '500':
*        description: Erro do servidor.
*
*/