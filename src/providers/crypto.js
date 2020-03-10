import env from 'configs/env';
import AES from 'crypto-js/aes';
import encUtf8 from 'crypto-js/enc-utf8';
import encBase64 from 'crypto-js/enc-base64';

const key = 'function';

export default {
  encrypt: content =>
    env(
      () => {
        const keyParsed = encUtf8.parse(key);
        const iv = encBase64.parse(key);

        return AES.encrypt(content, keyParsed, { iv }).toString();
      },
      () => content
    ),
  decrypt: encrypted =>
    env(
      () => {
        const keyParsed = encUtf8.parse(key);
        const iv = encBase64.parse(key);
        const decrypted = AES.decrypt(
          { ciphertext: encBase64.parse(encrypted) },
          keyParsed,
          {
            iv
          }
        );
        return encUtf8.stringify(decrypted);
      },
      () => encrypted
    )
};
