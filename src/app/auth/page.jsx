"use client";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
export default function Auth() {

  const [loading, setLoading] = useState(false);


  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Toaster />
      <div className="bg-white shadow-lg rounded-lg max-w-3xl w-full py-24 px-10">
        <div className=" flex items-center justify-center">
          <div className="w-[50%] sm:w-[30%] lg:w-full flex items-center justify-center ">
            <img
              src="/whatsapp-logo.png"
              alt="WhatsApp"
              className="object-contain"
            />
          </div>

          <div className=" w-full space-y-4">
            <GoogleAuthComponent scope="https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/userinfo.profile email profile" />
          </div>

          <div className="w-[50%] sm:w-[30%] lg:w-full flex items-center justify-center">
            <img src="/gmail-logo.png" alt="Gmail" className="object-contain" />
          </div>
        </div>
      </div>
    </div>
  );
}

const GoogleAuthComponent = ({
  text = "Sign In with Google",
  scope = "email profile",
}) => {
  const [googleClient, setGoogleClient] = useState(null);

  useEffect(() => {
    const clientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;
    console.log(clientId, "clientId");
    const codeReceiverUri = `${window.location.origin}/auth/success`;
    const initGoogleAuth = () => {
      const client = window.google.accounts.oauth2.initCodeClient({
        client_id: clientId,
        scope: scope,
        ux_mode: "redirect",
        callback: (response) => {
          const xhr = new XMLHttpRequest();
          xhr.open("POST", codeReceiverUri, true);
          xhr.setRequestHeader(
            "Content-Type",
            "application/x-www-form-urlencoded"
          );
          // Set custom header for CSRF
          xhr.setRequestHeader("X-Requested-With", "XmlHttpRequest");
          xhr.onload = function () {};
          xhr.send("code=" + response.code);
        },
      });

      setGoogleClient(client);
    };

    if (window.google && window.google.accounts) {
      initGoogleAuth();
    } else {
      const script = document.createElement("script");
      script.src = "https://accounts.google.com/gsi/client";
      script.onload = () => {
        initGoogleAuth();
      };
      document.body.appendChild(script);
    }
  }, [scope]);

  const handleLoginClick = () => {
    if (googleClient) {
      googleClient.requestCode();
      return;
    }
  };

  return (
    <div>
      <button
        onClick={() => handleLoginClick()}
        className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      >
        <FcGoogle className="mr-2" /> {text}
      </button>
    </div>
  );
};



