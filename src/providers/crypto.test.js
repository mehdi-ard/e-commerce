import crypto from './crypto';

it('test encrypt', () => {
  const conent = 'hello';
  const encrypted = crypto.encrypt(conent);
  const encrypted2 = crypto.encrypt(conent);
  expect(encrypted).toBe(encrypted2);
});

it('test encrypt and decrypt', () => {
  const conent = 'hello';
  const encrypted = crypto.encrypt(conent);
  const decrypted = crypto.decrypt(encrypted);
  expect(decrypted).toBe(conent);
});

it('test token', () => {
  const token =
    'xx5Hn2TczJmZr6ymyUAdpM2oRsAWSh4keGM4jOPic413UM+C/deLHYy+wZtJnrASo9TGpbSH9myvMI2nQQjjo67hiqrka2dKMSgCgsOtOtN4o6ff1EFM1leY6YdF9m8WXvPw2w+WnNclK2+YLYqNGgq4KZ/h8qj/nFk4mwfKGMBdnDMwui1xibSh6En73ziStXSzK8ipeO6rxczkywSGE2WscCrbz0WyMLUKUxmlyFZu+jfPmIzCUsfxcqtaffDj1D+2EfSAp+Sy4mtSugMvdQ==';
  const encrypted = crypto.encrypt(token);
  const decrypted = crypto.decrypt(encrypted);
  expect(token).toBe(decrypted);
});
