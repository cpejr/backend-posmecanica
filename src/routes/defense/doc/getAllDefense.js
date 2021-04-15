/**
* @swagger
*  /defenses:
*    get:
*      summary: Lista todas as defesas do sistema
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica.
*      tags: [Defesa]
*      description: Busca todas as defesas do sistema e as lista.
*      responses: 
*       '200':
*        description: Vetor com todas as defesas cadastradas.
*       '500':
*        description: Erro do servidor.
*
*/