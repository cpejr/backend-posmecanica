/**
* @swagger
*  /disconnect/student_dis/{student_dis_id}:
*    delete:
*      summary: Permite remover as relações do estudante com as disciplinas
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*       - in: params
*         name: student_dis_id
*         required: true
*         description: ID da relação que será removida
*      tags: [Estudante_Disciplina]
*      description: Permite a remoção das conexões feitas na tabela relacional
*      responses: 
*       '200':
*        description: Desconexão feita.
*       '500':
*        description: Erro do servidor.
*
*/