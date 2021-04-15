/**
* @swagger
*  /searchArea/{search_area_id}:
*    delete:
*      summary: Deleta uma área de pesquisa
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
*         description: Id da área de pesquisa a ser deletada.
*      tags: [Área de pesquisa]
*      description: Deletar área de pesquisa.
*      responses: 
*       '200':
*        description: Área de pesquisa deletada.
*       '500':
*        description: Erro do servidor.
*
*/