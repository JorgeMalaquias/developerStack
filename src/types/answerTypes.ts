import { Answers } from "@prisma/client";

export type TypeCreateAnswerBody = Omit<Answers, "id" | "question" | "questionId">;

export type TypeCreateAnswer = Omit<Answers, "id" | "question">;