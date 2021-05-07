/**
* @swagger
*  /disconnect/searchArea_discipline/{search_dis_id}:
*    delete:
*      summary: Permite remover as relações das áreas de pesquisa com a disciplina
*      parameters:
*       - in: header
*         name: Authorization Bearer Token
*       - in: params
*         name: search_dis_id
*         required: true
*         description: ID da relação que será removida
*      tags: [ÁreaDePesquisa_Disciplina]
*      description: Permite a remoção das conexões feitas na tabela relacional
*      responses:
*       '200':
*        description: Desconexão feita.
*       '500':
*        description: Erro do servidor.
*
*/