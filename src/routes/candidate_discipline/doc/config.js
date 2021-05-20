/**
 * @swagger
 * tags:
 *   name: Candidato_Disciplina
 *   description: Tabela que relaciona candidatos e disciplinas
 */

/**
 * @swagger
 * components:
 *  schemas:
 *    Candidato_Disciplina:
 *      type: object
 *      required:
 *        - candidate_dis_id
 *        - cd_candidate_id
 *        - cd_dis_id
 *      properties:
 *        candidate_dis_id:
 *           type: uuid
 *           description: Campo autogerado.
 *        cd_candidate_id:
 *            type: uuid
 *            description: ID do candidato o qual vai candidatar as disciplinas.
 *        cd_dis_id:
 *            type: string
 *            description: ID das disciplinas que serão atribuídas ao candidato.
 */
