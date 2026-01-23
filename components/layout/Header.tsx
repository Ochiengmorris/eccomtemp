import React from "react";
import { images } from "@/lib/images/images";
import { Box, Heart, Search, ShoppingCartIcon, User } from "lucide-react";
import Image from "next/image";
import SearchBar from "../search-bar";
import Link from "next/link";

const Header = () => {
  return (
    <div className="w-full h-16 flex items-center justify-between px-24 fixed top-0 z-50 bg-background">
      <div className="flex gap-12 items-center">
        <Image src={images.logo} alt="logo" className="w-22 h-auto" />
        <SearchBar />
      </div>

      <div className="flex items-center gap-12 text-sm font-semibold">
        <Link href={"/"} className="flex gap-2 items-center">
          <Box size={20} />
          Orders
        </Link>
        <Link href={"/"} className="flex gap-2 items-center">
          <Heart size={20} />
          Favorites
        </Link>
        <Link href={"/"} className="flex gap-2 items-center">
          <ShoppingCartIcon size={20} />
          Cart
        </Link>

        <Link href={"/"} className="rounded-full border border-black">
          <User size={20} />
        </Link>
      </div>
    </div>
  );
};

export default Header;
