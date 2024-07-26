# The Factory Backend

## Overview

The backend is made using similar technologies to those used in ECSE 321 allow for easy maintainability and scalability
for future students.

* Java Spring Boot
* PostgreSQL
* Google OAuth2

## Setup

You will need to create your own database to run the code locally:

1. [Install PostgreSQL](https://www.timescale.com/blog/how-to-install-psql-on-mac-ubuntu-debian-windows/)
   Verify that PostgreSQL is installed by running
    ```bash
    psql --version
    ```
2. Create a database called `factory`

```bash
psql -U postgres # or: psql postgres
```

```postgresql
CREATE USER admin WITH PASSWORD 'admin';
```

```postgresql
CREATE DATABASE factory OWNER admin;
```

3. Run the SQL script `insert_data.sql` to insert some sample data
4. Run the application
5. Go to `localhost:8080` to see the backend application  
i. You can also go to `localhost:8080/api` to see and test the APIs
