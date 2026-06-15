import {
    useEffect,
    useState
} from "react";

import {
    useParams
} from "react-router-dom";

import testService
from "../../services/testService";

import MainLayout
from "../../layouts/MainLayout";

function TestDetail() {

    const { id } =
        useParams();

    const [test, setTest] =
        useState(null);

    const [answers, setAnswers] =
        useState({});

    useEffect(() => {

        loadTest();

    }, []);

    const [result, setResult] =
    useState(null);

    const loadTest =
        async () => {

            const data =
                await testService
                    .getTestById(id);

            setTest(data);
        };
    const finishTest = async () => {

    let correct = 0;

    test.questions.forEach(question => {

        const selectedAnswer =
            answers[question.id];

        const correctAnswer =
            question.answers.find(
                answer =>
                    answer.is_correct === 1
            );

        if (
            selectedAnswer ===
            correctAnswer?.id
        ) {
            correct++;
        }
    });

    const score =
        Math.round(
            (correct /
                test.questions.length)
            * 100
        );

    setResult({
        correct,
        total:
            test.questions.length,
        score
    });
    try {

    const token =
        localStorage.getItem(
            "token"
        );

    await testService.submitResult({

        testId: test.id,

        score,

        correctAnswers:
            correct,

        totalQuestions:
            test.questions.length

    });

} catch (error) {

    console.error(
        "ERROR TEST:",
        error.response?.data
    );

}
};

    if (!test)
        return (
            <MainLayout>
                <div className="page-container">
                    <p className="loading-state">Cargando...</p>
                </div>
            </MainLayout>
        );

    return (

        <MainLayout>

            <div className="page-container">

                <h1 className="section-title mb-2">

                    {test.title}

                </h1>

                <p className="text-slate-500 mb-6">

                    {test.description}

                </p>

                <div className="space-y-4">

                    {test.questions.map(question => (

                        <div
                            key={question.id}
                            className="card"
                        >

                            <h3 className="font-semibold text-slate-800 mb-3">

                                {question.question}

                            </h3>

                            <div className="space-y-2">

                                {question.answers.map(answer => (

                                    <label
                                        key={answer.id}
                                        className="flex items-center gap-2 px-3 py-2 rounded-xl
                                                   border border-slate-100 hover:bg-slate-50
                                                   cursor-pointer transition-colors"
                                    >

                                        <input
                                            type="radio"
                                            name={`q${question.id}`}
                                            value={answer.id}
                                            className="accent-indigo-600"
                                            onChange={() =>
                                                setAnswers({
                                                    ...answers,
                                                    [question.id]:
                                                        answer.id
                                                })
                                            }
                                        />

                                        <span className="text-slate-700">
                                            {answer.answer}
                                        </span>

                                    </label>

                                ))}

                            </div>

                        </div>

                    ))}

                </div>

                <button
                    onClick={finishTest}
                    className="btn-primary mt-6"
                >

                    Finalizar Test

                </button>

                {result && (

                    <div className="alert-success mt-6">

                        <h3 className="font-bold mb-1">

                            Resultado

                        </h3>

                        <p>

                            Correctas:
                            {" "}
                            {result.correct}
                            /
                            {result.total}

                        </p>

                        <p>

                            Nota:
                            {" "}
                            {result.score}
                            %

                        </p>

                    </div>

                )}

            </div>

        </MainLayout>
    );
}

export default TestDetail;
