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
song        | string    | not null
user_id     | integer   | not null, foreign key (references users), indexed
genre_id    | integer   | not null, foreign key (references genres), indexed
title       | string    | not null
artist      | string    | not null
genre       | string    | not null
image       | string    |

## likes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed
song_id     | integer   | not null, foreign key (references songs), indexed
  * combination of user_id and song_id will be indexed and made unique

## profiles
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
user_id     | integer   | not null, foreign key (references users), indexed, unique
profile_img | string    |
cover_img   | string    |
description | string    |

## genres
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | integer   | not null
