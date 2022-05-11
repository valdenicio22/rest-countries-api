export const removeSpecialCharacters = (arg: string) => {
  const formmattedString = arg.normalize('NFC').replace(/[\u0300-\u036f]/g, '')
  return formmattedString
}
