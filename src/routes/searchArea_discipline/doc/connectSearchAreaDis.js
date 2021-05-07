/**
* @swagger
*  /connect/searchArea_discipline/{sAd_dis_id}:
*    post:
*      summary: Permite atribuir diversas disciplinas a uma área de pesquisa
*      requestBody: 
*         required: true
*         content: 
*          application/json:
*            schema:
*              $ref: '#/components/schemas/ÁreaDePesquisa_Disciplina'
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*       - in: params
*         name: sAd_dis_id
*         required: true
*         description: Disciplina que será conectado as áreas de pesquisa.
*       - in: body
*         name: sAd_research_id
*         required: true
*         description: Áreas de pesquisa que serão ligadas a disciplina.
*      tags: [ÁreaDePesquisa_Disciplina]
*      description: Permite a conexão de várias áreas de pesquisa a uma disciplina e a armazena numa tabela relacional.
*      responses: 
*       '200':
*        description: Conexão feita.
*       '500':
*        description: Erro do servidor.
*
*/