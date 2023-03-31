
export const getTokenLocalStorage = () => {
  const _token = localStorage.getItem('@Auth:token')
  if(!_token) {
    throw new Error("Usuário não autenticado")
  }
  return _token;
}