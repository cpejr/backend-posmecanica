/**
* @swagger
*  /searchArea/{search_area_id}:
*    get:
*      summary: Busca uma área de pesquisa pelo seu ID
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica.
*       - in: params
*         name: search_area_id
*         schema: 
*          type: uuid
*         required: true
*         description: Id da áreas de pesquisa a ser buscada.
*      tags: [Área de pesquisa]
*      description: Busca uma áreas de pesquisa especificamente pelo ID.
*      responses: 
*       '200':
*        description: Área de pesquisa encontrada pelo ID.
*       '500':
*        description: Erro do servidor
*
*/