export interface UserData {
  avatar_url: string
  followers: number
  following: number
  public_repos: number
  name: string | null // 有可能不公开
  login: string
  created_at: string
}
