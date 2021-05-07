/**
* @swagger
*  /banks:
*    get:
*      summary: Lista todas as bancas do sistema
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica.
*      tags: [Banca]
*      description: Busca todas as bancas do sistema e as lista.
*      responses: 
*       '200':
*        description: Vetor com todas as bancas cadastradas.
*       '500':
*        description: Erro do servidor.
*
*/