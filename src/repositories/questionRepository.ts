import { prisma } from "../config/database";
import { TypeCreateQuestion } from "../types/questionTypes";

export async function createQuestion({askedBy,question}:TypeCreateQuestion){
    await prisma.questions.create({
        data: {
            askedBy,
            question
        }
    });
}

export async function get(){
    const questions = await prisma.questions.findMany();
    return questions;
}