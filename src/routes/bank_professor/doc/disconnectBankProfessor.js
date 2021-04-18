/**
* @swagger
*  /disconnect/bank_professor/{bank_professor_id}:
*    delete:
*      summary: Permite remover as relações da banca com os professores
*      parameters: 
*       - in: header
*         name: Authorization Bearer Token
*       - in: params
*         name: bank_professor_id
*         required: true
*         description: ID da relação que será removida
*      tags: [Banca_Professor]
*      description: Permite a remoção das conexões feitas na tabela relacional
*      responses: 
*       '200':
*        description: Desconexão feita.
*       '500':
*        description: Erro do servidor.
*
*/