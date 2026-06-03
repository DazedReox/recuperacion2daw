ALTER TABLE usuarios
ADD CONSTRAINT fk_usuario_rol
FOREIGN KEY (role_id)
REFERENCES roles(id);


ALTER TABLE temas
ADD CONSTRAINT fk_tema_curso
FOREIGN KEY (course_id)
REFERENCES cursos(id)
ON DELETE CASCADE;


ALTER TABLE contenidos
ADD CONSTRAINT fk_contenido_tema
FOREIGN KEY (topic_id)
REFERENCES temas(id)
ON DELETE CASCADE;


ALTER TABLE tests
ADD CONSTRAINT fk_test_tema
FOREIGN KEY (topic_id)
REFERENCES temas(id)
ON DELETE CASCADE;


ALTER TABLE preguntas
ADD CONSTRAINT fk_pregunta_test
FOREIGN KEY (test_id)
REFERENCES tests(id)
ON DELETE CASCADE;


ALTER TABLE respuestas
ADD CONSTRAINT fk_respuesta_pregunta
FOREIGN KEY (question_id)
REFERENCES preguntas(id)
ON DELETE CASCADE;


ALTER TABLE resultados
ADD CONSTRAINT fk_resultado_usuario
FOREIGN KEY (user_id)
REFERENCES usuarios(id);

ALTER TABLE resultados
ADD CONSTRAINT fk_resultado_test
FOREIGN KEY (test_id)
REFERENCES tests(id);


ALTER TABLE usuarios_logros
ADD CONSTRAINT fk_usuario_logro_usuario
FOREIGN KEY (user_id)
REFERENCES usuarios(id)
ON DELETE CASCADE;

ALTER TABLE usuarios_logros
ADD CONSTRAINT fk_usuario_logro_logro
FOREIGN KEY (achievement_id)
REFERENCES logros(id)
ON DELETE CASCADE;


ALTER TABLE publicaciones
ADD CONSTRAINT fk_publicacion_usuario
FOREIGN KEY (user_id)
REFERENCES usuarios(id)
ON DELETE CASCADE;


ALTER TABLE comentarios
ADD CONSTRAINT fk_comentario_post
FOREIGN KEY (post_id)
REFERENCES publicaciones(id)
ON DELETE CASCADE;

ALTER TABLE comentarios
ADD CONSTRAINT fk_comentario_usuario
FOREIGN KEY (user_id)
REFERENCES usuarios(id)
ON DELETE CASCADE;

ALTER TABLE estadisticas
ADD CONSTRAINT fk_estadistica_usuario
FOREIGN KEY (user_id)
REFERENCES usuarios(id)
ON DELETE CASCADE;