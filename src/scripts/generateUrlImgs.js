
const { Storage } = require("@google-cloud/storage");

const key = "hope-house-private-dev";

const storage = new Storage({
  projectId: "quiet-chalice-432517-m7",
  keyFilename:'src/scripts/quiet-chalice-432517-m7-8974796825b8.json'
});
async function listarArquivosComUrls() {
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

listarArquivosComUrls();