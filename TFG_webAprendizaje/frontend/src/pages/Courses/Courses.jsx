import MainLayout from "../../layouts/MainLayout";

function Courses() {

    const courses = [
        {
            id: 1,
            title: "HTML",
            topics: 10
        },
        {
            id: 2,
            title: "CSS",
            topics: 8
        },
        {
            id: 3,
            title: "JavaScript",
            topics: 15
        }
    ];

    return (
        <MainLayout>

            <h1 className="text-3xl font-bold mb-6">
                Cursos
            </h1>

            <div className="grid md:grid-cols-3 gap-5">

                {courses.map(course => (

                    <div
                        key={course.id}
                        className="bg-white rounded-lg shadow p-5"
                    >
                        <h2 className="font-bold text-xl">
                            {course.title}
                        </h2>

                        <p>
                            Temas: {course.topics}
                        </p>
                    </div>

                ))}

            </div>

        </MainLayout>
    );
}

export default Courses;