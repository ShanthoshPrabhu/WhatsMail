"use client";
import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import Link from "next/link";

function Dashboard() {
  return (
    <div className="whatsapp-bg flex items-center justify-center min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center fixed w-full top-0">
        <Link
          href={`${process.env.NEXT_PUBLIC_APP_URL}`}
          className="flex items-center justify-center"
          prefetch={false}
        >
          <img
            src="/whatsmail.jpg"
            alt="logo"
            className="h-8 w-8  rounded-full"
          />
          <span className="ml-2 tracking-wide">WhatsMail</span>
        </Link>
      </header>
      <div className="bg-white shadow-lg rounded-xl max-w-3xl w-full py-6 px-10 flex items-center justify-center">
        <p className=" lg:text-2xl">
          Scan the following QR Code to start interacting with the WhatsApp
          platform
        </p>
        <div
          style={{
            marginTop: "20px",
            marginBottom: "20px",
            width: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <QRCodeCanvas
            value={`https://wa.me/+918778864562/`} // Add your desired URL here
            size={256} // You can adjust the size as needed
            level={"H"} // Error correction level
            includeMargin={true} // Includes margin around the QR code
            imageSettings={{
              src: "data:image/jpeg;base64,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", // Optional logo/icon
              height: 40,
              width: 40,
              excavate: true, // Optional: allows logo to be within QR code
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
