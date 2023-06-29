echo "\nInitializing git repository\n"
git init

echo "\nInitializing husky (Please hit return/enter key for the next prompt)\n"
npx husky-init

echo "\nInstalling node_modules\n"
yarn install

echo "\nInitializing husky hooks\n"
npx husky set .husky/pre-commit "npm run test && npm run lint"

echo "\n Install pods \n"
cd ios && pod install && cd ..

touch .env