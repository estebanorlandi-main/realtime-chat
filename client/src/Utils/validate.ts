export function validateUsername(username: string) {
  return /^[\w]{3,16}$/.test(username);
}

export function validatePassword(password: string) {
  return /^[\w]{8,16}$/.test(password);
}

function validate() {}

export default validate;
