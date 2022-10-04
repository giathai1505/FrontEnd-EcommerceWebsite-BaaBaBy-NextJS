export const phoneNumberRegexp = /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/;

export const isPhoneNumber = (phone: string): boolean =>
  phoneNumberRegexp.test(phone);
