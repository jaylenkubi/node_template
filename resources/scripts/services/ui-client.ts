import fs from 'fs';
import {execSync} from "child_process";


const createUIClientService = () => {
	fs.mkdirSync(`client/libraries/services/ui-services`, { recursive: true });
	console.log(`Created client/libraries/clients/ui-services`);

	console.log(`Generating platform UI client`);
	fs.copyFileSync(`platform/resources/templates/services/custom-instance-ui.ts`, `client/libraries/services/ui-services/custom-instance-ui.ts`);

	fs.copyFileSync(`resources/templates/service/.eslintrc.js`, `client/libraries/services/ui-services/.eslintrc.js`);
	console.log(`Copied ui-client template files to libraries/clients/ui-clients`);
	execSync(`pnpm run client-gen:ui`, { stdio: 'inherit' });
}

createUIClientService();