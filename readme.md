## How to code
You can write your code in `test.ts`

## Run with NVM
```
# setup first time
nvm use
npm install

# run 
npm run test
```

## Run with Docker
```
# shell to container
docker-compose run --rm app bash

# npm install (only first time)
npm install

# run
npm run test

# when you want to exit container
exit
```