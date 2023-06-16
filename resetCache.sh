watchman watch-del-all;rm -rf yarn.lock node_modules $TMPDIR/react-* ; yarn cache clean; yarn install;
cd ios;
rm Podfile.lock; pod deintegrate ; pod install --repo-update;
cd ../android;
./gradlew --stop; ./gradlew clean; 
cd ../
yarn start --reset-cache;
