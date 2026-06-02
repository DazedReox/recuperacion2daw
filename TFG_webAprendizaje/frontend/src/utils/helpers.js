export const formatDate = (date) => {
    return new Date(date).toLocaleDateString("es-ES");
};

export const calculatePercentage = (
    correctAnswers,
    totalQuestions
) => {

    if (!totalQuestions) return 0;

    return Math.round(
        (correctAnswers / totalQuestions) * 100
    );
};

export const getLevelFromXp = (xp) => {

    if (xp < 100) return 1;
    if (xp < 250) return 2;
    if (xp < 500) return 3;
    if (xp < 1000) return 4;

    return 5;
};