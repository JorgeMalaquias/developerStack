import Joi from 'joi';
 import { TypeCreateQuestion} from '../types/questionTypes';

export const questionSchema = Joi.object<TypeCreateQuestion>({
  askedBy: Joi.string().required(),
  question: Joi.string().required()
});
