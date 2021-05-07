/**
* @swagger
*  /disconnect/searchArea_professor/{searchArea_professor_id}:
*    delete:
*      summary: Permite remover as relações das áreas de pesquisa com o professor
*      parameters:
*       - in: header
*         name: Authorization Bearer Token
*       - in: params
*         name: searchArea_professor_id
*         required: true
*         description: ID da relação entre a área de pesquisa e o professor que se deseja deletar.
*      tags: [ÁreaDePesquisa_Professor]
*      description: Permite a remoção das conexões feitas na tabela relacional
*      responses:
*       '200':
*        description: Desconexão realizada com sucesso.
*       '500':
*        description: Erro do servidor.
*
*/