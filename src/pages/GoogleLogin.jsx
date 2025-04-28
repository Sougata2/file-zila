import { Button } from "@/components/ui/button";
import Cookies from "js-cookie";
import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router";

export default function GoogleLogin() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (
      Cookies.get("access_token") !== undefined &&
      Cookies.get("refresh_token") !== undefined
    )
      return navigate("/view-files");

    if (searchParams.get("code")) {
      const auth_code = searchParams.get("code");

      (async () => {
        const response = await fetch(
          import.meta.env.VITE_AUTH_URL + "/access-token",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ code: auth_code }),
          }
        );
        if (response.ok) {
          const data = await response.json();
          // expiration time for 24 hours.
          const expirationTime = 24 * 60 * 60;
          Cookies.set("access_token", data.access_token, {
            expires: expirationTime / 86400,
          });
          Cookies.set("refresh_token", data.refresh_token, {
            expires: expirationTime / 86400,
          });
          navigate("/view-files");
        }
      })();
    }
  }, [navigate, searchParams]);

  async function handleGoogleRequest() {
    const oauthUrl = `${import.meta.env.VITE_AUTH_URI}?client_id=${
      import.meta.env.VITE_GOOGLE_CLIENT_ID
    }&redirect_uri=${
      import.meta.env.VITE_GOOGLE_REDIRECT_URI
    }&response_type=code&scope=${encodeURIComponent(
      import.meta.env.VITE_DRIVE_SCOPE
    )}&access_type=offline&prompt=consent&include_granted_scopes=true`;

    // had to do this fetch was giving cors error and there is no way
    // change that
    window.location.href = oauthUrl;
  }

  return (
    <div className="flex w-full justify-center">
      <div className="flex flex-col gap-5 items-center">
        <div className="text-2xl">Login</div>
        <Button
          className={"bg-red-400 hover:bg-red-500"}
          onClick={handleGoogleRequest}
        >
          Google
        </Button>
      </div>
    </div>
  );
}
