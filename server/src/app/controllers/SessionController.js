import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import User from '../schema/User';
import * as Yup from 'yup';

import authConfig from '../../config/auth';

const authenticationSchema = Yup.object().shape({
  email: Yup.string()
    .email()
    .required(),
  senha: Yup.string()
    .min(6)
    .max(15)
    .required(),
});

class SessionController {
  async store(req, res) {
    try {
      if (!(await authenticationSchema.isValid(req.body))) {
        return res.status(401).json({ error: 'Dados Inválidos' });
      }

      const { email, senha } = req.body;

      const user = await User.findOne({ email })
        .lean()
        .exec();

      if (!user) {
        return res.status(401).json({ error: 'Usuário não encontrado!' });
      }

      if (senha !== user.senha) {
        return res.status(401).json({ error: 'Dados Inválidos' });
      }

      const { _id, nome, admin, cargo } = user;

      const signed = true;

      return res.json({
        user: {
          _id,
          nome,
          email,
          cargo,
          admin,
          signed,
        },
        token: jwt.sign({ _id, admin }, authConfig.secret, {
          expiresIn: authConfig.expiresIn,
        }),
      });
    } catch (err) {
      return res.status(401).json({ error: err.message });
    }
  }
}

export default new SessionController();
