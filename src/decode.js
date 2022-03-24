import alfy from 'alfy';
import base64 from 'base-64';

const { input } = alfy;

try {
  const decoded = base64.decode(input);

  alfy.output([
    {
      title: decoded,
      subtitle: 'hit enter to copy to clipboard',
      arg: decoded,
    },
  ]);
} catch (error) {
  alfy.error(`Error: ${error.message}`);
}
