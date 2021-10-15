DROP FUNCTION admin.fn_create_museum_exhibit(_name text, _description text, _exhibit_contents json, _exhibit_status_id integer, _museum_id integer);
DROP FUNCTION admin.fn_register_admin_user(_email TEXT, _password TEXT, _museum_id integer);
DROP FUNCTION museum.fn_register_museum_user(_phone_number TEXT);
DROP FUNCTION museum.fn_login_museum_user(_phone_number text, _confirmation_code text);
DROP TABLE museum.scan;
DROP TABLE museum.exhibit_content;
DROP TABLE museum.exhibit_content_type;
DROP TABLE museum.exhibit;
DROP TABLE museum.exhibit_status;
DROP TABLE museum.user;
DROP TABLE admin.user;
DROP TABLE admin.museum;
DROP FUNCTION admin.fn_update_timestamp();
DROP SCHEMA admin;
DROP FUNCTION museum.fn_update_timestamp();
DROP SCHEMA museum;
DROP TABLE public.flyway_schema_history;