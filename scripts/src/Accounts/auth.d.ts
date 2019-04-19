interface IProfileData {
  name: string,
  nickname: string,
  picture: string,
  sub: string,
  updated_at: string
}
interface IAccountHeaderProps {
  loggedIn: boolean,
  profileData: IProfileData,
  getProfile: () => null,
  login: () => null,
  checkLoginStatus: () => null,
  logout: () => null,
  signUp: () => null
}