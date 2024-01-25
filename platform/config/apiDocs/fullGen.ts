import fs from 'fs';
import { retrieveSpec } from './apiDocs';

export const writeFullSpec = () => {
	fs.writeFileSync('platform/swagger/swagger.json', JSON.stringify(retrieveSpec()), {});
};

writeFullSpec();
