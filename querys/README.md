## Querys

# A)
```SQL
select * 
	from users a
	join "groups" b on a.id = b.users_id
where a.created BETWEEN '2013-01-01 00:00:01'
AND '2013-01-31 23:59:59';
and b.id in (15,40)
```

# B)
```SQL
select * from users a 
where a.login = 'Name'
and a.password_ = (CRYPT('My PASSWORD', a.password_));
```


# C)
```SQL
insert into users(id,login, password_, name, created)
values (459, 'Mateus', ENCODE(DIGEST('Mateus123$','sha1'),'hex'), 'Mateus Pilo Dias', current_timestamp)

insert into groups(id, users_id, name, description)
values (20, 459, 'GRUPO 20', 'DESCRICAO 20')

insert into groups(id, users_id, name, description)
values (33, 459, 'GRUPO 33', 'DESCRICAO 33')
```

# D)
```SQL
select * 
	from users a
	join groups b on a.id = b.users_id
    join permissions c on b.id = c.groups_id
where c.id in (55, 80, 48)
```

# E) On Delete Cascade
```SQL
TRUNCATE users CASCADE;
```
    On delete

```SQL
delete from permissions;
delete from groups;
delete from users;
```
    on truncate 

```SQL
TRUNCATE permissions;
TRUNCATE groups;
TRUNCATE users;
```