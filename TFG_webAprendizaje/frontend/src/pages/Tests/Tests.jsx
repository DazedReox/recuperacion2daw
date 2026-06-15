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

            <div className="page-container">

                <h1 className="section-title">
                    Cuestionarios
                </h1>

                <div className="space-y-4">

                    {tests.map(test => (

                        <div
                            key={test.id}
                            className="card"
                        >

                            <h2 className="card-title">

                                {test.title}

                            </h2>

                            <p className="card-subtitle">

                                {test.description}

                            </p>

                            <Link
                                to={`/tests/${test.id}`}
                                className="btn-link"
                            >
                                Realizar test →
                            </Link>

                        </div>

                    ))}

                </div>

            </div>

        </MainLayout>
    );
}

export default Tests;
