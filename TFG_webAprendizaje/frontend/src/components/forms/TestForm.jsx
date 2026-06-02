function TestForm({
    question,
    onAnswer
}) {

    return (
        <div>

            <h2 className="font-bold mb-4">
                {question.title}
            </h2>

            {question.answers.map(
                answer => (

                    <button
                        key={answer.id}
                        onClick={() =>
                            onAnswer(answer.id)
                        }
                        className="block w-full text-left border p-3 rounded mb-2"
                    >
                        {answer.text}
                    </button>

                )
            )}

        </div>
    );
}

export default TestForm;