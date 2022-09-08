import { TypeCreateAnswer } from "../types/answerTypes";
import { prisma } from "../config/database";

export async function createAnswer({answer,answeredBy,questionId}:TypeCreateAnswer){
    await prisma.answers.create({
        data:{
            answer,
            answeredBy,
            questionId
        }
    });
}

export async function getById(id:number){
    const question = await prisma.questions.findUnique({
        where:{id},
        select:{
            id: true,
            askedBy:true,
            question:true,
            answers:{
                select:{
                    answeredBy:true,
                    answer:true,
                }
            }
        },
    })
}