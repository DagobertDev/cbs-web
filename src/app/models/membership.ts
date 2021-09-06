export interface Membership {
  userId: string
  communityId: number
  role: CommunityRole
  username: string
}

export enum CommunityRole {
  Admin, User
}
