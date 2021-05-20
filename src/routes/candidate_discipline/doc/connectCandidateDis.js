/**
 * @swagger
 *  /connect/candidate_dis/{cd_candidate_id}:
 *    post:
 *      summary: Permite atribuir diversas disciplinas a um candidato
 *      requestBody:
 *         required: true
 *         content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Candidato_Disciplina'
 *      parameters:
 *       - in: header
 *         name: Authorization Bearer Token
 *       - in: params
 *         name: cd_candidate_id
 *         required: true
 *         description: Candidato que será conectado as disciplinas.
 *       - in: body
 *         name: cd_dis_id
 *         required: true
 *         description: Disciplinas que serão ligadas ao candidato.
 *      tags: [Candidato_Disciplina]
 *      description: Permite a conexão de várias disciplinas a um candidato e a armazena numa tabela relacional.
 *      responses:
 *       '200':
 *        description: Conexão feita.
 *       '500':
 *        description: Erro do servidor.
 *
 */
