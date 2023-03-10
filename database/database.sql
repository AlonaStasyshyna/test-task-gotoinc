create TABLE person(
    id SERIAL PRIMARY KEY,
    username VARCHAR(255),
    password VARCHAR(255)
);

create TABLE todo(
    id SERIAL PRIMARY KEY,
    text VARCHAR(255),
    is_completed BOOLEAN,
    user_id INTEGER,
    FOREIGN KEY (user_id) REFERENCES person(id)
);

create TABLE category(
    id SERIAL PRIMARY KEY,
    name VARCHAR(255)
);
