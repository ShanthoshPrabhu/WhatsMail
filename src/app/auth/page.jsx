"use client";
import axios from "axios";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { FcGoogle, FcInfo } from "react-icons/fc";
import { FaMicrosoft, FaYahoo } from "react-icons/fa6";
import DotLoader from "@/component/DotLoader/DotLoader";

export default function Auth() {
  const [loading, setLoading] = useState(true);
  const query = useSearchParams();
  const [authCode, setAuthCode] = useState(null);
  const [source, setSource] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");
  const router = useRouter();
  useEffect(() => {
    // setLoading(true);
    const authCode = query?.get("code");
    const source = axios?.CancelToken?.source();
    // console.log(authCode, source, query, "authCode, source, query");
    if (authCode) {
      setAuthCode(authCode);
      setSource(source);
    }
    setLoading(false);
  }, []);

  async function verifyNumber() {
    setLoading(true);
    try {
      let url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auth`;
      const headers = {
        "Content-Type": "application/json",
      };

      const response = await axios.post(url, {
        code: authCode,
        phone: "91" + `${phoneNumber}`,
      });
      if (response.data.success) {
        toast.success("Phone number verified successfully");
        router.push("/dashboard");
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
        setLoading(false);
      toast.error("Failed to verify phone number");
    }
  }

  //   useEffect(() => {
  //     const animateLogo = (id, speedX, speedY) => {
  //       const logo = document.getElementById(id);
  //       let posX = Math.random() * 200;
  //       let posY = Math.random() * 200;
  //       const container = document.getElementById("logo_container");
  //       const containerRect = container.getBoundingClientRect();

  //       const move = () => {
  //         posX += speedX;
  //         posY += speedY;

  //         if (posX + logo.offsetWidth >= containerRect.width || posX <= 0) {
  //           speedX = -speedX;
  //         }
  //         if (posY + logo.offsetHeight >= containerRect.height || posY <= 0) {
  //           speedY = -speedY;
  //         }

  //         logo.style.transform = `translate(${posX}px, ${posY}px)`;

  //         requestAnimationFrame(move);
  //       };

  //       move();
  //     };

  //     animateLogo("whatsapp_logo", 1, 1.5);
  //     animateLogo("gmail_logo", 1.5, 1);
  //   }, []);
  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center bg-background">
        <DotLoader />
      </div>
    );
  }
  return authCode ? (
    <div className=" min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <Toaster />
      <div className=" bg-white shadow-lg rounded-lg max-w-xl w-full p-10">
        <div className="text-lg text-left mb-6">Enter Your Phone Number</div>
        <input
          type="phone"
          placeholder="Phone Number"
          className="w-full p-3 border rounded-lg focus:outline-none focus:ring-1 focus:ring-blue-100 mb-6"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <button
          onClick={verifyNumber}
          className="w-full inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
        >
          {loading ? <DotLoader /> : "Continue"}
        </button>
      </div>
    </div>
  ) : (
    <div className="flex h-screen items-center justify-center bg-background">
      <Toaster />
      <div className="mx-4 w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Login</h1>
          <p className="mt-2 text-muted-foreground">
            Sign in to your account using one of the following options.
          </p>
        </div>
        <div className="w-full flex flex-col justify-center items-center space-y-4">
          <GoogleAuthComponent scope="https://www.googleapis.com/auth/gmail.readonly https://www.googleapis.com/auth/gmail.send https://www.googleapis.com/auth/userinfo.profile email profile" />
          <div>
            <button
              disabled
              onClick={() => {
                toast("Coming soon", {
                  icon: <FcInfo className="w-6 h-6" />,
                });
              }}
              className="w-[300px] inline-flex border border-gray-100 h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-white-foreground shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              <FaMicrosoft className="mr-2" /> Sign in with Microsoft
            </button>
          </div>
          <div>
            <button
              disabled
              onClick={() => {
                toast("Coming soon", {
                  icon: <FcInfo className="w-6 h-6" />,
                });
              }}
              className="w-[300px] inline-flex border border-gray-100 h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-white-foreground shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            >
              <FaYahoo className="mr-2" /> Sign in with Yahoo
            </button>
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
        className="w-[300px] inline-flex border border-gray-100 h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-white-foreground shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
      >
        <FcGoogle className="mr-2" /> {text}
      </button>
    </div>
  );
};
