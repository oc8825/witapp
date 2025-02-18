"use client";

import Countdown from "@/components/Countdown";
import Link from "next/link";
import buttonStyles from "@/styles/buttons.module.scss";
import backgroundStyles from "@/styles/background.module.scss";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
   <div>
    <div className={backgroundStyles["main-section"]}>
      <Countdown />
      <Link href="/enterNow">
        <button className={buttonStyles["larger-button"]} onClick={() => router.push("/enterNow")}>
          ENTER NOW
        </button>
      </Link>
    </div>
    <div className={backgroundStyles["video-section"]}>
      <img src="/images/video1.png" className={backgroundStyles["video-image"]} alt="Image 1" />
      <img src="/images/video2.png" className={backgroundStyles["video-image"]} alt="Image 2" />
      <img src="/images/video3.png" className={backgroundStyles["video-image"]} alt="Image 3" />
      <img src="/images/video4.png" className={backgroundStyles["video-image"]} alt="Image 4" />
      <img src="/images/video5.png" className={backgroundStyles["video-image"]} alt="Image 5" />    
    </div>
    <div className={backgroundStyles["cta-section"]}>
      <p>This is the CTA section</p>
      <Link href="/enterNow">
        <button className={buttonStyles["larger-button"]} onClick={() => router.push("/enterNow")}>
          ENTER NOW
        </button>
      </Link>
    </div>
    <div className={backgroundStyles["footer-section"]}>
      <Link href="/faq">
        <button className={buttonStyles["simple-button"]} onClick={() => router.push("/faq")}>
          FAQ
        </button>
      </Link>
      <Link href="/privacyPolicy">
        <button className={buttonStyles["simple-button"]} onClick={() => router.push("/privacyPolicy")}>
          Privacy Policy
        </button>
      </Link>
      <Link href="/termsOfService">
        <button className={buttonStyles["simple-button"]} onClick={() => router.push("/termsOfService")}>
          Terms of Service
        </button>
      </Link>
    </div>
   </div>
    
  );
}
