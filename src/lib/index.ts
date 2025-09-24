// place files you want to import through the `$lib` alias in this folder.
function isValidAccountId(accountId: string) {
  // Ensure accountId input string only contains numbers
  const pattern = /^\d+$/;
  const regex = new RegExp(pattern);
  return regex.test(accountId);
}
