/* eslint-disable @typescript-eslint/no-var-requires */

require('dotenv').config({ path: '.env.local' });
const { Storage } = require("@google-cloud/storage");
const key = "hope-house-private-dev";

const storage = new Storage({
  credentials:{
    type: process.env.NEXT_PUBLIC_TYPE,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    private_key_id: process.env.NEXT_PUBLIC_PRIVATE_KEY_ID,
    private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY,
    client_email: process.env.NEXT_PUBLIC_CLIENT_EMAIL,
    client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
    token_url: process.env.NEXT_PUBLIC_TOKEN_URI,
    universeDomain:process.env.NEXT_PUBLIC_UNIVERSE_DOMAIN
  }
});
async function getFilesUrl() {
  try {
    const [files] = await storage.bucket(key).getFiles();

    files.forEach(file => {
      const publicUrl = `https://storage.googleapis.com/${key}/${file.name}`;
      console.log(`export const ${file?.name?.split('assets/')[1].split('.')[0].replace(/[\s-]/g, '') || 'bucket'} = "${publicUrl}"`);
    });
  } catch (error) {
    console.error('Erro ao listar arquivos:', error);
  }
}

getFilesUrl();