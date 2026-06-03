CREATE TABLE cursos (

    id INT AUTO_INCREMENT PRIMARY KEY,

    title VARCHAR(150) NOT NULL,

    description TEXT,

    image_url VARCHAR(255),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE roles (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

CREATE TABLE usuarios (
    id INT AUTO_INCREMENT PRIMARY KEY,

    role_id INT NOT NULL,

    username VARCHAR(50) NOT NULL UNIQUE,

    email VARCHAR(100) NOT NULL UNIQUE,

    password VARCHAR(255) NOT NULL,

    avatar VARCHAR(255),

    xp INT DEFAULT 0,

    level INT DEFAULT 1,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (role_id)
        REFERENCES roles(id)
);

CREATE TABLE temas (

    id INT AUTO_INCREMENT PRIMARY KEY,

    course_id INT NOT NULL,

    title VARCHAR(150) NOT NULL,

    description TEXT,

    position INT DEFAULT 1,

    FOREIGN KEY (course_id)
        REFERENCES cursos(id)
        ON DELETE CASCADE
);

CREATE TABLE contenidos (

    id INT AUTO_INCREMENT PRIMARY KEY,

    topic_id INT NOT NULL,

    title VARCHAR(150),

    content LONGTEXT,

    pdf_url VARCHAR(255),

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (topic_id)
        REFERENCES temas(id)
        ON DELETE CASCADE
);

CREATE TABLE tests (

    id INT AUTO_INCREMENT PRIMARY KEY,

    topic_id INT NOT NULL,

    title VARCHAR(150),

    description TEXT,

    FOREIGN KEY (topic_id)
        REFERENCES temas(id)
        ON DELETE CASCADE
);

CREATE TABLE preguntas (

    id INT AUTO_INCREMENT PRIMARY KEY,

    test_id INT NOT NULL,

    question TEXT NOT NULL,

    FOREIGN KEY (test_id)
        REFERENCES tests(id)
        ON DELETE CASCADE
);

CREATE TABLE respuestas (

    id INT AUTO_INCREMENT PRIMARY KEY,

    question_id INT NOT NULL,

    answer TEXT NOT NULL,

    is_correct BOOLEAN DEFAULT FALSE,

    FOREIGN KEY (question_id)
        REFERENCES preguntas(id)
        ON DELETE CASCADE
);

CREATE TABLE resultados (

    id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT NOT NULL,

    test_id INT NOT NULL,

    score DECIMAL(5,2),

    correct_answers INT,

    total_questions INT,

    completed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
        REFERENCES usuarios(id),

    FOREIGN KEY (test_id)
        REFERENCES tests(id)
);

CREATE TABLE logros (

    id INT AUTO_INCREMENT PRIMARY KEY,

    title VARCHAR(100),

    description TEXT,

    xp_reward INT DEFAULT 0
);

CREATE TABLE usuarios_logros (

    user_id INT,

    achievement_id INT,

    obtained_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    PRIMARY KEY (
        user_id,
        achievement_id
    ),

    FOREIGN KEY (user_id)
        REFERENCES usuarios(id)
        ON DELETE CASCADE,

    FOREIGN KEY (achievement_id)
        REFERENCES logros(id)
        ON DELETE CASCADE
);

CREATE TABLE publicaciones (

    id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT NOT NULL,

    title VARCHAR(200),

    content TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
        REFERENCES usuarios(id)
        ON DELETE CASCADE
);

CREATE TABLE comentarios (

    id INT AUTO_INCREMENT PRIMARY KEY,

    post_id INT NOT NULL,

    user_id INT NOT NULL,

    content TEXT,

    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (post_id)
        REFERENCES publicaciones(id)
        ON DELETE CASCADE,

    FOREIGN KEY (user_id)
        REFERENCES usuarios(id)
        ON DELETE CASCADE
);

CREATE TABLE estadisticas (

    id INT AUTO_INCREMENT PRIMARY KEY,

    user_id INT NOT NULL,

    study_hours INT DEFAULT 0,

    tests_completed INT DEFAULT 0,

    success_rate DECIMAL(5,2),

    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

    FOREIGN KEY (user_id)
        REFERENCES usuarios(id)
        ON DELETE CASCADE
);
