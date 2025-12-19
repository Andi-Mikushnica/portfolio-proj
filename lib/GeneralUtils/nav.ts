export type NavItem = {
    slug: string;
    label: string;
}

export const navList: NavItem[] = [
    { slug: "", label: "Home" },
    { slug: "about", label: "About Me" },
    { slug: "portfolio", label: "Portfolio" },
    { slug: "getintouch", label: "Get In Touch" },
    { slug: "privacypolicy", label: "Privacy Policy" }
]