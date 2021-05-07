/**
* @swagger
*  /searchArea/{search_area_id}:
*    put:
*      summary: Atualiza informações da área de pesquisa pelo ID
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
*         description: Id do candidato a ser atualizado.
*       - in: body
*         name: search_area_name
*         required: true
*         description: Nome da área de pesquisa que será atualizada.
*      tags: [Área de pesquisa]
*      description: Atualizar candidato pelo ID.
*      responses: 
*       '200':
*        description: Área de pesquisa atualizada.
*       '500':
*        description: Erro do servidor.
*
*/