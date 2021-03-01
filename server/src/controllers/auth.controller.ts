import { RequestHandler } from 'express';

const login: RequestHandler = async (req, res) => {
  const { username, password } = req.body;
};

export const authController = { login };
