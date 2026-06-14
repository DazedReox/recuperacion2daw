import {useEffect, useState} from "react";
import MainLayout from "../../layouts/MainLayout";
import testService from "../../services/testService";
import { Link } from "react-router-dom";

function Tests() {

    const [tests, setTests] =
        useState([]);

    useEffect(() => {

        loadTests();

    }, []);

    const loadTests = async () => {

        const data =
            await testService.getTests();

        setTests(data);
    };

    return (

        <MainLayout>

            <h1 className="text-3xl font-bold mb-6">
                Cuestionarios
            </h1>

            <div className="space-y-4">

                {tests.map(test => (

                    <div
                        key={test.id}
                        className="bg-white p-5 rounded shadow"
                    >

                        <h2 className="font-bold">

                            {test.title}

                        </h2>

                        <p>

                            {test.description}

                        </p>
                        <Link
                            to={`/tests/${test.id}`}
                            className="text-indigo-600 font-semibold"
                        >
                            Realizar test
                        </Link>

                    </div>

                ))}

            </div>

        </MainLayout>
    );
}

export default Tests;