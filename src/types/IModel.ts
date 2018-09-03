export interface IUser {
  id?: string
  username?: string
  displayName?: string
  email?: string
  avatar?: string
  role?: string // enum
  bio?: string
  hidden?: boolean
  createAt?: string // todo: date
  updateAt?: string
}
