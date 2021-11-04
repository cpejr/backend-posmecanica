const { v4: uuidv4 } = require('uuid');
const QualificationModel = require('../models/QualificationModel');

const buildQualificationObject = (qualification, quali_stud_id) => {
  qualification.quali_id = uuidv4();
  qualification.quali_stud_id = quali_stud_id;
};

module.exports = {
  async create(request, response) {
    try {
      const qualification = request.body;
      const { quali_stud_id } = request.params;
      buildQualificationObject(qualification, quali_stud_id);
      await QualificationModel.create(qualification);
      return response.status(200).json({ id: qualification.quali_id });
    } catch (err) {
      console.error(`Qualification creation failed: ${err}`);
      return response.status(500).json({
        notification:
          'Internal server error while trying to create Qualification',
      });
    }
  },

  async getAll(request, response) {
    try {
      const result = await QualificationModel.getAll(
        request.query.times,
        request.query.field,
        request.query.filter
      );
      return response.status(200).json(result);
    } catch (err) {
      console.error(`Qualification getAll failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to get Qualification',
      });
    }
  },

  async getById(request, response) {
    try {
      const { quali_id } = request.params;
      const result = await QualificationModel.getById(quali_id);
      return response.status(200).json(result);
    } catch (err) {
      console.error(`Qualification getById failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to get Qualification',
      });
    }
  },

  async getByStudent(request, response) {
    try {
      const { quali_stud_id } = request.params;
      const result = await QualificationModel.getByStudent(quali_stud_id);
      return response.status(200).json(result);
    } catch (err) {
      console.error(`Qualification getByStudent failed: ${err}`);
      return response.status(500).json({
        notification: 'Internal server error while trying to get Qualification',
      });
    }
  },

  async update(request, response) {
    try {
      const { quali_id } = request.params;
      const qualification = request.body;
      const result = await QualificationModel.updateById(
        quali_id,
        qualification
      );

      return response.status(200).json(result);
    } catch (err) {
      console.error(`Qualification update failed: ${err}`);
      return response.status(500).json({
        notification:
          'Internal server error while trying to update Qualification',
      });
    }
  },

  async delete(request, response) {
    try {
      const { quali_id } = request.params;
      const result = await QualificationModel.deleteById(quali_id);
      return response.status(200).json(result);
    } catch (err) {
      console.error(`Qualification delete failed: ${err}`);
      return response.status(500).json({
        notification:
          'Internal server error while trying to delete Qualification',
      });
    }
  },
};
