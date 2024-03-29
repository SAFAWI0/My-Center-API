CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(15) UNIQUE not null,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
)

CREATE TABLE categories (
    cat_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    img VARCHAR(255)
);

CREATE TABLE centers (
    center_id SERIAL PRIMARY KEY,
    center_name VARCHAR(255) NOT NULL,
    cover_img VARCHAR(255),
    logo VARCHAR(255),
    Evaluation INTEGER,
    work_time VARCHAR(255),
    details TEXT,
    phone VARCHAR(15),
    log DOUBLE PRECISION,
    lat DOUBLE PRECISION,
    cat_id INTEGER REFERENCES categories(cat_id)
);
CREATE TABLE sessions (
    ses_id SERIAL PRIMARY KEY,
    ses_name VARCHAR(255) NOT NULL,
    img VARCHAR(255),
    video VARCHAR(255),
    details TEXT,
    center_id INTEGER REFERENCES centers(center_id)
)
CREATE TABLE offers (
    offer_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    title VARCHAR(255) NOT NULL,
    img VARCHAR(255),
    video VARCHAR(255),
    details TEXT,
    price DECIMAL(10, 2) NOT NULL,
    deadline DATE,
    center_id INTEGER REFERENCES centers(center_id)
);
CREATE TABLE advertisements (
    ad_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    img VARCHAR(255),
    video VARCHAR(255),
    details TEXT,
    ses_id INTEGER REFERENCES sessions(ses_id)
);
CREATE TABLE orders (
    order_id SERIAL PRIMARY KEY,
    user_id INTEGER REFERENCES users(user_id),
    ses_id INTEGER REFERENCES sessions(ses_id),
    center_id INTEGER REFERENCES centers(center_id),
    //offer_id INTEGER REFERENCES offers(offer_id),
    price DECIMAL(10, 2),
    order_date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);