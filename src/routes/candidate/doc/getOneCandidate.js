/**
 * @swagger
 *  /candidates/{candidate_id}:
 *    get:
 *      summary: Busca um candidato pelo seu ID
 *      parameters:
 *       - in: header
 *         name: Authorization Bearer Token
 *         schema:
 *          type: string
 *         required: true
 *         description: Autorização básica.
 *       - in: params
 *         name: candidate_id
 *         schema:
 *          type: uuid
 *         required: true
 *         description: Id do candidato a ser buscado.
 *      tags: [Candidato]
 *      description: Busca um candidato especificamente pelo ID.
 *      responses:
 *       '200':
 *        description: Candidato encontrado pelo ID.
 *       '500':
 *        description: Erro do servidor
 *
 */
