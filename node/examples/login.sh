curl --request POST \
  --url http://localhost:3000/user/login \
  --header 'Content-Type: application/json' \
  --data '{
	"email": "user@example.com",
	"password": "12345678"
}'