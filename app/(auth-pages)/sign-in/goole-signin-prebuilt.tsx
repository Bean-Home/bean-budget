"use client";


export default function GoogleLogin() {
  return (
    <div className="mt-5">
      <div
        id="g_id_onload"
        data-client_id="7256774870-1tv7uup30ujmfklhqb9o9vceu1oa41eh.apps.googleusercontent.com"
        data-context="signin"
        data-ux_mode="popup"
        data-callback="handleSignInWithGoogle"
        data-auto_select="true"
        data-itp_support="true"
      ></div>

      <div
        className="g_id_signin"
        data-type="standard"
        data-shape="rectangular"
        data-theme="outline"
        data-text="signin_with"
        data-size="medium"
        data-logo_alignment="left"
      ></div>
    </div>
  );
}
