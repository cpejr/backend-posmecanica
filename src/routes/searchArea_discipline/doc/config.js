/**
* @swagger
* tags:
*   name: ÁreaDePesquisa_Disciplina
*   description: Tabela que relaciona áreas de pesquisa e disciplinas 
*/

/**
* @swagger
* components:
*  schemas:
*    ÁreaDePesquisa_Disciplina:
*      type: object
*      required:
*        - search_dis_id
*        - sAd_dis_id
*        - sAd_research_id
*      properties:
*        search_dis_id:
*           type: uuid
*           description: Campo autogerado.
*        sAd_dis_id:
*            type: uuid
*            description: ID das disciplinas que serão atribuídas à área de pesquisa.
*        sAd_research_id:
*            type: string
*            description: ID da área de pesquisa a qual você vai atribuir as disciplinas
*/