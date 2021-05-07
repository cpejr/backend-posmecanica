/**
* @swagger
*  /searchArea:
*    post:
*      summary: Criar novas áreas de pesquisa.
*      requestBody: 
*         required: true
*         content: 
*          application/json:
*            schema:
*              $ref: '#/components/schemas/Área de pesquisa'
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*         schema: 
*          type: string
*         required: true
*         description: Autorização básica. 
*       - in: body
*         name: search_area_name
*         required: true
*         description: Nome da área de pesquisa que será criada.
*      tags: [Área de pesquisa]
*      description: Criar área de pesquisa.
*      responses: 
*       '200':
*        description: Área de pesquisa criada.
*       '500':
*        description: Erro do servidor
*
*/