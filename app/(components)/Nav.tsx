import Link from "next/link";
import { auth, signIn, signOut } from "@/auth";
import { SquarePen, BellDot } from "lucide-react";

const Nav = async () => {
  const session = await auth();

  return (
    <header className="py-4">
      <nav className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <p className="text-2xl text-red-400">Inkwell</p>

          <p className="w-0.5 h-6 bg-[#70706E] rounded-sm"></p>

          <ul className="flex items-center gap-6 list-none text-sm">
            <li className="hover:text-lg">
              <Link href="/">Stories</Link>
            </li>
            <li className="hover:text-lg">
              <Link href="/">Creator</Link>
            </li>
            <li className="hover:text-lg">
              <Link href="/">Community</Link>
            </li>
            <li className="hover:text-lg">
              <Link href="/">Subscribe</Link>
            </li>
          </ul>
        </div>

        <div>
          {session ? (
            <ul className="list-none flex gap-6 items-center">
              <li>
                <Link href="/" className="flex items-center gap-2">
                  <SquarePen size={16} />
                  Write
                </Link>
              </li>
              <li>
                <BellDot size={16} />
              </li>
              <li>
                <form
                  action={async () => {
                    "use server";
                    await signOut();
                  }}
                >
                  <button
                    type="submit"
                    className="py-2 px-4 rounded-xl hover:bg-[#333333] hover:text-[#FFFFFF]"
                  >
                    Log out
                  </button>
                </form>
              </li>
              <li>
                <Link href={`/user/${session?.id}`}></Link>
                {session?.user?.name}
              </li>
            </ul>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button
                type="submit"
                className="py-2 px-4 rounded-xl hover:bg-[#333333] hover:text-[#FFFFFF]"
              >
                Sign in
              </button>
            </form>
          )}
        </div>
      </nav>
    </header>
  );
};
export default Nav;
