rm -rf yarn.lock node_modules ; yarn cache clean; yarn install;
cd ios;
rm Podfile.lock; pod deintegrate ; pod install --repo-update;
cd ../android;
./gradlew --stop; ./gradlew clean; 
cd ../
watchman watch-del-all; yarn start --reset-cache;
