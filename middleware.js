import { NextResponse } from "next/server";

export default function middleware(req) {
  let verify = req.cookies.get("user-access-token");
  let url = req.url;
  if (
    !verify &&
    (url.includes("/upload") ||
      url.includes("/editprofile") ||
      url.includes("/editprofile/security") ||
      url.includes("/editprofile/wishlist") ||
      url.includes("/editprofile/cart") ||
      url.includes("/editprofile/file_cart"))
  ) {
    return NextResponse.redirect("https://cubuild.net");
  }
}
