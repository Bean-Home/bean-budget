"use client";

import { Button } from "@/components/ui/button";
import { createClient } from "@/utils/supabase/client";

export default function GoogleLogin() {
  const AUTH_CALLBACK_URL = `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`;
  const supabase = createClient();
  const handleSignInGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: AUTH_CALLBACK_URL,
      },
    });
  };
  return (
    <div className="mt-5">
      <Button onClick={handleSignInGoogle}>Google</Button>
    </div>
  );
}
