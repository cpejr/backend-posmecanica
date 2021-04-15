/**
* @swagger
* tags:
*   name: Disciplina
*   description: Disciplinas do programa de pós-graduação, podendo ser ofertadas para matrículas isoladas ou não.
*/

/**
* @swagger
* components:
*  schemas:
*    Disciplina:
*      type: object
*      required:
*        - discipline_id
*        - discipline_code
*        - discipline_content
*        - discipline_name
*        - discipline_is_isolated
*        - discipline_semester
*        - discipline_type
*      properties:
*        discipline_id:
*           type: uuid
*           description: Campo autogerado.
*        discipline_code:
*            type: string
*            description: Código da disciplina.
*        discipline_content:
*            type: text
*            description: Ementa da disciplina.
*        discipline_name:
*            type: string
*            description: Nome da disciplina.
*        discipline_is_isolated:
*            type: boolean
*            description: Verifica se a disciplina é ofertada para matrícula isolada ou não.
*        discipline_semester:
*            type: string
*            description: Semestre em que a disciplina é ofertada (Primeiro, Segundo, Primeiro e Segundo ou Não ofertada).
*        discipline_type:
*            type: string
*            description: Tipo de programa da disciplina(Mestrado ou Doutorado).
*        
*/