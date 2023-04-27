SELECT pg_terminate_backend(pid)
FROM og_stat_activity
WHERE
-- don't kill my own connection!
pid <> pg_backend_pid()
-- don't kill the connections to other databases
AND datname = 'cruddur';