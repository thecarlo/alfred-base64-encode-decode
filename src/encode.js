import alfy from 'alfy';
import base64 from 'base-64';

const { input } = alfy;

try {
  const encoded = base64.encode(input);

  alfy.output([
    {
      title: encoded,
      subtitle: 'hit enter to copy to clipboard',
      arg: encoded,
    },
  ]);
} catch (error) {
  alfy.error(`Error: ${error.message}`);
}
