import { Questions } from "@prisma/client";
import { TypeCreateAnswerBody } from "./answerTypes";


export type TypeCreateQuestion = Omit<Questions,"id">;

interface QuestionWithAnswer{
    id: number,
    askedBy:string,
    question:string,
    answers: TypeCreateAnswerBody[]
}