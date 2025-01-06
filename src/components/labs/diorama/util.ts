export const KEY_PIN = "PIN"
export const KEY_EMAIL = "Email Address"

export function hasCredsKeys(creds: object | null) {
    return creds && creds[KEY_EMAIL] && Number.isInteger(creds[KEY_PIN]);
  }