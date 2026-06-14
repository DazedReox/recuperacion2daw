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
                Cargando...
            </MainLayout>
        );

    return (

        <MainLayout>

            <h1 className="text-3xl font-bold mb-4">

                {test.title}

            </h1>

            <p className="mb-6">

                {test.description}

            </p>

            {test.questions.map(question => (

                <div
                    key={question.id}
                    className="bg-white shadow rounded p-4 mb-4"
                >

                    <h3 className="font-bold mb-3">

                        {question.question}

                    </h3>

                    {question.answers.map(answer => (

                        <label
                            key={answer.id}
                            className="block"
                        >

                            <input
                                type="radio"
                                name={`q${question.id}`}
                                value={answer.id}
                                onChange={() =>
                                    setAnswers({
                                        ...answers,
                                        [question.id]:
                                            answer.id
                                    })
                                }
                            />

                            {" "}
                            {answer.answer}

                        </label>

                    ))}

                </div>

            ))}
            <button
                onClick={finishTest}
                className="
                    bg-indigo-600
                    text-white
                    px-4
                    py-2
                    rounded
                "
            >

                Finalizar Test

            </button>
            {result && (

                <div
                    className="
                        mt-6
                        bg-green-100
                        p-4
                        rounded
                    "
                >

                    <h3 className="font-bold">

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

        </MainLayout>
    );
}

export default TestDetail;