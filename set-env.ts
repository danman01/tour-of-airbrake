const writeFile = require('fs').writeFile;
// Configure Angular `environment.ts` file path
const targetPath = './src/environments/environment.ts';
// Load node modules
const colors = require('colors');
require('dotenv').config();
// `environment.ts` file structure
const envConfigFile = `export const environment = {
  airbrakeProjectId: '${process.env.AIRBRAKE_PROJECT_ID}',
  airbrakeProjectKey: '${process.env.AIRBRAKE_PROJECT_KEY}',
  apiBaseUrl: '${process.env.API_BASE_URL}',
  apiUrl: '${process.env.API_URL}',
  appName: '${process.env.APP_NAME}',
  awsPubKey: '${process.env.AWSKEY}',
  nodeEnv: '${process.env.NODE_ENV}',
  production: '${process.env.PRODUCTION}'
};
`;
console.log(colors.magenta('The file `environment.ts` will be written with the following content: \n'));
console.log(colors.grey(envConfigFile));
writeFile(targetPath, envConfigFile, function (err) {
  if (err) {
    throw console.error(err);
   } else {
       console.log(colors.magenta(`Angular environment.ts file generated correctly at ${targetPath} \n`));
   }
});