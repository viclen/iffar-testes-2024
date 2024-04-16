curl --request POST \
  --url http://localhost:3000/user/register \
  --header 'Content-Type: application/json' \
  --data '{
	"firstName": "Joao",
	"lastName": "Silva",
	"email": "joao@example.com",
	"password": "password123"
}'