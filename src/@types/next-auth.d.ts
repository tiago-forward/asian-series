import { DefaultUser } from "next-auth"

interface CustomUser extends DefaultUser {}

declare module "next-auth" {
  export interface Session {
    user: CustomUser
  }
}
