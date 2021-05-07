/**
* @swagger
*  /discipline:
*    get:
*      summary: Lista todas as disciplinas do sistema
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica.
*      tags: [Candidato]
*      description: Busca todas as disciplinas do sistema e as lista.
*      responses: 
*       '200':
*        description: Vetor com todas as disciplinas cadastrados.
*       '500':
*        description: Erro do servidor.
*
*/