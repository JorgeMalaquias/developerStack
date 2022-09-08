import Joi from 'joi';
import { TypeCreateAnswerBody } from '../types/answerTypes';

export const answerSchema = Joi.object<TypeCreateAnswerBody>({
  answeredBy: Joi.string().required(),
  answer: Joi.string().required()
});
