/**
* @swagger
* tags:
*   name: ÁreaDePesquisa_Professor
*   description: Tabela que relaciona áreas de pesquisa e professores do programa
*/

/**
* @swagger
* components:
*  schemas:
*    ÁreaDePesquisa_Professor:
*      type: object
*      required:
*        - searchArea_professor_id
*        - sp_professor_id
*        - sp_searchArea_id
*      properties:
*        searchArea_professor_id:
*           type: uuid
*           description: Campo autogerado.
*        sp_professor_id:
*            type: uuid
*            description: ID dos professores que serão atribuídos à área de pesquisa.
*        sp_searchArea_id:
*            type: string
*            description: ID da área de pesquisa que será atribuída aos professores.
*/