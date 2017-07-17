# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
email           | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## comments
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
user_id     | integer   | not null, foreign key (references users), indexed
song_id     | integer   | not null, foreign key (references songs), indexed

## songs
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
song        | bytea     | not null
user_id     | integer   | not null, foreign key (references users), indexed
title       | string    | not null
artist      | string    | not null
genre       | string    | not null
image       | bytea     |

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
song_id     | integer   | not null, foreign key (references songs), indexed

## profiles
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
profile_img | bytea     |
cover_img   | bytea     |
description | string    |
