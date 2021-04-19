/**
* @swagger
*  /disconnect/professor_discipline/{professor_dis_id}:
*    delete:
*      summary: Permite remover as relações das disciplinas com o professor.
*      parameters:
*       - in: header
*         name: Authorization Bearer Token
*       - in: params
*         name: professor_dis_id
*         required: true
*         description: ID da relação que será removida
*      tags: [Professor_Disciplina]
*      description: Permite a remoção das conexões feitas na tabela relacional
*      responses:
*       '200':
*        description: Desconexão realizada com sucesso.
*       '500':
*        description: Erro do servidor.
*
*/