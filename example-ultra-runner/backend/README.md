# backend

### check protocol

- users.query

```sh
curl -XPOST -H 'Content-Type: application/json' localhost:4000/graphql -d '{ "query": "query { users { id, username }}"}'
```

- user.query

```sh
curl -XPOST -H 'Content-Type: application/json' localhost:4000/graphql -d '{ "query": "query { user(id: 1) { id, username }}"}'
```

- createUser.mutation

```sh
curl -XPOST -H 'Content-Type: application/json' localhost:4000/graphql -d '{ "query": "mutation { createUser(username: \"test\") { id, username }}"}'
```

- removeUser.mutation

```sh
curl -XPOST -H 'Content-Type: application/json' localhost:4000/graphql -d '{ "query": "mutation { removeUser(id: 1) { success }}"}'
```

- updateUser.mutation

```sh
curl -XPOST -H 'Content-Type: application/json' localhost:4000/graphql -d '{ "query": "mutation { updateUser(user: { id: 2, username: \"test\" }) { id, username }}"}'
```
