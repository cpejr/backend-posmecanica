/**
* @swagger
*  /candidates:
*    get:
*      summary: Lista todos os candidatos do sistema
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica.
*      tags: [Candidato]
*      description: Busca todos os candidatos do sistema e as lista. Essa função é exclusiva de administradores e professores.
*      responses: 
*       '200':
*        description: Vetor com todos os candidatos cadastrados.
*       '500':
*        description: Erro do servidor.
*
*/