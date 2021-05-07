/**
* @swagger
*  /searchArea:
*    get:
*      summary: Lista todas as áreas de pesquisa do sistema
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica.
*      tags: [Área de pesquisa]
*      description: Busca todas as áreas de pesquisa do sistema e as lista.
*      responses: 
*       '200':
*        description: Vetor com todas as áreas de pesquisa cadastrados.
*       '500':
*        description: Erro do servidor.
*
*/