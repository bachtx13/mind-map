"use client";
import {useAuth, UserButton} from "@clerk/nextjs";
import {useRouter} from "next/navigation";

const AuthNavItem = () => {
    const { isLoaded, userId, sessionId, getToken } = useAuth();

    // console.log(isLoaded, userId, sessionId)
    // In case the user signs out while on the page.
    const router = useRouter();
    if (!isLoaded || !userId) {
        return <>
            <button onClick={() => router.push("/auth/sign-in")}>Sign In</button>
            <button onClick={() => router.push("/auth/sign-up")}>Sign Up</button>
        </>;
    }

    return (
        <div>
            <UserButton afterSignOutUrl={"/"}></UserButton>
        </div>
    );
};

export default AuthNavItem;