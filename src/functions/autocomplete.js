// eslint-disable-next-line import/prefer-default-export
export function getAutocompleteNicknameList(nickname, nicknameList) {
  const nicknameArray = [];
  if (nickname !== '') {
    nicknameList.forEach((user) => {
      if (user.first_name.toLowerCase().indexOf(nickname.toLowerCase()) === 0) {
        nicknameArray.push(user.first_name);
      }
    });
  }

  // return nicknameArray.slice(0, 10);
  return nicknameArray;
}
