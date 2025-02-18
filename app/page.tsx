import Countdown from "@/components/Countdown";
import Link from "next/link";

export default function Home() {
  return (
   <div className="tinted-background">
      <Countdown />
      <Link href="/enterNow">
        <button>Enter Now</button>
      </Link>
      <Link href="/faq">
        <button>FAQ</button>
      </Link>
      <Link href="/privacyPolicy">
        <button>Privacy Policy</button>
      </Link>
      <Link href="/termsOfService">
        <button>Terms of Service</button>
      </Link>
    </div>
    
  );
}
