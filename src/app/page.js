import Link from "next/link";

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link
          href="#"
          className="flex items-center justify-center"
          prefetch={false}
        >
          <MountainIcon className="h-6 w-6" />
          <span className="ml-2 tracking-wide">WhatsMail</span>
        </Link>
        {/* <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Features
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Contact
          </Link>
        </nav> */}
      </header>
      <main className="flex-1 px-10 space-y-10 ">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 flex justify-center items-center lg:min-h-[90vh]">
          <div className=" px-4 md:px-6 w-full lg:w-[80%]">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] xl:gap-20">
              <div className="min-h-[50vh] md:min-h-[30vh]  relative flex flex-col justify-center space-y-4 ">
                <div className="space-y-8">
                  <h1 className="text-4xl font-bold tracking-tight sm:text-5xl xl:text-6xl/none">
                    Seamlessly Integrate Gmail and WhatsApp
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl ">
                    Streamline your communication with our powerful integration
                    of Gmail and WhatsApp. Stay connected and productive like
                    never before.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row !mt-7">
                  <Link
                    href="/auth"
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    prefetch={false}
                  >
                    Get Started
                  </Link>
                </div>
              </div>
              <div className=" relative flex flex-col items-center justify-center space-y-4 md:p-20 lg:p-0">
                <div className="flex gap-8 items-center justify-center z-50">
                  <div className="w-[50%] sm:w-[30%] lg:w-[50%] flex items-center justify-center ">
                    <img
                      src="/whatsapp-logo.png"
                      alt="WhatsApp"
                      className="object-contain"
                    />
                  </div>
                  <div className="w-[50%] bg-white  rounded-full sm:w-[30%] lg:w-[50%] flex items-center justify-center">
                    <img
                      src="/gmail-logo.png "
                      alt="Gmail"
                      className="object-contain rounded-[50%]"
                    />
                  </div>
                </div>
                <div className="spinner  w-[250px] h-[250px] lg:w-[370px] lg:h-[370px] absolute border-t-[8px] border-r-[8px] border-transparent border-b-[8px] border-l-[8px] rounded-full animate-spin"></div>
              </div>
            </div>
          </div>
        </section>
        {/* <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Powerful Integration
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Streamline Your Communication
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Seamlessly connect your Gmail and WhatsApp accounts to manage
                  all your communication in one place. Never miss a message or
                  email again.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div className="grid grid-cols-2 gap-4 ">
                  <div className="bg-[#E0E0E0] rounded-full p-4">
                    <MailIcon className="h-8 w-8 text-[#D44638]" />
                  </div>
                  <div className="bg-[#E0E0E0] rounded-full p-4">
                    <PhoneIcon className="h-8 w-8 text-[#25D366]" />
                  </div>
                </div>
              </div>
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  Seamless Integration
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Boost Your Productivity
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Streamline your communication and stay on top of your messages
                  and emails with our powerful integration. Never miss a beat.
                </p>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="w-full py-12 md:py-24 lg:py-32">
          <div className=" grid items-center gap-6 px-4 md:px-6 lg:grid-cols-2 lg:gap-10">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                Unlock Your Communication Potential
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Elevate your communication game with our seamless integration of
                Gmail and WhatsApp. Stay connected and productive like never
                before.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row lg:justify-end">
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Get Started
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
        </section> */}
      </main>
      {/* <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-muted-foreground">
          &copy; 2024 Acme Inc. All rights reserved.
        </p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-xs hover:underline underline-offset-4"
            prefetch={false}
          >
            Privacy
          </Link>
        </nav>
      </footer> */}
    </div>
  );
}

function MailIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function PhoneIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
