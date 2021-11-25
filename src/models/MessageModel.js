/* eslint-disable no-await-in-loop */
const connection = require('../database/connection');

module.exports = {
  async create(message) {
    const result = await connection('message').insert(message);
    return result;
  },

  async deleteById(message_id) {
    const result = await connection('message').where({ message_id }).delete();
    return result;
  },

  async getByUserId(id, type) {
    const result = await connection('message')
      .where({
        message_type: 'message',
        message_sender_type: type,
        message_sender_id: id,
      })
      .orWhere({
        message_type: 'message',
        message_receiver_type: type,
        message_receiver_id: id,
      })
      .where({ message_sender_type: type, message_sender_id: id })
      .orWhere({ message_receiver_type: type, message_receiver_id: id })
      .andWhere({ message_parent_id: '' })
      .orderBy('message_status', 'desc')
      .select('*');

    // eslint-disable-next-line no-restricted-syntax
    for (const r of result) {
      const sen = r.message_sender_type;
      const rec = r.message_receiver_type;
      let sender;
      let receiver;

      if (sen === 'student') {
        const stud_id = r.message_sender_id;
        sender = await connection('student')
          .select('*')
          .where({ stud_id })
          .first();
      } else if (sen === 'admin') {
        const adm_id = r.message_sender_id;
        sender = await connection('administrator')
          .where({ adm_id })
          .select('*')
          .first();
      }

      if (rec === 'student') {
        const stud_id = r.message_receiver_id;
        receiver = await connection('student')
          .where({ stud_id })
          .select('*')
          .first();
      } else if (rec === 'admin') {
        const adm_id = r.message_receiver_id;
        receiver = await connection('administrator')
          .where({ adm_id })
          .select('*')
          .first();
      }

      const parent_message = await connection('message')
        .where({ message_parent_id: r.message_id })
        .select('*')
        .first();
      r.parent_message = parent_message;

      r.sender = sender;
      r.receiver = receiver;
    }
    return result;
  },

  async getNotification(id, type) {
    const result = await connection('message')
      .where({
        message_type: 'notification',
        message_receiver_type: type,
        message_receiver_id: id,
      })
      .select('*');

    // eslint-disable-next-line no-restricted-syntax
    for (const r of result) {
      const sen = r.message_sender_type;
      const rec = r.message_receiver_type;
      let sender;
      let receiver;

      if (sen === 'student') {
        const stud_id = r.message_sender_id;
        sender = await connection('student')
          .select('*')
          .where({ stud_id })
          .first();
      } else if (sen === 'admin') {
        const adm_id = r.message_sender_id;
        sender = await connection('administrator')
          .where({ adm_id })
          .select('*')
          .first();
      }

      if (rec === 'student') {
        const stud_id = r.message_receiver_id;
        receiver = await connection('student')
          .where({ stud_id })
          .select('*')
          .first();
      } else if (rec === 'admin') {
        const adm_id = r.message_receiver_id;
        receiver = await connection('administrator')
          .where({ adm_id })
          .select('*')
          .first();
      }

      r.sender = sender;
      r.receiver = receiver;
    }
    return result;
  },

  async getById(message_id) {
    const result = await connection('message')
      .where({ message_id })
      .select('*')
      .first();
    const sen = result.message_sender_type;
    const rec = result.message_receiver_type;
    let sender;
    let receiver;

    if (sen === 'student') {
      const stud_id = result.message_sender_id;
      sender = await connection('student')
        .select('*')
        .where({ stud_id })
        .first();
    } else if (sen === 'admin') {
      const adm_id = result.message_sender_id;
      sender = await connection('administrator')
        .where({ adm_id })
        .select('*')
        .first();
    }

    if (rec === 'student') {
      const stud_id = result.message_receiver_id;
      receiver = await connection('student')
        .where({ stud_id })
        .select('*')
        .first();
    } else if (rec === 'admin') {
      const adm_id = result.message_receiver_id;
      receiver = await connection('administrator')
        .where({ adm_id })
        .select('*')
        .first();
    }

    if (result.message_parent_id) {
      const parent_message = await connection('message')
        .where({ message_id: result.message_parent_id })
        .select('*')
        .first();
      result.parent_message = parent_message;
    }

    result.sender = sender;
    result.receiver = receiver;

    return result;
  },

  async updateById(message_id, message) {
    const result = await connection('message')
      .where({ message_id })
      .update(message);
    return result;
  },
};
