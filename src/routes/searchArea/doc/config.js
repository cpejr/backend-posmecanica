/**
* @swagger
* tags:
*   name: Área de pesquisa
*   description: Área de pesquisa que contém disciplinas e professores
*/

/**
* @swagger
* components:
*  schemas:
*    Área de pesquisa:
*      type: object
*      required:
*        - search_area_id
*        - search_area_name
*      properties:
*        search_area_id:
*           type: uuid
*           description: Campo autogerado.
*        search_area_name:
*            type: string
*            description: Nome da área de pesquisa.
*/