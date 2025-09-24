export function isValidAccountId(accountId: string) {
  // Ensure accountId input string only contains numbers
  const pattern = /^\d+$/;
  const regex = new RegExp(pattern);
  return regex.test(accountId);
}
