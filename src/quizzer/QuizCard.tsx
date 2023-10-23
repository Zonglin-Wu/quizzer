import React from "react";
import "./QuizCard.css";
import { Question } from "../interfaces/question";

interface Quiz {
    id: number;
    title: string;
    body: string;
    published: boolean;
    questionList: Question[];
}

interface QuizCardProps {
    quiz: Quiz;
    handleClick: (id: number) => void;
}

export const QuizCard: React.FC<QuizCardProps> = ({ quiz, handleClick }) => {
    const filteredQuestions = quiz.questionList.filter(
        (q: Question): boolean =>
            (quiz.published && q.published) || !quiz.published
    );

    return (
        <div className="quiz_view_card">
            <div className="d-flex align-items-baseline">
                <h3
                    className="title"
                    onClick={() => {
                        handleClick(quiz.id);
                    }}
                >
                    {quiz.title}
                </h3>
                <p>
                    {filteredQuestions.length} question
                    {filteredQuestions.length !== 1 ? "s" : ""}
                </p>
            </div>
            <p>{quiz.body}</p>
        </div>
    );
};
