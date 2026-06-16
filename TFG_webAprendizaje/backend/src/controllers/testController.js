import testService from "../services/testService.js";
import xpService from "../services/xpService.js";
import statisticsService from "../services/statisticsService.js";

const getTests = async (
    req,
    res
) => {

    const tests =
        await testService.getAll();

    res.json(tests);
};

const getTest = async (
    req,
    res
) => {

    const test =
    await testService.getFullTest(
        req.params.id
    );

    res.json(test);
};

const submitTest = async (
    req,
    res
) => {

    console.log("BODY:",req.body);

    try {

        const userId =
            req.user.id;

        const {
            testId,
            score,
            correctAnswers,
            totalQuestions
        } = req.body;

        await testService.createResult(
            userId,
            testId,
            score,
            correctAnswers,
            totalQuestions
        );

        const earnedXp =
            Math.floor(score * 10);

        await xpService.addXp(
            userId,
            earnedXp
        );

        await statisticsService.updateStatistics(
            userId,
            score
        );

        res.json({
            message:
                "Resultado guardado",
            earnedXp
        });

    } catch (error) {

        res.status(500).json({
            message:
                error.message
        });
    }
};

export {
    getTests,
    getTest,
    submitTest
};