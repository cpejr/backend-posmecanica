const AdmModel = require('../models/AdmModel')

module.exports = {
  async create(request, response) {
    try {
      const administrator = request.body
      const result = await AdmModel.create(administrator)
      return response.status(200).json(result)
    } catch (err) {
      console.log(`Administrator creation failed: ${err}`)
      return response.status(500).json({
        notification:
          'Internal server error while trying to create administrator',
      })
    }
  },

  async getAll(request, response) {
    try {
      const result = await AdmModel.getAll()

      return response.status(200).json(result)
    } catch (err) {
      console.log(`Administrator getAll failed: ${err}`)
      return response.status(500).json({
        notification: 'Internal server error while trying to get administrator',
      })
    }
  },

  async getById(request, response) {
    try {
      const { adm_id } = request.params
      const result = await AdmModel.getById(adm_id)
      return response.status(200).json(result)
    } catch (err) {
      console.log(`Administrator getById failed: ${err}`)
      return response.status(500).json({
        notification: 'Internal server error while trying to get administrator',
      })
    }
  },

  async update(request, response) {
    try {
      const { adm_id } = request.params
      const administrator = request.body
      const result = await AdmModel.updateById(adm_id, administrator)

      return response.status(200).json(result)
    } catch (err) {
      console.log(`Administrator update failed: ${err}`)
      return response.status(500).json({
        notification:
          'Internal server error while trying to update administrator',
      })
    }
  },

  async delete(request, response) {
    try {
      const { adm_id } = request.params

      const result = await AdmModel.deleteById(adm_id)
      return response.status(200).json(result)
    } catch (err) {
      console.log(`Administrator delete failed: ${err}`)
      return response.status(500).json({
        notification:
          'Internal server error while trying to delete Administrator',
      })
    }
  },
}
