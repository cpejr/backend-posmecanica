/**
* @swagger
*  /connect/searchArea_professor/{sp_professor_id}:
*    post:
*      summary: Permite atribuir diversos professores a uma área de pesquisa
*      requestBody:
*         required: true
*         content:
*          application/json:
*            schema:
*              $ref: '#/components/schemas/ÁreaDePesquisa_Professor'
*      parameters:
*       - in: header
*         name: Authorization Bearer Token
*       - in: params
*         name: sp_professor_id
*         required: true
*         description: Professor que será conectado as áreas de pesquisa.
*       - in: body
*         name: sp_searchArea_id
*         required: true
*         description: Áreas de pesquisa que serão ligadas ao professor.
*      tags: [ÁreaDePesquisa_Professor]
*      description: Permite a conexão de várias áreas de pesquisa a um professor e a armazena numa tabela relacional.
*      responses:
*       '200':
*        description: Conexão feita.
*       '500':
*        description: Erro do servidor.
*
*/