import { Request, Response } from 'express';
import { TypeCreateQuestion } from "../types/questionTypes";
import * as questionRepository from "../repositories/questionRepository";
import * as answerRepository from "../repositories/answerRepository";
import { Questions } from '@prisma/client';

export async function createQuestion(req: Request, res: Response) {
  await questionRepository.createQuestion(req.body);
  res.sendStatus(201);
}

export async function createAnswer(req: Request, res: Response) {
  await answerRepository.createAnswer({...req.body,questionId:Number(req.params.id)});
  res.sendStatus(201);
}

export async function get(req: Request, res: Response) {
  const questions: Questions[] = await questionRepository.get();
  res.send({questions});
}

export async function getById(req: Request, res: Response) {
  const question = await answerRepository.getById(Number(req.params.id));
  res.send({question});
}
