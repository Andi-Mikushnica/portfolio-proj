import linkedin from "@/app/public/socialmedia/linkedin1.svg"
import instagram from "@/app/public/socialmedia/instagram1.svg"

export type SocialMediaItem = {
  socialMediaLink: string,
  path: string,
  alt: string,
}

export const smList: SocialMediaItem[] = [
  {socialMediaLink: "https://www.linkedin.com/in/andin-mik/", path: linkedin, alt: "linkedin logo"},
  {socialMediaLink: "https://www.instagram.com/andinmik/", path: instagram, alt: "instagram logo"}
]